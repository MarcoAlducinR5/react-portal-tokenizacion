import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../Utils/getInstanciaParametrosDesdeParametroURL.ts';
import { inicializaDatosPeticion } from '../../Utils/inicializaDatosPeticion.ts';
import { getParametroCodeDeURL } from '../../Utils/getParametroCodeDeUrl.ts';

function Home() {
  
  /*** Obtiene el valor del parámetro de la URL ***/
  let code = getParametroCodeDeURL(); 

  /*
  * Inicializa los datos del portal.
  */
  const [data, setData] = React.useState({
    Origen : "", Operacion : "", Cuenta : "", IdProspecto : "", Nombre : "", 
    Paterno : "", Materno : "", Email : "", Calle : "", NumExt : "", NumInt : "",
    Colonia : "", PaisISO : "", Telefono : "", Ciudad : "", Estado : "",
    Municipio : "", CP : "", timestamp : "", Moneda : "", Monto : "", URLBTGS : "",
    CadValidacion : "", Servicio : "", IdUnicoPago : "", NumeroContrato : "", 
    Promocion1 : "", Descripcion1 : "", Precio1 : "", Cantidad1 : "",
  });
  
  React.useEffect(() => {
    // Decode the base64-encoded code
    const decodedCode = inicializaDatosPortal(code)

    // Assuming the decoded code is a query string, you can parse it into an object
    const decodedData = decodedCode.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});

    setData(decodedData);
  }, [code]);
  const inicializaDatosPortal = (code) => {
    if(code===null){
      return "No se recuperó el parametro CODE de la cadena obtenida de la URL.";
    }
    else{
      try {
        let datosParametroCodeDeURL = getInstanciaParametrosDesdeParametroURL(code);
        inicializaDatosPeticion();
        return datosParametroCodeDeURL;
      }
      catch (error) {
        console.error('Error al parsear los datos:', error);
      }
    }
  }
  
  //console.log(inicializaDatosPortal(code));
  console.log(data);
  const [estadoPago, setEstadoPago] = React.useState(false);

  return (
    <React.Fragment>
      { estadoPago ? <Confirmacion /> : <Pago data={data} /> }
    </React.Fragment>
  );

}

export {Home};
  