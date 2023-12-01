import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestActualizarTDCBilleteraInterface {
    EBMHeaderRequest:          EBMHeaderRequest;
    BilleteraDePagoCollection: BilleteraDePagoCollection;
}

export interface BilleteraDePagoCollection {
    BilleteraDePago: BilleteraDePago[];
}

export interface BilleteraDePago {
    id:                string;
    paymentInstrument: string | null;
    idProspecto:       string | null;
    numeroCuenta:      string | null;
    numeroContrato:    string | null;
    email:             string | null;
    nombreTarjeta:     string | null;
    fechaExp:          string | null;
    cvv:               string | null;
    tipoTarjeta:       string | null;
    instrumentId:      string | null;
    maskedPan:         string | null;
    recurrente:        string | null;
    estatusDm:         string | null;
    fechaDm:           string | null;
    estatus3Ds:        string | null;
    fecha3Ds:          string | null;
    referencia3Ds:     string | null;
    nombre:            string | null;
    aPaterno:          string | null;
    aMaterno:          string | null;
    numTelefono:       string | null;
    calle:             string | null;
    numExt:            string | null;
    numInt:            string | null;
    estado:            string | null;
    municipio:         string | null;
    ciudad:            string | null;
    colonia:           string | null;
    codigopostal:      string | null;
    codPais:           string | null;
    monto:             string | null;
}

export interface ResponseActualizarTDCBilleteraInterface {
    EBMHeaderResponse: EBMHeaderResponse;
}