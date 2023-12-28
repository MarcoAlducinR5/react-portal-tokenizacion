import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface ValidarProspectoIIREBF {
    EBMHeaderRequest: EBMHeaderRequest;
    ClienteProspecto: ClienteProspecto;
}

export interface ClienteProspecto {
    Prospecto: Prospecto;
}

export interface Prospecto {
    IdProspecto:     number;
    Nombre:          string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
}

export interface ValidarProspectoIIREBFResponse {
    EBMHeaderResponse: EBMHeaderResponse;
    Respuesta:         Respuesta;
}

export interface Respuesta {
    Estado:    string;
    IdMensaje: string;
    Mensaje:   string;
}
