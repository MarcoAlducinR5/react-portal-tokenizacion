import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';
import { getInstanciaParametrosDesdeParametroURL } from '../../Utils/getInstanciaParametrosDesdeParametroURL';
import { inicializaDatosPeticion } from '../../Utils/inicializaDatosPeticion';
import { getParametroCodeDeURL } from '../../Utils/getParametroCodeDeUrl';
import { DatosTH } from '../../Services/interfaces/DatosTH.Interface';
import { validarURL } from '../../Utils/validarURL';
import { ResponseValidarBEP } from '../../Services/interfaces/responseValidarBEP.interface';

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
  }, []);

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
  
  let validaVigenciaRespuesta = validarURL(data); 
  const objectVR: ResponseValidarBEP = validaVigenciaRespuesta;

  console.log(objectVR.estado)
  
  /* validaVigenciaRespuesta.then(resultado => {
    objectValidarBEP.estado = resultado.estado;
    objectVR.estado = resultado.estado;
    objectValidarBEP.codigoError = resultado.codigoError;
    objectVR.codigoError = resultado.codigoError;
    objectValidarBEP.descripcionError = resultado.descripcionError;
    objectVR.descripcionError = resultado.descripcionError;
  });
  console.log(objectVR.estado);
  console.log(objectVR.codigoError);
  console.log(objectVR.descripcionError); */
  
  /* let responseValidarBilleteraEmailProspecto:string[] = [];
  let registro1, registro2, registro3;
  React.useEffect(() => {
    validaVigenciaRespuesta.then(resultado => {
      // Aquí puedes trabajar con el resultado, que sería el array [ "ko", "103", "Codigo no valido", false ]
      if (resultado && resultado.length === 3) {
        // Extrae cada elemento del array y asigna a variables individuales
        [registro1, registro2, registro3] = resultado;
    
        // Puedes acceder a cada variable por separado
        console.log("Registro 1:", registro1);
        console.log("Registro 2:", registro2);
        console.log("Registro 3:", registro3);    
      } else {
        console.error("La promesa no se resolvió como se esperaba.");
      }
  
     //resultado.forEach((value, key) => {
       // arregloVacio[key] = value
        //console.log(key,value)
        //responseValidarBilleteraEmailProspecto[key] = value;
       //});
    }) ; 
  }, [validaVigenciaRespuesta]);
  
  
  console.log(registro1, registro2, registro3) */

  //console.log(responseValidarBilleteraEmailProspecto[0] === "ok" ? true : false)

  //const [estadoPago, setEstadoPago] = React.useState(false);
  const estado = objectVR.estado === "ok" ? true : false;

  return (
    <React.Fragment>
      { estado ? <Pago dataTH={data} /> : <Confirmacion validacionesEBP={objectVR} /> }
    </React.Fragment>
  );

}

export {Home};
  