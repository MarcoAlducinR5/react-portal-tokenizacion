import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  RequestConsultarBilleteraInterface,
  ResponseConsultarBilleteraInterface,
  ConsultarBilleteraListInput
} from "../interfaces/billetera/ConsultaBilletera.Interface";

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
let reqHeaderGetBilletera: EBMHeaderRequest = EbmHeaderRequestApigwcs(
  "GwConsultarBilleteraEBF"
);

export const getPayloadReq_ConsultarBilletera = (
  numeroCuenta: string,
  paymentInstrument?: string
) => {
  const reqBilletera: RequestConsultarBilleteraInterface = {
    EBMHeaderRequest: reqHeaderGetBilletera,
    NumeroCuenta: numeroCuenta,
    PaymentInstrument: paymentInstrument
  };

  console.log("Generaldo payload Req - GwConsultarBilleteraEBF");
  return JSON.stringify(reqBilletera);
};

/**
 * getDataService_GenerarURLBilletera
 * @param payloadReqUrl
 * @returns
 */
export const getDataService_ConsultarBilletera = (
  numeroCuenta: string,
  paymentInstrument?: string
) => {
  const payload: RequestConsultarBilleteraInterface = {
    EBMHeaderRequest: reqHeaderGetBilletera,
    NumeroCuenta: numeroCuenta,
    PaymentInstrument: paymentInstrument
  };

  console.log(
    "Generando payload Req ",
    SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA
  );

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

/**
 * generarURLBilletera : Genera la URL de portal Tokenizacion para el registro de tarjeta TDC
 * @param payloadReqUrlBilletera : datos necesarios para realizar la solicutud de generacion de la url de pagos
 * @returns
 */
export const consultarBilletera = async (
  numeroCuenta: string,
  paymentInstrument?: string
) => {
  let listaBilletera: ConsultarBilleteraListInput[] = [];
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = getDataService_ConsultarBilletera(
      numeroCuenta,
      paymentInstrument
    );

    console.log(
      "solicitando POST - ",
      SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA
    );

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseConsultarBilleteraInterface = response.data;
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
          if (resp.ConsultarBilleteraListInput !== undefined)
            listaBilletera = resp.ConsultarBilleteraListInput;
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
  return listaBilletera;
};
