import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";
  
export interface RequestValidarBilleteraEmailProspectoInterface {
    EBMHeaderRequest: EBMHeaderRequest;
    Email : EmailInfo,
    Servicio : ServicioInfo,
    SistemaOrigen : SistemaOrigenInfo,
    CadenaValidacion : CadenaValidacionInfo,
    NumCuenta? : NumCuentaInfo,
    IdProspecto? : IdProspectoInfo,
    Vigencia : VigenciaInfo
}

export interface EmailInfo {
    Email: string;
}

export interface ServicioInfo {
    Servicio: string;
}

export interface SistemaOrigenInfo {
    SistemaOrigen: string;
}

export interface CadenaValidacionInfo {
    CadenaValidacion: string;
}

export interface NumCuentaInfo {
    NumCuenta: string;
}

export interface IdProspectoInfo {
    IdProspecto: string;
}

export interface VigenciaInfo {
    Vigencia: string;
}

export interface ResponseValidarBilleteraEmailProspectoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}