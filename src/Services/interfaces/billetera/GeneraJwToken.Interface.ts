import {
  EBMHeaderRequest,
  EBMHeaderResponse
} from "../../common/HeadersApigwcs.Interface";

export interface RequestGenerarJwTokenInterface {
  EBMHeaderRequest: EBMHeaderRequest;
  ComercioInfo: ComercioInfo;
  InstrumentoDePagoInfo: InstrumentoDePagoInfo;
}

export interface ComercioInfo {
  ComercioId: string;
  CodigoSKY: string;
}

export interface InstrumentoDePagoInfo {
  Id: string;
}

export interface ResponseGenerarJwTokenInterface {
  EBMHeaderResponse: EBMHeaderResponse;
  RespuestaGenerarJWToken?: RespuestaGenerarJWToken;
}

export interface RespuestaGenerarJWToken {
  FechaTransaccionUTC: Date;
  Estado: string;
  id: number;
  ReferenciaInfo: ReferenciaInfo;
  InformacionDeAutenticacionDeInvocacion: InformacionDeAutenticacionDeInvocacion;
}

export interface InformacionDeAutenticacionDeInvocacion {
  accessToken: string;
  UrlParaCollecionDeDatos: string;
  referenceId: string;
  token: string;
}

export interface ReferenciaInfo {
  Codigo: string;
}
