import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestModificarPerfilFacturacionInterface {
    EBMHeaderRequest:     EBMHeaderRequest;
    PerfilFacturacionEBO: PerfilFacturacionEBO;
}

export interface PerfilFacturacionEBO {
    NumeroDeCuenta:       string;
    PAN:                  string;
    CVV:                  string;
    NombreTarjeta:        string;
    Vigencia:             string;
    Pais:                 string;
    ClearingHouseId:      string;
    BRMTypeCode:          string;
    Emailaddress:         string;
    PaymentInstrument:    string;
    InstrumentIdentifier: string;
}

export interface ResponseModificarPerfilFacturacionInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}
