import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface ConsultarControlBilleteraEBS {
    EBMHeaderRequest:          EBMHeaderRequest;
    ConsultarCodigoEmailInput: ConsultarCodigoEmailInput;
}

export interface ConsultarCodigoEmailInput {
    pId:          string;
    pEmail:       string;
    pIdProspecto: string;
    pContrato:    string;
    pNoCuenta:    string;
}

export interface ConsultarControlBilleteraEBSResponse {
    EBMHeaderResponse:               EBMHeaderResponse;
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
    estatusWebhook:     null;
    fechaRegistro:      Date;
    fechaValidacion:    null;
    fechaActualizacion: null;
    servicio:           string;
    sistemaOrigen:      string;
    operacion:          string;
}
