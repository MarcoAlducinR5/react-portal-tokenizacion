
/**
 * Encabezados request estandar de servicios REST APIGWCS
 */
export interface EBMHeaderRequest {
    Operacion:     string;
    SistemaOrigen: string;
    ParametroList: ParametroList;
    SeguridadList: SeguridadList;
}

export interface ParametroList {
    ParametroItem: ParametroItem[];
}

export interface ParametroItem {
    Nombre: string;
    Valor:  string;
}

export interface SeguridadList {
    SeguridadItem: SeguridadItem[];
}

export interface SeguridadItem {
    SistemaAAutenticar: string;
    Username:           string;
    Password:           string;
}
/**
 * Encabezados response estandar de servicios REST APIGWCS
 */
export interface EBMHeaderResponse {
    ErrorTecnico: ErrorTecnico;
    ErrorNegocio: ErrorNegocio;
}

export interface ErrorNegocio {
    Estado:           string;
    CodigoError:      string;
    DescripcionError: string;
}

export interface ErrorTecnico {
    code:    string;
    Sistema: string;
}
