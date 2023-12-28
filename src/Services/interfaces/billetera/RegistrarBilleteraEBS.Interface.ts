import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RegistrarBilleteraEBS {
    EBMHeaderRequest:          EBMHeaderRequest;
    BilleteraDePagoCollection: BilleteraDePagoCollection;
}

export interface BilleteraDePagoCollection {
    BilleteraDePago: BilleteraDePago[];
}

export interface BilleteraDePago {
    paymentInstrument: string;
    idProspecto:       string;
    numeroCuenta:      string;
    numeroContrato:    string;
    email:             string;
    nombreTarjeta:     string;
    fechaExp:          string;
    cvv:               string;
    tipoTarjeta:       string;
    instrumentId:      string;
    maskedPan:         string;
    recurrente:        string;
    estatusDm:         string;
    fechaDm:           Date;
    estatus3Ds:        string;
    fecha3Ds:          Date;
    referencia3Ds:     string;
    nombre:            string;
    aPaterno:          string;
    aMaterno:          string;
    numTelefono:       string;
    calle:             string;
    numExt:            string;
    numInt:            string;
    estado:            string;
    municipio:         string;
    ciudad:            string;
    colonia:           string;
    codigopostal:      string;
    codPais:           string;
}

export interface RegistrarBilleteraEBSResponse {
    EBMHeaderResponse: EBMHeaderResponse;
    Id:                string;
}