/**
 * Describe los datos requeridos para la ejecución del servicio rest
 * 
 * @author MG.
 * @version 1.0
 */
export interface DoDateServices{
  serviceName : string;
  url: string;
  method: string;
  data?: any;
  request?:string;
  putMessages?:boolean;
  messageConfirm?:any,
  doAuth?:doAuthExt,
  invokeExternalMethod?:any

}
export interface RESTResponse {
  EBMHeaderResponse: EBMHeaderResponse;
}

export interface EBMHeaderResponse {
  ErrorTecnico: ErrorTecnico,
  ErrorNegocio: ErrorNegocio
}

export interface ErrorNegocio {
  Estado:           string,
  CodigoError:      string,
  DescripcionError: string
}

export interface ErrorTecnico {
  code:    string,
  summary: string,
  detail:  string,
  Sistema: string
}

export interface doAuthExt{
  username:string,
  password:string
}

//se ontienen las credenciales del archivo de configuracion de ambiente
const { REACT_APP_USERNAME_OSB, REACT_APP_PASSWORD_OSB } =
  process.env;

/**
 * Almacena la información del Header
 */
export const doHeader =
    {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    };

/**
 * Almacena la información del Header
 */
export const doAuth = {
  'username': REACT_APP_USERNAME_OSB ?? '',
  'password': REACT_APP_PASSWORD_OSB ?? ''      
};

export interface Auth {
  username: string,
  password: string
}