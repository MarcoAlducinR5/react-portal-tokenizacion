import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestDeterminarComercioInterface {
    EBMHeaderRequest:       EBMHeaderRequest;
    ConsultarComercioInput: ConsultarComercioInput;
}

export interface ConsultarComercioInput {
    Pais:                 string;
    Sistema:              string;
    CodigoTarjeta:        string | null;
    AfiliacionRecurrente: string | null;
}

export interface ResponseDeterminarComercioInterface {
    EBMHeaderResponse:           EBMHeaderResponse;
    BilleteraComercioCollection: BilleteraComercioCollection | null;
}

export interface BilleteraComercioCollection {
    BilleteraComercio: BilleteraComercio[];
}

export interface BilleteraComercio {
    pais:                 string;
    sistema:              string;
    mid:                  string;
    afiliacion:           string;
    clearingHouse:        string;
    monedaIso:            string;
    codigoMoneda:         string;
    codigoTarjeta:        string;
    tipoTarjeta:          string;
    afiliacionRecurrente: string;
    sacPr:                string;
    sacAk:                string;
    sacSk:                string;
    carOr:                string;
    carAk:                string;
    carAi:                string;
    dfpOr:                string;
}