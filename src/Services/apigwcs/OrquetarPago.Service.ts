import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import axios from "axios";
import { SERVICE_APIGWCS_METHOD_ORQUESTA_PAGO } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  RequestOrquestarProcesoPagoInterface,
  ResponseOrquestarProcesoPagoInterface,
  DatosTarjetaEntrada,
  DatosTransaccionEntrada,
  RespuestaPagoTarjeta
} from "../interfaces/billetera/OrquestaProcesoPago.Interface";
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
 * Header genérico para solicitudes servicios apigwcs
 */
let reqHeaderGenerico: EBMHeaderRequest = EbmHeaderRequestApigwcs(
  "OrquestarProcesoPago",
  "Web"
);

export const getDataService_OrquestarPago = (
  reqPago: RequestOrquestarPagoInterface
) => {
  const auxTransactionId = reqPago.idPagoUnico.split("_");
  //se actualiza el id de pago unico para enviarlo como transactionId
  if (auxTransactionId.length !== 0) {
    reqPago.idPagoUnico = "PAGO_" + auxTransactionId[2];
  }
  const auxfExp = reqPago.datosTdc.fechaExpTarjeta.split("/");
  const fExpTdc: string = auxfExp[1].substring(2) + auxfExp[0];
  if (fExpTdc !== undefined && fExpTdc !== null) {
    reqPago.datosTdc.fechaExpTarjeta = fExpTdc;
  }
  const datosTarjeta: DatosTarjetaEntrada = reqPago.datosTdc;
  // obtener el nombre del mes, día del mes, año, hora
  const now = new Date();

  const horaActual: string = formatDateToUTCString(now, "HHmmss");
  const fechaActual: string = formatDateToUTCString(now, "YYMMDD");

  const tPago =
    "Tarjeta de " +
    reqPago.tipoBin.substring(0, 1).toUpperCase() +
    reqPago.tipoBin.substring(1).toLowerCase(); //"Tarjeta de " + tarjetaPago.getTipoTarjeta().substring(0, 1) + tarjetaPago.getTipoTarjeta().substring(1).toLowerCase()
  let importe = parseFloat(reqPago.importePago).toFixed(2);
  let importeLocal = parseFloat(reqPago.importePagoLocal).toFixed(2);

  const datosTransaccion: DatosTransaccionEntrada = {
    tipoOperacion: "AplicarPago",
    idTransaccion: auxTransactionId[2] ?? reqPago.idPagoUnico, //3116922080100001981
    numeroCuentaClienteSky: reqPago.cuenta, //cuentaSKY
    horaActual: horaActual, //153506
    fechaActual: fechaActual, //220801
    propositoPago: "1",
    importePago: importe, //monto
    importePagoMonedaLocal: importeLocal, //monto*tasa  String.format("%.2f", imPagoMonLocal)
    tipoCambio: reqPago.tipoCambio, // tasa = 1, dependiendo el pais y lo que regrese el consultaTipoCambio
    pais: getNombrePais(reqPago.paisISO), //Mexico, dependera del codigoISO
    codeStore: "",
    authidresponse: "",
    clerkId: "",
    origFecha: "",
    origHora: "",
    origStan: "",
    origMsg: "",
    sistemaOrigenPago: "SEL",
    codigoMoneda: reqPago.codigoMoneda, //MXP
    entidadBancaria: reqPago.entidadBancaria, //clearingHouse DeterminarComercioResponse
    tipoPago: tPago,
    tokenVoltage: "Y",
    comentarios: "",
    MerchantId: reqPago.mId,
    CodigoSKY: reqPago.codigoSKY, //401003320835_SEL_PAGO_20220801153506
    Captura: "true",
    Token: reqPago.instrumentoDePagoId, //token tdc
    loginUsr: reqPago.sesionId, //uuid, "aedf2806-08d2-493e-8a77-39618d68ec13"
    IdSesion: reqPago.sesionId, //undefined
    EcommerceIndicator: reqPago.ecommerceIndicator ?? "",
    AuthenticationTransactioId: "", //pbhe2fnVAoVmE98tild0
    Cavv: reqPago.cavv ?? "",
    Eci: reqPago.eciRaw ?? "",
    EciRaw: reqPago.eciRaw ?? "",
    xid: reqPago.xid ?? "",
    IndicadorDeCobroUcaf: reqPago.ucafCollectionIndicator ?? "",
    DatosDeAutenticacionUcaf: reqPago.ucafAuthenticationData ?? "",
    IdentificadorTransaccionServidor:
      reqPago.directoryServerTransactionId ?? "",
    Version3DS: reqPago.version3DS ?? "",
    transactionID: "",
    TransaccionAutenticacionId: reqPago.idTransaction3ds ?? ""
  };
  const payload: RequestOrquestarProcesoPagoInterface = {
    EBMHeaderRequest: reqHeaderGenerico,
    DatosTarjeta_Entrada: datosTarjeta,
    DatosTransaccion_Entrada: datosTransaccion
  };

  console.log("Generando payload Req ", SERVICE_APIGWCS_METHOD_ORQUESTA_PAGO);

  //Obtiene los datos de la solicitud.
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_ORQUESTA_PAGO,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  };
  console.warn("payload generado:: ", payload);
  return doDataServices;
};

