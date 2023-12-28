import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface GenerarControlBilleteraEBS {
    EBMHeaderRequest:                EBMHeaderRequest;
    BilleteraEmailControlCollection: BilleteraEmailControlCollection;
}

export interface BilleteraEmailControlCollection {
    BilleteraEmailControl: BilleteraEmailControl[];
}

export interface BilleteraEmailControl {
    id:                 number;
    email:              string;
    idProspecto:        string;
    contrato:           string;
    noCuenta:           string;
    cadenaValidacion:   string;
    estatus:            string;
    estatusWebhook:     string;
    fechaRegistro:      Date;
    fechaValidacion:    Date;
    fechaActualizacion: Date;
    servicio:           string;
    sistemaOrigen:      string;
    operacion:          string;
}

export interface GenerarControlBilleteraEBSResponse {
    EBMHeaderResponse: EBMHeaderResponse;
}
