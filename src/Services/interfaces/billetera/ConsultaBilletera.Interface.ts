import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestConsultarBilleteraInterface {
    EBMHeaderRequest:  EBMHeaderRequest;
    NumeroCuenta:      string;
    PaymentInstrument?: string;
    IdProspecto?:       string;
    NumeroContrato?:    string;
    Email?:             string;
}

export interface ResponseConsultarBilleteraInterface {
    EBMHeaderResponse:           EBMHeaderResponse;
    ConsultarBilleteraListInput?: ConsultarBilleteraListInput[];
}

export interface ConsultarBilleteraListInput {
    Id:                     string;
    PaymentInstrument:      string;
    IdProspecto:            string | null;
    NumeroCuenta:           string;
    NumeroContrato:         string | null;
    Email:                  string;
    NombreTarjeta:          string;
    FechaExp:               string;
    CVV:                    number | null;
    TipoTarjeta:            string;
    DescripcionTipoTarjeta: string;
    InstrumentId:           string;
    MaskedPan:              string;
    Recurrente:             string;
    EstatusDm:              string | null;
    FechaDm:                Date | null;
    Estatus3Ds:             string | null;
    Fecha3Ds:               Date | null;
    Referencia3Ds:          string | null;
    Nombre:                 string;
    APaterno:               string;
    AMaterno:               string;
    NumTelefono:            string;
    Calle:                  string;
    NumExt:                 string | null;
    NumInt:                 string;
    Estado:                 string;
    Municipio:              string;
    Ciudad:                 string;
    Colonia:                string;
    CodigoPostal:           string;
    CodPais:                string;
    Monto:                  number | null;
    TipoBin:                string;
}

