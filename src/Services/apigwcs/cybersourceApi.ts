import axios from "axios";
import { ErrorTecnico } from '../interfaces/Services.Interface';

const { REACT_APP_URL_APIGWCS, REACT_APP_USERNAME_APIGWCS, REACT_APP_PASSWORD_APIGWCS } = process.env;
const MSJ_ERROR_GENERAL = 'Por el momento no podemos atender tu solicitud, por favor inténtalo más tarde.'
const cyberApi = axios.create({
  //baseURL: `${REACT_APP_URL_APIGWCS}`,
  baseURL : 'http://localhost:8088/',
  /*auth: {
    username: REACT_APP_USERNAME_APIGWCS ? REACT_APP_USERNAME_APIGWCS : '',
    password: REACT_APP_PASSWORD_APIGWCS ? REACT_APP_PASSWORD_APIGWCS: '',
  },*/
    headers: {
        'Content-Type': 'application/json',
    },
    // `withCredentials` indica cuando o no se pueden hacer peticiones cross-site Access-Control 
    // usando credenciales
    withCredentials: false, // defecto
    responseType: 'json', // defecto
    // `responseEncoding` indica la codificación a usar para decodificar las respuestas (solo en Node.js)
    // Nota: Ignorado para `responseType` de 'stream' o peticiones del lado del cliente
    responseEncoding: 'utf8', // defecto
     // `timeout` especifica el número de milisegundos antes que la petición expire.
    // Si la petición toma más tiempo que `timeout`, esta será abortada.
    timeout: 5000, // `0` es el valor por defecto (no timeout)
    
    });

    cyberApi.interceptors.response.use(function (response) {
      const codeT = response.data.EBMHeaderResponse.ErrorTecnico.code;
      const codeN = response.data.EBMHeaderResponse.ErrorNegocio.CodigoError;
      const desription = response.data.EBMHeaderResponse.ErrorNegocio.DescripcionError;
      
      if (codeT !== 'ok') {
        return Promise.reject(MSJ_ERROR_GENERAL);
      }
      /* No se puede evaluar el error de negocio ya que no todos los servicios responden al 0 o 1 como unico error y algunos si*/
      /*if (codeN === '0' || codeN === '1') {
        return response;
      }*/
      
      //return Promise.reject(desription);
      return response;
    });
    
    export { cyberApi };