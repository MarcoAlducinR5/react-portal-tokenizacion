import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import {
  EntradaProcess,
  RequestGenerarIdentificadorUnicoDePagoInterface,
  ResponseGenerarIdentificadorUnicoDePagoInterface
} from "../interfaces/billetera/GeneraIdentificadorUnicoDePago.Interface";
import { SERVICE_APIGWCS_METHOD_GENERA_IDUNICOPAGO } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";

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
 * Header genérico para solicitudes servicios SOA
 */
let reqHeader: EBMHeaderRequest = EbmHeaderRequestApigwcs("GenerarIdUnicoPago");

/**
 * getDataService_GenerarIdUnicoPago
 * @param cuenta
 * @param clearingHouse
 * @returns idPago
 */
export const getDataService_GenerarIdUnicoPago = (
  cuenta: string,
  clearingHouse: string
) => {
  const request: EntradaProcess = {
    Cuenta: cuenta,
    Proceso: "PAGO",
    ClearingHouse: clearingHouse,
    SistemaOrigen: "SEL"
  };
  const payload: RequestGenerarIdentificadorUnicoDePagoInterface = {
    EBMHeaderRequest: reqHeader,
    Entrada_Process: request
  };

  console.log(
    "Generaldo payload Req ",
    SERVICE_APIGWCS_METHOD_GENERA_IDUNICOPAGO
  );

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_GENERA_IDUNICOPAGO,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

/**
 * generarIdUnicoPago
 * @param cuenta
 * @param clearingHouse
 * @returns idPago
 */
export const generarIdUnicoPago = async (
  cuenta: string,
  clearingHouse: string
) => {
  let idPago = "";
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = getDataService_GenerarIdUnicoPago(
      cuenta,
      clearingHouse
    );

    console.log(
      "solicitando POST - ",
      SERVICE_APIGWCS_METHOD_GENERA_IDUNICOPAGO
    );

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseGenerarIdentificadorUnicoDePagoInterface = response.data;
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
          idPago = resp.Salida_Process.IdPagoSKY;
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
  return idPago;
};
