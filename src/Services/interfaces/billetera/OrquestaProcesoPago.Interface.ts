import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestOrquestarProcesoPagoInterface {
    EBMHeaderRequest:         EBMHeaderRequest;
    DatosTarjeta_Entrada:     DatosTarjetaEntrada;
    DatosTransaccion_Entrada: DatosTransaccionEntrada;
}

export interface DatosTarjetaEntrada {
    tipoTarjeta:              string;//billeteraItem.getTipoTarjeta()
    numeroTarjeta:            string;//billeteraItem.getMaskedPan()
    fechaExpTarjeta:          string;//billeteraItem.getFechaExp() 01/22
    cvvTarjeta:               string;
    nombreTitularTarjeta:     string;//billeteraItem.getNombreTarjeta()
    nombreEmpresaTransaccion: string;//billeteraItem.getDescripcionTipoTarjeta().toLowerCase()
}

export interface DatosTransaccionEntrada {
  tipoOperacion: string;
  idTransaccion: string;
  numeroCuentaClienteSky: string;
  loginUsr: string;
  horaActual: string;
  fechaActual: string;
  propositoPago: string;
  importePago: string;
  importePagoMonedaLocal: string;
  tipoCambio: number;
  pais: string;
  codeStore: string;
  authidresponse: string;
  clerkId: string;
  origFecha: string;
  origHora: string;
  origStan: string;
  origMsg: string;
  sistemaOrigenPago: string;
  codigoMoneda: string;
  entidadBancaria: string;
  tipoPago: string;
  tokenVoltage: string;
  comentarios: string;
  MerchantId: string;
  CodigoSKY: string;
  Captura: string;
  Token: string;
  IdSesion: string;
  EcommerceIndicator: string;
  AuthenticationTransactioId: string;
  Cavv: string;
  Eci: string;
  xid: string;
  transactionID: string;
  EciRaw: string;
  IndicadorDeCobroUcaf: string;
  DatosDeAutenticacionUcaf: string;
  IdentificadorTransaccionServidor: string;
  Version3DS: string;
  TransaccionAutenticacionId: string;
}

export interface ResponseOrquestarProcesoPagoInterface {
    EBMHeaderResponse:    EBMHeaderResponse;
    RespuestaPagoTarjeta: RespuestaPagoTarjeta;
}

export interface RespuestaPagoTarjeta {
    respuestaMotorPago:        string | null;
    mensajeRespuestaMotorPago: string;
    codigoRespuestaMotorPago:  string;
    numeroAutorizacionPago:    string | null;
    numeroReferenciaPago:      string | null;
    respuestaBRM:              string;
    nombreMotorPagos:          string | null;
    origStan:                  string | null;
    origMsg:                   string | null;
}
