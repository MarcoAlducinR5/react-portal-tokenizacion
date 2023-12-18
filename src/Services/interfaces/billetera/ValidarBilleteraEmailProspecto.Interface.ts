import {
    EBMHeaderRequest,
    EBMHeaderResponse
  } from "../../common/HeadersApigwcs.Interface";
export interface RequestValidarBilleteraEmailProspectoInterface {
    EBMHeaderRequest:          EBMHeaderRequest;
    ValidarBilleteraListInput: ValidarBilleteraListInput[];
}
export interface ValidarBilleteraListInput {
    Email:            string;
    Servicio:         string;
    SistemaOrigen:    string;
    CadenaValidacion: string;
    NumCuenta?:        string;
    IdProspecto?:      string;
    Vigencia:         string;
}

export interface ResponseValidarBilleteraEmailProspectoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}
