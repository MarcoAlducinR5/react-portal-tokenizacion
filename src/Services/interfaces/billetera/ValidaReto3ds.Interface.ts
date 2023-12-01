import {
  EBMHeaderRequest,
  EBMHeaderResponse
} from "../../common/HeadersApigwcs.Interface";

export interface RequestValidarReto3DsInterface {
  EBMHeaderRequest: EBMHeaderRequest;
  ComercioInfo: ComercioInfo;
  OrdenInfo: OrdenInfo;
  InstrumentoDePagoInfo: InstrumentoDePagoInfo;
  CompradorInfo: CompradorInfo;
  AutenticacionInfo: AutenticacionInfo;
}

export interface AutenticacionInfo {
  ModoTransaccion: string;
  TransaccionId: string;
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
  DetallesCantidad: DetallesCantidad;
}

export interface DetallesCantidad {
  CantidadTotal: string;
  Moneda: string;
}

export interface ResponseValidarReto3DsInterface {
  EBMHeaderResponse: EBMHeaderResponse;
  RespuestaGenerarReto?: RespuestaGenerarReto;
}

export interface RespuestaGenerarReto {
  FechaTransaccionUTC: Date;
  Estado: string;
  id: number;
  EstadoSky: EstadoSky;
  ReferenciaInfo: ReferenciaInfo;
  InformacionDeAutenticacion: InformacionDeAutenticacion;
  InformacionDePago: InformacionDePago;
}

export interface EstadoSky {
  Id: number;
  Mensaje: string;
  Estado: string;
}

export interface InformacionDeAutenticacion {
  xid: string;
  authenticationTransactionId: string;
  veresEnrolled: string;
  specificationVersion: string;
  token: string;
  ecommerceIndicator: string;
  eciRaw: string;
  parRes: string;
  cavv: string;
  ucafCollectionIndicator: string;
  ucafAuthenticationData: string;
  directoryServerTransactionId: string;
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
