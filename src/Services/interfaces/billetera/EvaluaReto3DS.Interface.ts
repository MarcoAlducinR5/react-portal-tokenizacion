import {
  EBMHeaderRequest,
  EBMHeaderResponse
} from "../../common/HeadersApigwcs.Interface";

export interface RequestEvaluarReto3DsInterface {
  EBMHeaderRequest: EBMHeaderRequest;
  ComercioInfo: ComercioInfo;
  OrdenInfo: OrdenInfo;
  InstrumentoDePagoInfo: InstrumentoDePagoInfo;
  CompradorInfo: CompradorInfo;
  AutenticacionInfo: AutenticacionInfo;
  DispositivoInfo?: DispositivoInfo;
}

export interface AutenticacionInfo {
  ModoTransaccion: string;
  ReferenciaId: string;
  UrlDeRetorno: string; //"http://localhost.com/listener",
  Canal: string;
}

export interface DispositivoInfo {
  httpColorNavegador: string;
  httpContendioAceptado: string;
  httpJavaHabilitado: boolean;
  httpJavaScriptHabilitado: boolean;
  httpLenguajeNavegador: string;
  httpAltoPantalla: string;
  httpAnchoPantalla: string;
  httpTiempoDeDiferencia: string;
  httpDireccionIp: string;
  httpAgenteNavegador: string;
}

export interface ComercioInfo {
  ComercioId: string;
  CodigoSKY: string;
}

export interface CompradorInfo {
  TelefonoMovil: string;
}

export interface InstrumentoDePagoInfo {
  Id: string;
}

export interface OrdenInfo {
  DireccionFacturacion?: DireccionFacturacion;
  DetallesCantidad: DetallesCantidad;
}

export interface DetallesCantidad {
  CantidadTotal: string;
  Moneda: string;
}

export interface DireccionFacturacion {
  Nombre: string;
  ApellidoMaterno: string;
  ApellidoPaterno: string;
  Cia: string;
  Direccion1: string;
  Direccion2: string;
  Localidad: string;
  AreaAdministrativa: string;
  CodigoPostal: string;
  Pais: string;
  Telefono: string;
  Email: string;
}

export interface ResponseEvaluarReto3DsInterface {
  EBMHeaderResponse: EBMHeaderResponse;
  RespuestaGenerarReto?: RespuestaGenerarReto;
}

export interface RespuestaGenerarReto {
  FechaTransaccionUTC: Date;
  Estado: string;
  id: number;
  EstadoSky: EstadoSky;
  ReferenciaInfo: ReferenciaInfo;
  ErrorInfo: ErrorInfo;
  InformacionDeAutenticacion: InformacionDeAutenticacion;
  InformacionDePago: InformacionDePago;
}

export interface ErrorInfo {
  Razon: string;
  Mensaje: string;
}

export interface EstadoSky {
  Id: number;
  Mensaje: string;
  Estado: string;
}

export interface InformacionDeAutenticacion {
  acsUrl: string;
  xid: string;
  accessToken: string;
  stepUpUrl: string;
  authenticationTransactionId: string;
  pareq: string;
  veresEnrolled: string;
  specificationVersion: string;
  token: string;
  directoryServerTransactionId: string;
  cavv: string;
  ucafAuthenticationData: string;
  ucafCollectionIndicator: string;
  eciRaw: string;
  ecommerceIndicator: string;
}

export interface InformacionDePago {
  Tarjeta: Tarjeta;
}

export interface Tarjeta {
  Bin: number;
  Tipo: string;
}

export interface ReferenciaInfo {
  Codigo: string;
}
