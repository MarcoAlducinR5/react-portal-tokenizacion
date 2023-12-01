import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_CAMBIO_FORMAPAGO } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  ListOfServiceInstance,
  PagoRequestEBO,
  RequestGestionarSSCambioFormaPagoInterface,
  ResponseGestionarSSCambioFormaPagoInterface,
  ServiceInstance
} from "../interfaces/billetera/GestionaSSCambioFormaPago.Interface";
import { formatDateToUTCString } from "../../Utils/format";

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
  "GestionarSSCambioFormaPago"
);

export const getDataService_GestionarSSCambioFormaPago = (
  reqGestionaSSCambio: ReqGestionaSSCambio
) => {
  console.log(
    "Generaldo payload Req ",
    SERVICE_APIGWCS_METHOD_CAMBIO_FORMAPAGO
  );

  const listOfServiceInstance: ListOfServiceInstance = {
    ServiceInstance: reqGestionaSSCambio.listServiceInstance
  };
  const request: PagoRequestEBO = {
    Operacion: "SKY Gestiona Pagos",
    Proceso: "Cambio Forma Pago",
    Cuenta: reqGestionaSSCambio.cuenta,
    PayOffFlag: "N",
    CodigoSKY: generarCodigoSky(reqGestionaSSCambio.cuenta, "SEL", "DM"), //se crea con la cuenta
    PaymentCardNumber: reqGestionaSSCambio.noTarjeta,
    PaymentInstrument: reqGestionaSSCambio.token,
    InstrumentIdentifier: reqGestionaSSCambio.InstrumentId,
    AuthenticationTransactioId: null,
    xid: null,
    BillFrequency: "Mensual",
    BillType: "Sin Factura",
    PaymentMethod:
      "Tarjeta de " +
      reqGestionaSSCambio.tipoBin.substring(0, 1).toUpperCase() +
      reqGestionaSSCambio.tipoBin.substring(1).toLowerCase(), //Credito/Debito",
    PaymentSystem: "Pospago", //Prepago | Pospago
    PaymentBillFeeFlag: "N",
    Comments: "Registro Tarjeta Tel. " + reqGestionaSSCambio.numeroTelefonico,
    Origen: "Web",
    ListOfServiceInstance: listOfServiceInstance
  };

  const payload: RequestGestionarSSCambioFormaPagoInterface = {
    EBMHeaderRequest: reqHeader,
    PagoRequestEBO: request
  };

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_CAMBIO_FORMAPAGO,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
};

export const gestionarSSCambioFormaPago = async (
  reqGestionaSSCambio: ReqGestionaSSCambio
) => {
  let gestionaCambio = false;
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices =
      getDataService_GestionarSSCambioFormaPago(reqGestionaSSCambio);

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_CAMBIO_FORMAPAGO);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseGestionarSSCambioFormaPagoInterface = response.data;
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
          gestionaCambio = true;
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
  return gestionaCambio;
};

export interface ReqGestionaSSCambio {
  cuenta: string;
  token: string;
  noTarjeta: string;
  tipoBin: string;
  InstrumentId: string;
  numeroTelefonico: string;
  listServiceInstance: ServiceInstance[];
}

function generarCodigoSky(cuenta: string, origen: string, proceso: string) {
  let codigoSky: string = "";
  codigoSky = cuenta.concat(
    "_",
    origen.concat("_"),
    proceso.concat("_"),
    getFechaParaCodigoSKY()
  );
  return codigoSky;
}

function getFechaParaCodigoSKY() {
  const dateUtc = new Date();

  console.log("toUTCString: ", dateUtc.toUTCString());
  return formatDateToUTCString(dateUtc, "yyyyMMDDHHmmss");
}
