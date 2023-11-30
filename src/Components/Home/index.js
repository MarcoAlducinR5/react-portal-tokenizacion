import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../Utils/getInstanciaParametrosDesdeParametroURL.ts';
import { getParametroCodeDeURL } from '../../Utils/getParametroCodeDeUrl.ts';

function Home() {
  
  /*** Obtiene el valor del parámetro de la URL ***/
  let code = getParametroCodeDeURL(); 

  /*
  * Inicializa los datos del portal.
  */
  const inicializaDatosPortal = (code) => {
    if(code===null){
      return "No se recuperó el parametro CODE de la cadena obtenida de la URL.";
    }
    else{
      try {
        let datosParametroCodeDeURL = getInstanciaParametrosDesdeParametroURL(code);
        // llamaInicializaDatosParametroCode(datosParametroCodeDeURL);
        // inicializaDatosPeticion();
        return datosParametroCodeDeURL;
      }
      catch (error) {
        console.error('Error al parsear los datos:', error);
      }
    }
  }
  
  console.log(inicializaDatosPortal(code));
  const [estadoPago, setEstadoPago] = React.useState(false);

  return (
    <React.Fragment>
      { estadoPago ? <Confirmacion /> : <Pago /> }
    </React.Fragment>
  );

}

export {Home};
  