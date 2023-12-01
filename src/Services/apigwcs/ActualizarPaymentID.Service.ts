import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_ACTUALIZA_CYBER } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  DatosTarjeta,
  RequestActualizarPaymentIDInterface,
  ResponseActualizarPaymentIDInterface
} from "../interfaces/billetera/ActualizaPaymentID.Interface";

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
let reqHeader: EBMHeaderRequest = EbmHeaderRequestApigwcs(
  "ActualizarPaymentID"
);

export const getDataService_ActualizarPaymentId = (
  reqActualizarPaymentId: ReqActualizarPaymentId
) => {
  const datosTarjeta: DatosTarjeta = {
    MesDeExpiracion: reqActualizarPaymentId.mesExpiracion,
    AnioDeExpiracion: reqActualizarPaymentId.anioExpiracion
  };
  const payload: RequestActualizarPaymentIDInterface = {
    EBMHeaderRequest: reqHeader,
    ComercioId: reqActualizarPaymentId.mId,
    InstrumentoPagoId: reqActualizarPaymentId.token,
    DatosTarjeta: datosTarjeta
  };

  console.log("Generaldo payload Req ", SERVICE_APIGWCS_METHOD_ACTUALIZA_CYBER);
  console.log("payload ActualizarPaymentId: ", payload);
  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_ACTUALIZA_CYBER,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

export const ActualizarPaymentId = async (
  reqActualizarPaymentId: ReqActualizarPaymentId
) => {
  let update = false;
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = getDataService_ActualizarPaymentId(
      reqActualizarPaymentId
    );

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_ACTUALIZA_CYBER);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseActualizarPaymentIDInterface = response.data;
    console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    if (resp.EBMHeaderResponse) {
      if (resp.EBMHeaderResponse?.ErrorTecnico.code === "0") {
        //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
        if (resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0") {
          /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                y mostrar un mensaje personalizado al usuario*/
          update = true;
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
  return update;
};

interface ReqActualizarPaymentId {
  mId: string;
  token: string;
  mesExpiracion: string;
  anioExpiracion: string;
}
