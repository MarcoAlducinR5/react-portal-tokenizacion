import axios from "axios";
import { SERVICE_APIGWCS_METHOD_EVALUA_RETO3DS } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import {
  RequestEvaluarReto3DsInterface,
  ResponseEvaluarReto3DsInterface,
  ComercioInfo,
  OrdenInfo,
  CompradorInfo,
  AutenticacionInfo,
  InstrumentoDePagoInfo,
  DetallesCantidad,
  RespuestaGenerarReto
} from "../interfaces/billetera/EvaluaReto3DS.Interface";

const {
  REACT_APP_URL_APIGWCS,
  REACT_APP_USERNAME_APIGWCS,
  REACT_APP_PASSWORD_APIGWCS,
  REACT_APP_URL_RETURN_RETO
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
let reqHeader: EBMHeaderRequest = EbmHeaderRequestApigwcs("EvaluarReto3DS");

export function GetDataService_EvaluarReto3DS(
  reqEvaluarReto: RequestEvaluarReto3DS
) {
  const comercio: ComercioInfo = {
    ComercioId: reqEvaluarReto.mId,
    CodigoSKY: reqEvaluarReto.codigoSky
  };
  const cantidad: DetallesCantidad = {
    CantidadTotal: reqEvaluarReto.monto,
    Moneda: reqEvaluarReto.monedaIso
  };
  const order: OrdenInfo = {
    DetallesCantidad: cantidad
  };
  const idPago: InstrumentoDePagoInfo = {
    Id: reqEvaluarReto.instrumentoDePagoId
  };
  const comprador: CompradorInfo = {
    TelefonoMovil: reqEvaluarReto.telMovilComprador
  };
  const autenticacion: AutenticacionInfo = {
    ModoTransaccion: "MOTO",
    ReferenciaId: reqEvaluarReto.referenciaId,
    UrlDeRetorno: REACT_APP_URL_RETURN_RETO ?? "",
    Canal: "Browser"
  };

  const payload: RequestEvaluarReto3DsInterface = {
    EBMHeaderRequest: reqHeader,
    ComercioInfo: comercio,
    OrdenInfo: order,
    InstrumentoDePagoInfo: idPago,
    CompradorInfo: comprador,
    AutenticacionInfo: autenticacion
  };

  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_EVALUA_RETO3DS,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
}
export async function EvaluarReto3DS(reqEvaluarReto: RequestEvaluarReto3DS) {
  let responseEvalReto: ResponseEvaluarReto3DS = {
    codigo: "-1",
    descripccion: "",
    estatus3DS: "",
    acsUrl: "",
    stepUpUrl: "",
    accessToken: "",
    pareq: "",
    authenticationTransactionId: "",
    cavv: "",
    directoryServerTransactionId: "",
    ucafAuthenticationData: "",
    ucafCollectionIndicator: "",
    eciRaw: "",
    ecommerceIndicator: "",
    specificationVersion: "",
    xid: ""
  };
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices =
      GetDataService_EvaluarReto3DS(reqEvaluarReto);

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_EVALUA_RETO3DS);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseEvaluarReto3DsInterface = response.data;
    console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    console.log("resp.EBMHeaderResponse: ", resp.EBMHeaderResponse);
    if (resp.EBMHeaderResponse) {
      console.log("++++++ ", resp.EBMHeaderResponse?.ErrorTecnico.code);
      if (
        resp.EBMHeaderResponse?.ErrorTecnico.code === "ok" ||
        resp.EBMHeaderResponse?.ErrorTecnico.code === "0"
      ) {
        console.log("entrando con status OK");
        //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
        if (resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0") {
          /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                  por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                  y mostrar un mensaje personalizado al usuario*/
          console.log("entrando con estatus 0");
          if (resp.RespuestaGenerarReto) {
            console.log("reecuperando respuesta RespuestaGenerarReto");
            const rspEvalReto: RespuestaGenerarReto = resp.RespuestaGenerarReto;
            responseEvalReto.estatus3DS = rspEvalReto.EstadoSky.Estado;
            responseEvalReto.acsUrl =
              rspEvalReto.InformacionDeAutenticacion.acsUrl;
            responseEvalReto.stepUpUrl =
              rspEvalReto.InformacionDeAutenticacion.stepUpUrl;
            responseEvalReto.accessToken =
              rspEvalReto.InformacionDeAutenticacion.accessToken;
            responseEvalReto.pareq =
              rspEvalReto.InformacionDeAutenticacion.pareq;
            responseEvalReto.authenticationTransactionId =
              rspEvalReto.InformacionDeAutenticacion.authenticationTransactionId;
            responseEvalReto.cavv = rspEvalReto.InformacionDeAutenticacion.cavv;
            responseEvalReto.directoryServerTransactionId =
              rspEvalReto.InformacionDeAutenticacion.directoryServerTransactionId;
            responseEvalReto.ucafAuthenticationData =
              rspEvalReto.InformacionDeAutenticacion.ucafAuthenticationData;
            responseEvalReto.ucafCollectionIndicator =
              rspEvalReto.InformacionDeAutenticacion.ucafCollectionIndicator;
            responseEvalReto.eciRaw =
              rspEvalReto.InformacionDeAutenticacion.eciRaw;
            responseEvalReto.ecommerceIndicator =
              rspEvalReto.InformacionDeAutenticacion.ecommerceIndicator;
            responseEvalReto.specificationVersion =
              rspEvalReto.InformacionDeAutenticacion.specificationVersion;
            responseEvalReto.xid = rspEvalReto.InformacionDeAutenticacion.xid;
            responseEvalReto.codigo = "0";
            responseEvalReto.descripccion =
              resp.EBMHeaderResponse.ErrorNegocio.DescripcionError;
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
  return responseEvalReto;
}

export interface RequestEvaluarReto3DS {
  instrumentoDePagoId: string; //token
  mId: string; //mid
  codigoSky: string; ///evalRiesgoResponseWSDTO.getCodigoSKY()
  referenciaId: string; //sessionId
  monto: string;
  monedaIso: string;
  telMovilComprador: string; //NumTelefono en billetera
}

export interface ResponseEvaluarReto3DS {
  codigo: string;
  descripccion: string;
  estatus3DS: string; //EstadoSky
  acsUrl: string; //InfoDeAutenticacion.AcsUrl
  stepUpUrl: string;
  accessToken: string;
  pareq: string; //InfoDeAutenticacion.Pareq
  authenticationTransactionId: string; //InfoDeAutenticacion.AuthenticationTransactionId
  cavv: string;
  directoryServerTransactionId: string;
  ucafAuthenticationData: string;
  ucafCollectionIndicator: string;
  eciRaw: string;
  ecommerceIndicator: string;
  specificationVersion: string;
  xid: string;
}
