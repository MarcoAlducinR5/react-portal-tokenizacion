import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface ConsultarDatosProspectoSECEBS {
    EBMHeaderRequest:               EBMHeaderRequest;
    DbConsultarDatosProspectoInput: DBConsultarDatosProspectoInput;
}

export interface DBConsultarDatosProspectoInput {
    IdProspecto: string;
    IdContrato:  number;
}

export interface ConsultarDatosProspectoSECEBSResponse {
    EBMHeaderResponse:                         EBMHeaderResponse;
    DbConsultarDatosProspectoOutputCollection: DBConsultarDatosProspectoOutputCollection;
}

export interface DBConsultarDatosProspectoOutputCollection {
    DbConsultarDatosProspectoOutput: DBConsultarDatosProspectoOutput[];
}

export interface DBConsultarDatosProspectoOutput {
    ID_PROSPECTO:   string;
    CONTRATO:       string;
    CUENTA:         string;
    PROMOCION:      string;
    PAQUETE:        string;
    PAIS:           string;
    CP:             string;
    ESTADO:         string;
    MUNICIPIO:      string;
    CIUDAD:         string;
    COLONIA:        string;
    CALLE:          string;
    NUM_EXTERIOR:   string;
    NUM_INTERIOR:   ContratoCel1;
    TEL1:           string;
    TEL2:           string;
    TEL3:           string;
    EMAIL:          ContratoCel1;
    FECHA_SEC:      Date;
    CONTRATO_VIDEO: ContratoCel1;
    CONTRATO_DATOS: ContratoCel1;
    CONTRATO_CEL1:  ContratoCel1;
    CONTRATO_CEL2:  ContratoCel1;
    CONTRATO_CEL3:  ContratoCel1;
    CONTRATO_CEL4:  ContratoCel1;
    CONTRATO_CEL5:  ContratoCel1;
}

export interface ContratoCel1 {
    "@nil": string;
}
