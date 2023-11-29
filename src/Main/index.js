import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../src/Functions/getInstanciaParametrosDesdeParametroURL.ts';

function Main() {
  
  const urlParams = new URLSearchParams(window.location.search);
  
  /*
  * Inicializa los datos del portal.
  */
  const inicializaDatosPortal = () => {
    let datosParametroCodeDeURL = getInstanciaParametrosDesdeParametroURL(urlParams);
    // llamaInicializaDatosParametroCode(datosParametroCodeDeURL);
    // inicializaDatosPeticion();
    return datosParametroCodeDeURL;
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
  