import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestConsultarTipoCambioInterface {
    EBMHeaderRequest:                                                     EBMHeaderRequest;
    DbConsultarTipoCambioPciABCSSelect_pId_pPais_pEstatusInputParameters: DBConsultarTipoCambioPCIABCSSelectPIDPPaisPEstatusInputParameters;
}

export interface DBConsultarTipoCambioPCIABCSSelectPIDPPaisPEstatusInputParameters {
    pPais:    string;
    pEstatus: string;
}

export interface ResponseConsultarTipoCambioInterface {
    EBMHeaderResponse:             EBMHeaderResponse;
    BilleteraTipoCambioCollection: BilleteraTipoCambioCollection;
}

export interface BilleteraTipoCambioCollection {
    BilleteraTipoCambio: BilleteraTipoCambio[] | null;
}

export interface BilleteraTipoCambio {
    id:                  number;
    estatus:             string;
    pais:                string;
    origen:              string;
    destino:             string;
    tasa:                number;
    fechaVigenciaInicio: Date;
    fechaVigenciaFin:    Date;
    fechaCreacion:       Date;
    fechaActualizacion:  Date;
}