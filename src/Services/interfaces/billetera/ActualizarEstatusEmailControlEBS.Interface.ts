import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface ActualizarEstatusEmailControlEBS {
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
    fechaRegistro:      string;
    fechaValidacion:    string;
    fechaActualizacion: string;
    servicio:           string;
    sistemaOrigen:      string;
    operacion:          string;
}

export interface ActualizarEstatusEmailControlEBSResponse {
    EBMHeaderResponse: EBMHeaderResponse;
}
