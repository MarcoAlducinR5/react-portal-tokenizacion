import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestEvaluarRiesgoInterface {
    EBMHeaderRequest:    EBMHeaderRequest;
    ComercioInfo:        ComercioInfo;
    AgregadorDePagoInfo?: AgregadorDePagoInfo;
    OrdenInfo:           OrdenInfo;
    PagoInfo:            PagoInfo;
    DatosComerciante:    DatosComerciante;
    DireccionIP:         string;
    SesionId:            string;
}

export interface AgregadorDePagoInfo {
    AgregadorDePagoId:  number;
    Nombre:             string;
    SubComercianteInfo: SubComercianteInfo;
}

export interface SubComercianteInfo {
    TarjetaDePagoId:    number;
    Nombre:             string;
    NumeroTelefonico:   string;
    Pais:               string;
    Region:             string;
    CodigoPostal:       string;
    Localidad:          string;
    AreaAdministrativa: string;
    Email:              string;
}

export interface ComercioInfo {
    ComercioId:        string;
    TransaccionId:     string;
    CodigoSKY:         string;
    IndicadorComercio: string;
}

export interface DatosComerciante {
    Parametro: Parametro[];
}

export interface Parametro {
    NombreParametro: string;
    ValorParametro:  string;
}

export interface OrdenInfo {
    DatosFacturacion?: DatosFacturacion;
    DetalleMonto:     DetalleMonto;
}

export interface DatosFacturacion {
    Nombre:             string;
    ApellidoMaterno:    string;
    ApellidoPaterno:    string;
    Cia:                string;
    Direccion1:         string;
    Direccion2:         string;
    Localidad:          string;
    AreaAdministrativa: string;
    CodigoPostal:       string;
    Pais:               string;
    Telefono:           number;
    Email:              string;
}

export interface DetalleMonto {
    MontoTotal: number;
    MonedaISO:  string;
}

export interface PagoInfo {
    DatosTarjeta?:      DatosTarjeta;
    InstrumentoDePago: InstrumentoDePago;
}

export interface DatosTarjeta {
    MesDeExpiracion:  number;
    AnioDeExpiracion: number;
    Tipo:             number;
    Numero:           string;
}

export interface InstrumentoDePago {
    InstrumentoDePagoId: string;
}

export interface ResponseEvaluarRiesgoInterface {
    EBMHeaderResponse:   EBMHeaderResponse;
    CodigoSKY?:           string;
    FechaTransaccionUTC?: Date;
    TokenAutenticacion?:  string;
    TransaccionId?:       string;
    InstrumentoDePago?:   InstrumentoDePago;
    EstatusRiesgo?:       string;
}

export interface InstrumentoDePago {
    InstrumentoDePagoId: string;
}
