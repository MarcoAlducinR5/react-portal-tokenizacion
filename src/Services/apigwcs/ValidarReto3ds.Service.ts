import axios from "axios";
import { SERVICE_APIGWCS_METHOD_VALIDA_RETO3DS } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import {
  RequestValidarReto3DsInterface,
  ResponseValidarReto3DsInterface,
  ComercioInfo,
  OrdenInfo,
  CompradorInfo,
  AutenticacionInfo,
  InstrumentoDePagoInfo,
  DetallesCantidad,
  RespuestaGenerarReto
} from "../interfaces/billetera/ValidaReto3ds.Interface";

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
let reqHeader: EBMHeaderRequest = EbmHeaderRequestApigwcs("ValidarReto3DS");

export function GetDataService_ValidarReto3DS(
  reqValidarReto: RequestValidarReto3DS
) {
  const comercio: ComercioInfo = {
    ComercioId: reqValidarReto.mId,
    CodigoSKY: reqValidarReto.codigoSky
  };
  const cantidad: DetallesCantidad = {
    CantidadTotal: reqValidarReto.monto,
    Moneda: reqValidarReto.monedaIso
  };
  const order: OrdenInfo = {
    DetallesCantidad: cantidad
  };
  const idPago: InstrumentoDePagoInfo = {
    Id: reqValidarReto.instrumentoDePagoId
  };
  const comprador: CompradorInfo = {
    TelefonoMovil: reqValidarReto.telMovilComprador
  };
  const autenticacion: AutenticacionInfo = {
    ModoTransaccion: "MOTO",
    TransaccionId: reqValidarReto.transaccionId
  };

  const payload: RequestValidarReto3DsInterface = {
    EBMHeaderRequest: reqHeader,
    ComercioInfo: comercio,
    OrdenInfo: order,
    InstrumentoDePagoInfo: idPago,
    CompradorInfo: comprador,
    AutenticacionInfo: autenticacion
  };

  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_VALIDA_RETO3DS,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };

  return doDataServices;
}
export async function ValidarReto3DS(reqValidarReto: RequestValidarReto3DS) {
  let responseValReto: ResponseValidarReto3DS = {
    codigo: "-1",
    descripccion: "",
    estatus3ds: "",
    eciRaw: "",
    xid: "",
    specificationVersion: "",
    ecommerceIndicator: "",
    cavv: "",
    ucafCollectionIndicator: "",
    ucafAuthenticationData: "",
    directoryServerTransactionId: "",
    nombreEmpresaTransaccion: ""
  };
  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices =
      GetDataService_ValidarReto3DS(reqValidarReto);

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_VALIDA_RETO3DS);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseValidarReto3DsInterface = response.data;
    console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    if (resp.EBMHeaderResponse) {
      if (
        resp.EBMHeaderResponse?.ErrorTecnico.code === "ok" ||
        resp.EBMHeaderResponse?.ErrorTecnico.code === "0"
      ) {
        //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
        if (resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0") {
          /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                  por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                  y mostrar un mensaje personalizado al usuario*/
          if (resp.RespuestaGenerarReto) {
            const rspValReto: RespuestaGenerarReto = resp.RespuestaGenerarReto;
            responseValReto.estatus3ds = rspValReto.EstadoSky.Estado;
            responseValReto.eciRaw =
              rspValReto.InformacionDeAutenticacion.eciRaw;
            responseValReto.xid = rspValReto.InformacionDeAutenticacion.xid;
            responseValReto.ecommerceIndicator =
              rspValReto.InformacionDeAutenticacion.ecommerceIndicator;
            responseValReto.cavv = rspValReto.InformacionDeAutenticacion.cavv;
            responseValReto.ucafAuthenticationData =
              rspValReto.InformacionDeAutenticacion.ucafAuthenticationData;
            responseValReto.directoryServerTransactionId =
              rspValReto.InformacionDeAutenticacion.directoryServerTransactionId;
            responseValReto.specificationVersion =
              rspValReto.InformacionDeAutenticacion.specificationVersion;
            responseValReto.ucafCollectionIndicator =
              rspValReto.InformacionDeAutenticacion.ucafCollectionIndicator;
            responseValReto.nombreEmpresaTransaccion =
              rspValReto.InformacionDePago.Tarjeta.Tipo;

            responseValReto.codigo = "0";
            responseValReto.descripccion =
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
  return responseValReto;
}

export interface RequestValidarReto3DS {
  mId: string; //mid
  codigoSky: string; ///evalRiesgoResponseWSDTO.getCodigoSKY()
  instrumentoDePagoId: string; //token
  telMovilComprador: string; //NumTelefono en billetera
  transaccionId: string; //responseEvaluarReto.authenticationTransactionId
  monto: string;
  monedaIso: string;
}

export interface ResponseValidarReto3DS {
  codigo: string;
  descripccion: string;
  estatus3ds: string; //Estado
  eciRaw: string; //InfoDeAutenticacion.EciRaw
  xid: string; //InfoDeAutenticacion.Xid
  specificationVersion: string; //InfoDeAutenticacion.SpecificationVersion
  ecommerceIndicator: string; //InfoDeAutenticacion.EcommerceIndicator
  cavv: string; //InfoDeAutenticacion.Cavv
  ucafCollectionIndicator: string; //InfoDeAutenticacion.UcafCollectionIndicator
  ucafAuthenticationData: string; //InfoDeAutenticacion.DirectoryServerTransactionId
  directoryServerTransactionId: string; //InfoDeAutenticacion.DirectoryServerTransactionId
  nombreEmpresaTransaccion: string; //InfoDePago.Tarjeta.Tipo
}
