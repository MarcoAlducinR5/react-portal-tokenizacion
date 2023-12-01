import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestConsultarBinesInterface {
    EBMHeaderRequest: EBMHeaderRequest;
    CardBIN:          string;
    CardNumber:       string | null
    CountryCode:      string;
}

export interface ResponseConsultarBinesInterface {
    EBMHeaderResponse:      EBMHeaderResponse;
    ClasificacionesLlamada: ClasificacionesLlamada;
}

export interface ClasificacionesLlamada {
    CardBIN:          string | null;
    CardNumber:       string | null;
    CountryCode:      string | null;
    RecurrentFlag:    string | null;
    BINType:          string | null;
    CardType:         string | null;
    ServiceFlag:      string | null;
    ClearingHouseCve: string | null;
    ClearingHouse:    string | null;
    DomesticFlag:     string | null;
    BankCode:         string | null;
    Bank:             string | null;
}
