/**
 * Hook personalizado para la invocación de servicios.
 * @author RAUL VARGAS OCAMPO.
 * @version 1.0
 */
import axios from "axios";
import { ErrorTecnico } from "../interfaces/Services.Interface";

const {
  REACT_APP_URL_APIGWCS,
  REACT_APP_USERNAME_APIGWCS,
  REACT_APP_PASSWORD_APIGWCS
} = process.env;
const MSJ_ERROR_GENERAL =
  "Por el momento no podemos atender tu solicitud, por favor inténtalo más tarde.";

const cyberApi = axios.create({
  // `method` es el método a ser utilizado al hacer la petición
  method: "post", // defecto get
  baseURL: `${REACT_APP_URL_APIGWCS}`,
  auth: {
    username: REACT_APP_USERNAME_APIGWCS ?? "",
    password: REACT_APP_PASSWORD_APIGWCS ?? ""
  },
  headers: {
    "Content-Type": "application/json"
  },
  // `withCredentials` indica cuando o no se pueden hacer peticiones cross-site Access-Control
  // usando credenciales
  withCredentials: false, // defecto
  responseType: "json", // defecto
  // `responseEncoding` indica la codificación a usar para decodificar las respuestas (solo en Node.js)
  // Nota: Ignorado para `responseType` de 'stream' o peticiones del lado del cliente
  responseEncoding: "utf8", // defecto
  // `timeout` especifica el número de milisegundos antes que la petición expire.
  // Si la petición toma más tiempo que `timeout` (mls), esta será abortada.
  timeout: 10000 // `0` es el valor por defecto (no timeout)
});

// Agregar un interceptor a la petición
cyberApi.interceptors.response.use(
  function (response) {
    // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
    // `data` es la respuesta provista por el servidor
    console.log(response.data);
    // `status` es el código HTTP de la respuesta del servidor
    console.log(response.status);
    // `statusText` es el mensaje del estado HTTP de la respuesta del servidor
    console.log(response.statusText);
    // `headers` las cabeceras HTTP con las que el servidor respondió
    // Todos los nombres de cabeceras son convertidos a minúsculas y pueden ser accedidos usando la notación de corchetes.
    // Ejemplo: `response.headers['content-type']`
    console.log(response.headers);
    // `config`  es la configuración provista a `axios` por la petición
    console.log(response.config);
    // `request` es la petición que genera esta respuesta,
    // es la última instancia ClientRequest en node.js (en redirecciones)
    // y una instancia XMLHttpRequest en el navegador.
    console.log(response.request);
    // Haz algo con los datos de la respuesta
    const codeT = response.data.EBMHeaderResponse.ErrorTecnico.code;
    const codeN = response.data.EBMHeaderResponse.ErrorNegocio.CodigoError;
    const desription =
      response.data.EBMHeaderResponse.ErrorNegocio.DescripcionError;
    console.log("codeN: ", codeN);
    console.log("desription: ", desription);

    if (codeT === "ok" || codeT === "0") {
      //No se puede evaluar el error de negocio ya que no todos los servicios responden al 0 o 1 como unico error y algunos si*/
      if (codeN === "0" || codeN === "1" || codeN === "ok") {
        return response;
      }
    } else {
      return Promise.reject(MSJ_ERROR_GENERAL);
    }
    //return Promise.reject(desription);
    return response;
  },
  function (error) {
    // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
    console.log(error.toJSON());
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    // Haz algo con el error
    return Promise.reject(error);
  }
);

export { cyberApi };
