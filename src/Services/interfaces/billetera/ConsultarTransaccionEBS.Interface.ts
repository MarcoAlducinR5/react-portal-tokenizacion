import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface ConsultarTransaccionEBS {
    EBMHeaderRequest: EBMHeaderRequest;
    ComercioInfo:     ComercioInfo;
    Transaccion:      Transaccion;
}

export interface ComercioInfo {
    ComercioId: string;
}

export interface Transaccion {
    Codigo: string;
}

export interface ConsultarTransaccionEBSResponse {
    EBMHeaderResponse:    EBMHeaderResponse;
    RespuestaTransaccion: RespuestaTransaccion;
}

export interface RespuestaTransaccion {
    Transaccion:   Transaccion;
    DatosConsulta: DatosConsulta;
}

export interface DatosConsulta {
    BusquedaId:    string;
    ZonaHoraria:   string;
    DatosBusqueda: string;
    Salvar:        boolean;
    Conteo:        number;
    Orden:         string;
    ConteoTotal:   number;
    Nombre:        string;
    Limte:         number;
}

export interface Transaccion {
    Codigo: string;
}
