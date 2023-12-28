import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface GenerarURLBilleteraEBF {
    EBMHeaderRequest: EBMHeaderRequest;
    Email:            string;
    Estatus:          string;
    Servicio:         string;
    Operacion:        string;
    Origen:           string;
    Nombre:           string;
    Paterno:          string;
    Materno:          string;
    Calle:            string;
    NumExt:           string;
    NumInt:           string;
    Colonia:          string;
    PaisISO:          string;
    Telefono:         string;
    Ciudad:           string;
    Estado:           string;
    Municipio:        string;
    CodigoPostal:     string;
    Vigencia:         string;
    Moneda:           string;
    Cuenta:           string;
    IdProspecto:      string;
    NumeroContrato:   string;
    UrlBTGS:          string;
    Monto:            string;
    Productos:        Productos;
}

export interface Productos {
    Producto: Producto[];
}

export interface Producto {
    Descripcion: string;
    Precio:      string;
    Cantidad:    string;
    Promocion:   string;
}

export interface GenerarURLBilleteraEBFResponse {
    EBMHeaderResponse: EBMHeaderResponse;
    URLBilletera:      string;
}
