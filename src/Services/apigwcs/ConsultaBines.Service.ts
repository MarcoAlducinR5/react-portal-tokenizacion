import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_CONSULTA_BINES } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  RequestConsultarBinesInterface,
  ResponseConsultarBinesInterface
} from "../interfaces/billetera/ConsultaBines.Interface";

const {
  REACT_APP_URL_APIGWCS,
  REACT_APP_USERNAME_APIGWCS,
  REACT_APP_PASSWORD_APIGWCS
} = process.env;

let url_base = REACT_APP_URL_APIGWCS ?? "";
let method = "POST";
const auth = {
  username: REACT_APP_USERNAME_APIGWCS ?? "",
  password: REACT_APP_PASSWORD_APIGWCS ?? ""
};

/**
 * Header genérico para solicitudes servicios apigwcs
 */
let reqHeaderGetBilletera: EBMHeaderRequest =
  EbmHeaderRequestApigwcs("ConsultarBines");

/**
 * getDataService_ConsultarBines
 * @param binTdc : Bin de tarjeta 000000
 * @param noTarjeta : numero de tarjeta
 * @param paisIso : codigo de pais ISO MX,CR,GT,HN,NI,PA,DO,SV
 * @returns DoDateServices
 */
export const getDataService_ConsultarBines = (
  binTdc: string,
  noTarjeta: string | null,
  paisIso: string
) => {
  const payload: RequestConsultarBinesInterface = {
    EBMHeaderRequest: reqHeaderGetBilletera,
    CardBIN: binTdc,
    CardNumber: noTarjeta,
    CountryCode: paisIso
  };

  console.log("Generando payload Req ", SERVICE_APIGWCS_METHOD_CONSULTA_BINES);

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_CONSULTA_BINES,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

/**
 * consultarBines
 * @param binTdc : Bin de tarjeta 000000
 * @param noTarjeta : numero de tarjeta
 * @param paisIso : codigo de pais ISO MX,CR,GT,HN,NI,PA,DO,SV
 * @returns : BinesInterface
 */
export const consultarBines = async (
  binTdc: string,
  noTarjeta: string | null,
  paisIso: string
) => {
  let bin: ResponseBinesInterface = {
    nobin: null,
    tipoBin: null,
    tipoTdc: null,
    clearingHouseCve: null,
    clearingHouse: null,
    domesticFlag: null,
    bankCode: null,
    bank: null
  };

  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = getDataService_ConsultarBines(
      binTdc,
      noTarjeta,
      paisIso
    );

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_CONSULTA_BINES);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axios
    let resp: ResponseConsultarBinesInterface = response.data;
    console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    if (resp.EBMHeaderResponse) {
      if (resp.EBMHeaderResponse?.ErrorTecnico.code === "ok") {
        //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
        if (resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0") {
          /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                y mostrar un mensaje personalizado al usuario*/
          const dataBin = resp.ClasificacionesLlamada;
          if (
            dataBin.CardBIN !== undefined &&
            dataBin.CardBIN !== null &&
            dataBin.CardBIN !== "undefined"
          ) {
            bin.nobin = dataBin.CardBIN;
            bin.tipoBin = dataBin.BINType;
            bin.tipoTdc = dataBin.CardType;
            bin.clearingHouse = dataBin.ClearingHouse;
            bin.clearingHouseCve = dataBin.ClearingHouseCve;
            bin.bank = dataBin.Bank;
            bin.bankCode = dataBin.BankCode;
            bin.domesticFlag = dataBin.DomesticFlag;
          }
        }
      } else {
        //Se actualiza en estado de error de servicio a -2
        //: es el código genérico para indicar que ocurrió un error Técnico en el llamado al servicio
      }
    } else {
      //si no existe solo se regresa el response para ser evaluado en la llamada
    }
  } catch (error: any) {
    console.error(error);
    //Verifica si hay respuesta: se sigue recisando
    if (error.response) {
      //Envìa los diferentes errores al log
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    //Se actualiza en estado de error de servicio a -1
    //: es el código genérico para indicar que ocurrió un error en el llamado al servicio
  }
  return bin;
};

export interface ResponseBinesInterface {
  nobin: string | null; //"376673",
  tipoBin: string | null; //CREDITO
  tipoTdc: string | null; // AMEX
  clearingHouseCve: string | null; //"1",
  clearingHouse: string | null; //"AMX",
  domesticFlag: string | null; //"Y",
  bankCode: string | null;
  bank: string | null;
}
