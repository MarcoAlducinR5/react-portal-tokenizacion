import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RegistrarTokenEBF {
    EBMHeaderRequest: EBMHeaderRequest;
    IdProspecto:      number;
    NumeroCuenta:     number;
    ComercioId:       string;
    Recurrente:       string;
    DatosFacturacion: DatosFacturacion;
    DatosDireccion:   DatosDireccion;
    NumeroTarjeta:    number;
    DatosTarjeta:     DatosTarjeta;
}

export interface DatosDireccion {
    Calle:     string;
    NumExt:    number;
    NumInt:    number;
    Estado:    string;
    Municipio: string;
    Ciudad:    string;
    Colonia:   string;
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
    CodigoPostal:       number;
    Pais:               string;
    Telefono:           number;
    Email:              string;
}

export interface DatosTarjeta {
    MesDeExpiracion:  number;
    AnioDeExpiracion: number;
    Tipo:             string;
}

export interface RegistrarTokenEBFResponse {
    EBMHeaderResponse:                           EBMHeaderResponse;
    RegistrarPaymentInstrumentOsbPciResponseEBM: RegistrarPaymentInstrumentOsbPCIResponseEBM;
}

export interface RegistrarPaymentInstrumentOsbPCIResponseEBM {
    InstrumentoDePago:          InstrumentoDePago;
    IdentificadorDeInstrumento: IdentificadorDeInstrumento;
    Tarjeta:                    Tarjeta;
}

export interface IdentificadorDeInstrumento {
    IdentificadorDeInstrumento: string;
}

export interface InstrumentoDePago {
    InstrumentoDePagoId: string;
}

export interface Tarjeta {
    MaskedPAN: string;
}
