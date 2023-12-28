import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RegistrarTipoCambioEBF {
    EBMHeaderRequest:         EBMHeaderRequest;
    RegistrarTipoCambioInput: RegistrarTipoCambioInput[];
}

export interface RegistrarTipoCambioInput {
    Pais:                  string;
    Origen:                string;
    Destino:               string;
    Tasa:                  number;
    FECHA_VIGENCIA_INICIO: Date;
    FECHA_VIGENCIA_FIN:    Date;
}

export interface RegistrarTipoCambioEBFResponse {
    EBMHeaderResponse: EBMHeaderResponse;
}
