import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../Utils/getInstanciaParametrosDesdeParametroURL';
import { inicializaDatosPeticion } from '../../Utils/inicializaDatosPeticion';
import { getParametroCodeDeURL } from '../../Utils/getParametroCodeDeUrl';
import { DatosTH } from '../../Services/interfaces/DatosTH.Interface';

const Home: React.FC = () => {
  
  /*** Obtiene el valor del parámetro de la URL ***/
  let code: string | null = getParametroCodeDeURL(); 

  /*
  * Inicializa los datos del portal.
  */
  const dataTH: DatosTH = {};

  const [data, setData] = React.useState(dataTH);
  
  React.useEffect(() => {

     // Convertir la cadena de consulta en un objeto
     const params = new URLSearchParams(inicializaDatosPortal(code));

     // Crear un objeto con los valores de cada parámetro
     const newData: any = {};
     params.forEach((value, key) => {
       newData[key] = value;
     });

     setData(newData);
  }, [code]);

  const inicializaDatosPortal = (code: string | null) => {
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
      { estadoPago ? <Confirmacion /> : <Pago dataTH={data } /> }
    </React.Fragment>
  );

}

export {Home};
  