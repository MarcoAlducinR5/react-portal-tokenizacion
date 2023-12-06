/* Interface DatosTH que permite el almacenado de los datos decifrados en un objeto*/
export interface DatosTH {
  Origen?:string;
  Operacion?:string;
  Cuenta?:number;
  IdProspecto?:number;
  Nombre?:string;
  Paterno?:string;
  Materno?:string;
  Email?:string;
  Calle?:string;
  NumExt?:number;
  NumInt?:number;
  Colonia?:string;
  PaisISO?:string;
  Telefono?:number;
  Ciudad?:string;
  Estado?:string;
  Municipio?:string;
  CP?:number;
  timestamp?:number;
  Moneda?:string;
  Monto?:number;
  URLBTGS?:string;
  CadValidacion?:number;
  Servicio?:string;
  IdUnicoPago?:string;
  NumeroContrato?:number;
  Promocion1?:string;
  Descripcion1?:string;
  Precio1?:number;
  Cantidad1?:number;
}

/* Interface que permite el paso del objeto DatosTH para algun componente visual */
export interface PagosProps {
  dataTH: DatosTH;
}