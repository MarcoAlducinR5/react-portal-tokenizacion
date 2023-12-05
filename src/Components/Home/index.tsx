import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../Utils/getInstanciaParametrosDesdeParametroURL';
import { inicializaDatosPeticion } from '../../Utils/inicializaDatosPeticion';
import { getParametroCodeDeURL } from '../../Utils/getParametroCodeDeUrl';

const Home: React.FC = () => {
  
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
  console.log(data);
  
  React.useEffect(() => {

     // Convertir la cadena de consulta en un objeto
     const params = new URLSearchParams(inicializaDatosPortal(code));

     // Crear un objeto con los valores de cada parámetro
     const newData = {};
     params.forEach((value, key) => {
       newData[key] = value;
     });

     setData(newData);
  }, [code]);

  const inicializaDatosPortal = (code) => {
    if(code===null){
      return "No se recuperó el parametro CODE de la cadena obtenida de la URL.";
    }
    else{
      let datosParametroCodeDeURL = getInstanciaParametrosDesdeParametroURL(code);
      inicializaDatosPeticion(data);
      return datosParametroCodeDeURL;
    }
  }

  const [estadoPago, setEstadoPago] = React.useState(false);

  return (
    <React.Fragment>
      { estadoPago ? <Confirmacion /> : <Pago data={data} /> }
    </React.Fragment>
  );

}

export {Home};
  