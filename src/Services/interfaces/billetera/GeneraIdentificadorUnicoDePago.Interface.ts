import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestGenerarIdentificadorUnicoDePagoInterface {
    EBMHeaderRequest: EBMHeaderRequest;
    Entrada_Process:  EntradaProcess;
}

export interface EntradaProcess {
    Cuenta:        string;
    Proceso:       string;
    ClearingHouse: string;
    SistemaOrigen: string;
}

export interface ResponseGenerarIdentificadorUnicoDePagoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
    Salida_Process:    SalidaProcess;
}

export interface SalidaProcess {
    IdPagoSKY: string;
}
