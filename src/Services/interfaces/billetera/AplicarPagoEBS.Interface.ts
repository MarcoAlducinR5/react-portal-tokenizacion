import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface AplicarPagoEBS {
    EBMHeaderRequest: EBMHeaderRequest;
    AplicarPagoEBO:   AplicarPagoEBO;
}

export interface AplicarPagoEBO {
    ComercioId:                       string;
    CodigoSKY:                        string;
    Captura:                          boolean;
    MontoTotal:                       number;
    MonedaISO:                        string;
    CodigoCvv:                        number;
    SesionId:                         string;
    Cavv:                             string;
    Eci:                              string;
    Xid:                              string;
    InstrumentoDePagoId:              string;
    IndicadorComercio:                string;
    EciRaw:                           string;
    IndicadorDeCobroUcaf:             string;
    DatosDeAutenticacionUcaf:         string;
    IdentificadorTransaccionServidor: string;
    Version3DS:                       string;
    CredencialAlmacenadaEnArchivo:    string;
    CredencialAlmacenadaEnUso:        string;
    IdentificadorTransaccionRed:      string;
    DatosEmisor:                      string;
    TransaccionAutenticacionId:       string;
    TipoTarjeta:                      string;
}

export interface AplicarPagoEBSResponse {
    EBMHeaderResponse:   EBMHeaderResponse;
    AplicarPagoResponse: AplicarPagoResponse;
}

export interface AplicarPagoResponse {
    CodigoSKY:                       string;
    EstatusPago:                     string;
    IdentificadorConciliacion:       number;
    FechaTransaccionUTC:             Date;
    TransaccionId:                   number;
    MontoTotal:                      number;
    MonedaISO:                       string;
    MontoAutorizado:                 number;
    InstrumentoDePagoId:             string;
    NumeroAuditoria:                 number;
    TipoTarjeta:                     number;
    IdentificadorDeInstrumentoId:    number;
    Estado:                          string;
    TransaccionProcesadorId:         string;
    CodigoAprobacion:                number;
    CodigoTarjetaVerificacion:       string;
    CodigoRawTarjetaVerificacion:    string;
    CodigoAsesoramientoComercial:    string;
    CodigoRawAsesoramientoComercial: string;
    CodigoAutenticacionCliente:      number;
    CodigoRawAutenticacionCliente:   number;
    CodigoAVS:                       string;
    CodigoRawAVS:                    string;
}
