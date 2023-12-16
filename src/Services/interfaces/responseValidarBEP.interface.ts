export interface ResponseValidarBEP{
    estado?:string;
    codigoError?:string;
    descripcionError?:string;
}

export interface ConfirmacionProps {
    validacionesEBP: ResponseValidarBEP;
}