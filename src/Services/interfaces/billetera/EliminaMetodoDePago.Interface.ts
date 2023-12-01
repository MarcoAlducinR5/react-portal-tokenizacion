import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestEliminarMetodoDePagoInterface {
    EBMHeaderRequest:         EBMHeaderRequest;
    BilleteraDePagoListInput: BilleteraDePagoListInput[];
}

export interface BilleteraDePagoListInput {
    paymentInstrument:          string;
    ComercioId:                 string;
    IdentificadorDeInstrumento: string;
    IdProspecto?:                string;
    NumeroCuenta:               string;
}

export interface ResponseEliminarMetodoDePagoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}
