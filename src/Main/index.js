import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../src/Functions/getInstanciaParametrosDesdeParametroURL.ts';

function Main() {
  
  /**
  * Obtiene la instancia del parámetro {@code code}.
  */
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code'); 

  /*
  * Inicializa los datos del portal.
  */
  const inicializaDatosPortal = () => {
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
  
  console.log(inicializaDatosPortal());
  const [estadoPago, setEstadoPago] = React.useState(false);

  return (
    <React.Fragment>
      { estadoPago ? <Confirmacion /> : <Pago /> }
    </React.Fragment>
  );

}

export {Main};
  