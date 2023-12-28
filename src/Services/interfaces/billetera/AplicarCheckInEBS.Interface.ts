import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface AplicarCheckInEBS {
    EBMHeaderRequest:  EBMHeaderRequest;
    AplicarCheckInEBO: AplicarCheckInEBO;
}

export interface AplicarCheckInEBO {
    ComercioId:          string;
    CodigoSKY:           string;
    Captura:             string;
    MontoTotal:          string;
    MonedaISO:           string;
    CodigoCvv:           string;
    SesionId:            string;
    Cavv:                string;
    Eci:                 string;
    Xid:                 string;
    InstrumentoDePagoId: string;
    IndicadorComercio:   string;
}

export interface AplicarCheckInEBSResponse {
    EBMHeaderResponse:      EBMHeaderResponse;
    AplicarCheckInResponse: AplicarCheckInResponse;
}

export interface AplicarCheckInResponse {
    CodigoSKY:                 string;
    EstatusPago:               string;
    IdentificadorConciliacion: string;
    FechaTransaccionUTC:       Date;
    TransaccionId:             string;
    MontoTotal:                null;
    MonedaISO:                 string;
    MontoAutorizado:           string;
    InstrumentoDePagoId:       string;
    NumeroAuditoria:           string;
    CodigoAprobacion:          string;
}
