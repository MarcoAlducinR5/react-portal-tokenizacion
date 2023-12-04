/**
* Inicializa los datos de la petición.
*/

import { DatosPeticionDTO } from "./DatosPeticionDTO";

export const inicializaDatosPeticion = (data: any) =>{
    let tokenNuevo: string | null = null;
    let puntoA:boolean = false;
    const datosPeticion = new DatosPeticionDTO( "TipoPago", data.Operacion, data.NumeroContrato, tokenNuevo, puntoA );
    return datosPeticion;
}