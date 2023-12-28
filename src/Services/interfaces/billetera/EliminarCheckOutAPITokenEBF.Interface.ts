import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface EliminarCheckOutAPITokenEBF {
    EBMHeaderRequest:           EBMHeaderRequest;
    ComercioId:                 string;
    IdentificadorDeInstrumento: string;
    InstrumentoDePagoId:        string;
}

export interface EliminarCheckOutAPITokenEBFResponse {
    EBMHeaderResponse: EBMHeaderResponse;
}
