import {
  EBMHeaderRequest,
  EBMHeaderResponse
} from "../../common/HeadersApigwcs.Interface";

export interface RequestProcesarTransaccionDMInterface {
  EBMHeaderRequest: EBMHeaderRequest;
  ComercioInfo: ComercioInfo;
  CodigoReferencia: string;
  CodigoAccion: string;
  TransaccionDecisionId: string;
  Comentarios: string;
}

export interface ComercioInfo {
  ComercioId: string;
}

export interface ResponseProcesarTransaccionDMInterface {
  EBMHeaderResponse: EBMHeaderResponse;
  CodigoReferencia: string | null;
  TransaccionDecisionId: string | null;
  Decision: string | null;
  TokenRespuesta: string | null;
  CodigoRespuesta: string | null;
  CodigoRespuestaAccion: string | null;
}