export const orquestarPago = async (reqPago: RequestOrquestarPagoInterface) => {
  let resultadoPago: ResultadoOrquestarPago = {
    codigo: "-1",
    descripccion: "",
    respuestaPago: {
      respuestaMotorPago: null,
      mensajeRespuestaMotorPago: "",
      codigoRespuestaMotorPago: "",
      numeroAutorizacionPago: null,
      numeroReferenciaPago: null,
      respuestaBRM: "",
      nombreMotorPagos: null,
      origStan: null,
      origMsg: null
    }
  };

  try {
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices =
      getDataService_OrquestarPago(reqPago);

    console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_ORQUESTA_PAGO);

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseOrquestarProcesoPagoInterface = response.data;
    console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    if (resp.EBMHeaderResponse) {
      if (resp.EBMHeaderResponse?.ErrorTecnico.code === "ok") {
        //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
        if (
          resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0" ||
          resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "1"
        ) {
          /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                y mostrar un mensaje personalizado al usuario*/
          if (resp.RespuestaPagoTarjeta !== undefined) {
            resultadoPago.respuestaPago = resp.RespuestaPagoTarjeta;
            resultadoPago.codigo =
              resp.EBMHeaderResponse.ErrorNegocio.CodigoError;
            resultadoPago.descripccion =
              resp.RespuestaPagoTarjeta.mensajeRespuestaMotorPago;
          }
        } else {
          resultadoPago.codigo =
            resp.EBMHeaderResponse.ErrorNegocio.CodigoError;
          resultadoPago.descripccion =
            resp.EBMHeaderResponse.ErrorNegocio.DescripcionError;
        }
      } else {
        //Se actualiza en estado de error de servicio a -2
        //: es el código genérico para indicar que ocurrió un error Técnico en el llamado al servicio
        resultadoPago.codigo = "-2";
        resultadoPago.descripccion =
          "El Cargo no pudo ser realizado correctamente, por favor intenta más tarde";
      }
    } else {
      //si no existe solo se regresa el response para ser evaluado en la llamada
      resultadoPago.codigo = "-3";
      resultadoPago.descripccion =
        "El Cargo no pudo ser realizado correctamente, por favor intenta más tarde";
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
    resultadoPago.codigo = "-4";
    resultadoPago.descripccion =
      "Por el momento no podemos procesar tu solicitud, por favor intenta más tarde";
  }
  return resultadoPago;
};

export interface ResultadoOrquestarPago {
  respuestaPago: RespuestaPagoTarjeta;
  codigo: string;
  descripccion: string;
}

export interface RequestOrquestarPagoInterface {
  datosTdc: DatosTarjetaEntrada;
  idPagoUnico: string; //generarIDPagoUnicoResponseDTO.getIdPagoSKY()
  cuenta: string;
  importePago: string;
  importePagoLocal: string;
  paisISO: string;
  codigoMoneda: string; //determinarComercioResponseWSDTO.getCodigoMoneda()
  entidadBancaria: string; //determinarComercioResponseWSDTO.getClearingHouse()
  tipoCambio: number;
  instrumentoDePagoId: string; //token
  codigoSKY: string; //evalRiesgoResponseWSDTO.getCodigoSKY()
  mId: string;
  tipoBin: string;
  sesionId: string;
  idTransaction3ds?: string;
  cavv?: string;
  directoryServerTransactionId?: string;
  ucafAuthenticationData?: string;
  ucafCollectionIndicator?: string;
  eciRaw?: string;
  ecommerceIndicator?: string;
  xid?: string;
  version3DS?: string;
}

const getNombrePais = (paisIso: string) => {
  let nombrePais: string = paisIso;
  switch (paisIso) {
    case "MX":
      nombrePais = enumPais.MX;
      break;
    case "CR":
      nombrePais = enumPais.CR;
      break;
    case "GT":
      nombrePais = enumPais.GT;
      break;
    case "HN":
      nombrePais = enumPais.HN;
      break;
    case "NI":
      nombrePais = enumPais.NI;
      break;
    case "PA":
      nombrePais = enumPais.PA;
      break;
    case "DO":
      nombrePais = enumPais.DO;
      break;
    case "SV":
      nombrePais = enumPais.SV;
      break;
  }
  return nombrePais;
};

enum enumPais {
  MX = "Mexico",
  CR = "Costa Rica",
  GT = "Guatemala",
  HN = "Honduras",
  NI = "Nicaragua",
  PA = "Panama",
  DO = "Republica Dominicana",
  SV = "El Salvador"
}
