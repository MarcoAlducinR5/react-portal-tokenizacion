import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface AplicarCheckOut {
    EBMHeaderRequest:   EBMHeaderRequest;
    AplicarCheckOutEBO: AplicarCheckOutEBO;
}

export interface AplicarCheckOutEBO {
    ComercioId:        string;
    CodigoSKY:         string;
    Captura:           string;
    MontoTotal:        string;
    MonedaISO:         string;
    TransaccionId:     string;
    IndicadorComercio: string;
}

export interface AplicarCheckOutResponse {
    EBMHeaderResponse:       EBMHeaderResponse;
    AplicarCheckOutResponse: AplicarCheckOutResponseClass;
}

export interface AplicarCheckOutResponseClass {
    CodigoSKY:                 string;
    EstatusPago:               string;
    IdentificadorConciliacion: string;
    FechaTransaccionUTC:       Date;
    TransaccionId:             string;
    MontoTotal:                string;
    MonedaISO:                 string;
    MontoAutorizado:           null;
}
