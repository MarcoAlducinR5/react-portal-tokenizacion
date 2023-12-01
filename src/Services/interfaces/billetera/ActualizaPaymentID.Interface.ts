import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestActualizarPaymentIDInterface {
    EBMHeaderRequest:  EBMHeaderRequest;
    ComercioId:        string;
    InstrumentoPagoId: string;
    DatosTarjeta:      DatosTarjeta;
    DatosFacturacion?:  DatosFacturacion;
}

export interface DatosFacturacion {
    Nombre:             string;
    ApellidoMaterno?:    string;
    ApellidoPaterno?:    string;
    Cia:                string;
    Direccion1?:         string;
    Direccion2?:         string;
    Localidad?:          string;
    AreaAdministrativa?: string;
    CodigoPostal?:       string;
    Pais?:               string;
    Telefono?:           string;
    Email?:              string;
}

export interface DatosTarjeta {
    MesDeExpiracion:  string;
    AnioDeExpiracion: string;
}

export interface ResponseActualizarPaymentIDInterface {
    EBMHeaderResponse:          EBMHeaderResponse;
    ComercioId?:                 string;
    IdentificadorDeInstrumento?: IdentificadorDeInstrumento;
    InstrumentoDePago?:          InstrumentoDePago;
    DatosFacturacion?:           DatosFacturacion;
    Tarjeta?:                    Tarjeta;
}

export interface DatosFacturacion {
    Nombre:             string;
    ApellidoPaterno?:    string;
    Cia:                string;
    Direccion1?:         string;
    Localidad?:          string;
    AreaAdministrativa?: string;
    CodigoPostal?:       string;
    Pais?:               string;
    Telefono?:           string;
    Email?:              string;
}

export interface IdentificadorDeInstrumento {
    IdentificadorDeInstrumento: string;
    Estado:                     string;
}

export interface InstrumentoDePago {
    InstrumentoDePagoId: string;
    Estado:              string;
}

export interface Tarjeta {
    MesDeExpiracion:  string;
    AnioDeExpiracion: string;
    Tipo:             string;
    MaskedPAN:        string;
}
