import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestCambiarFormaDePagoInterface {
    EBMHeaderRequest:        EBMHeaderRequest;
    CambiarFormaDePagoInput: CambiarFormaDePagoInput;
}

export interface CambiarFormaDePagoInput {
    PaymentInstrument: string;
    NumeroCuenta:      string;
    PagoRecurrente:    string;
}

export interface ResponseCambiarFormaDePagoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}