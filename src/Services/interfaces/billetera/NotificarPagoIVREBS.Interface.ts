import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface NotificarPagoIVREBS {
    EBMHeaderRequest:        EBMHeaderRequest;
    NotificarPagoIVRRequest: NotificarPagoIVRRequest;
}

export interface NotificarPagoIVRRequest {
    NumeroDeCuenta: string;
    PagoIvrInfo:    PagoIvrInfo;
}

export interface PagoIvrInfo {
    Id:                 string;
    Resultado:          string;
    NumeroDeAprobacion: string;
}

export interface NotificarPagoIVREBSResponse {
    EBMHeaderResponse:        EBMHeaderResponse;
    NotificarPagoIVRResponse: NotificarPagoIVRResponse;
}

export interface NotificarPagoIVRResponse {
    Codigo:      number;
    Descripcion: string;
    Estado:      string;
}
