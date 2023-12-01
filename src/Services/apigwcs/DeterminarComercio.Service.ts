import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_DETERMINA_COMERCIO } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  ConsultarComercioInput,
  RequestDeterminarComercioInterface,
  ResponseDeterminarComercioInterface
} from "../interfaces/billetera/DeterminaComercio.Interface";

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
let reqHeaderGenerico: EBMHeaderRequest =
  EbmHeaderRequestApigwcs("DeterminarComercio");

/**
 * getDataService_DeterminarComercio
 * @param paisIso : codigo de pais ISO MX,CR,GT,HN,NI,PA,DO,SV
 * @param tipoTarjeta : codigo de tarjeta = 001, 002, 003
 * @returns
 */
export const getDataService_DeterminarComercio = (
  paisIso: string,
  tipoTarjeta: string
) => {
  const reqConsulta: ConsultarComercioInput = {
    Pais: paisIso,
    Sistema: "SEL",
    CodigoTarjeta: tipoTarjeta,
    AfiliacionRecurrente: ""
  };
  const payload: RequestDeterminarComercioInterface = {
    EBMHeaderRequest: reqHeaderGenerico,
    ConsultarComercioInput: reqConsulta
  };

  console.log(
    "Generando payload Req ",
    SERVICE_APIGWCS_METHOD_DETERMINA_COMERCIO
  );

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_DETERMINA_COMERCIO,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

/**
 * DeterminarComercio
 * @param paisIso : codigo de pais ISO MX,CR,GT,HN,NI,PA,DO,SV
 * @param tipoTarjeta : : codigo de tarjeta = 001, 002, 003
 * @returns tasaCambio = La Tasa de cambio para el monto a cobrar
 */
export const determinarComercio = async (
  paisIso: string,
  tipoTarjeta: string
) => {
  let comercio: RespComercioInterface = {
    mId: null,
    noAfiliacion: "",
    clearingHouse: "",
    monedaIso: "",
    codigoMoneda: "",
    codigoTarjeta: "",
    secureAcceptancePr: "",
    secureAcceptanceAk: "",
    secureAcceptanceSk: "",
    cardinalOr: "",
    cardinalAk: "",
    cardinalAi: "",
    deviceFingerPrintOr: ""
  };

  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = getDataService_DeterminarComercio(
      paisIso,
      tipoTarjeta
    );

    console.log(
      "solicitando POST - ",
      SERVICE_APIGWCS_METHOD_DETERMINA_COMERCIO
    );

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axios
    let resp: ResponseDeterminarComercioInterface = response.data;
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
          const tipoCambioColleccion = resp.BilleteraComercioCollection;
          tipoCambioColleccion?.BilleteraComercio?.forEach((tipoC) => {
            comercio.mId = tipoC.mid; //mid
            comercio.noAfiliacion = tipoC.afiliacion; //afiliacion
            comercio.clearingHouse = tipoC.clearingHouse; //SVI
            comercio.monedaIso = tipoC.monedaIso; //MXN
            comercio.codigoMoneda = tipoC.codigoMoneda; //MXP
            comercio.codigoTarjeta = tipoC.codigoTarjeta; //001
            comercio.secureAcceptancePr = tipoC.sacPr; //sacPr
            comercio.secureAcceptanceAk = tipoC.sacAk; //sacAk
            comercio.secureAcceptanceSk = tipoC.sacSk; //sacSk
            comercio.cardinalOr = tipoC.carOr; //carOr
            comercio.cardinalAk = tipoC.carAk; //carAk
            comercio.cardinalAi = tipoC.carAi; //carAi
            comercio.deviceFingerPrintOr = tipoC.dfpOr; //dfpOr
          });
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
  return comercio;
};

export interface RespComercioInterface {
  mId: string | null; //mid
  noAfiliacion: string; //afiliacion
  clearingHouse: string; //SVI
  monedaIso: string; //MXN
  codigoMoneda: string; //MXP
  codigoTarjeta: string; //001
  secureAcceptancePr: string; //sacPr
  secureAcceptanceAk: string; //sacAk
  secureAcceptanceSk: string; //sacSk
  cardinalOr: string; //carOr
  cardinalAk: string; //carAk
  cardinalAi: string; //carAi
  deviceFingerPrintOr: string; //dfpOr
}
