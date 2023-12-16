import axios from "axios";
import { SERVICE_APIGWCS_METHOD_VALIDAR_BILLETERA_EMAIL_PROSPECTO } from "../../Constants/Urls/Services";
import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import { DoDateServices, doHeader } from "../interfaces/Services.Interface";
import { RequestValidarBilleteraEmailProspectoInterface, ResponseValidarBilleteraEmailProspectoInterface } from "../interfaces/billetera/ValidarBilleteraEmailProspecto.Interface";
import { ResponseValidarBEP } from '../../Services/interfaces/responseValidarBEP.interface';

/**
* Constantes referentes a ser utilizados para el consumo del servicio
*/
const { REACT_APP_URL_APIGWCS, REACT_APP_USERNAME_APIGWCS, REACT_APP_PASSWORD_APIGWCS } = process.env;

let url_base = REACT_APP_URL_APIGWCS ?? "";
let method = "POST";
const auth = { username: REACT_APP_USERNAME_APIGWCS ?? "", password: REACT_APP_PASSWORD_APIGWCS ?? "" };
                   
export function GetDataService_ValidarBilleteraEmailProspecto( Origen: any, Email: any, CadValidacion: any, idProspecto: any, numeroCuenta: any, Servicio: any, timestamp: any, Operacion:any ) {

  /** 
  * Header para solicitudes servicios SOA
  */
  let reqHeader: EBMHeaderRequest = EbmHeaderRequestApigwcs(Operacion, Origen);  

  /**
  * Payload utilizado requerido para el servicio
  */
  const payload: RequestValidarBilleteraEmailProspectoInterface = {
    EBMHeaderRequest: reqHeader,
    Email : Email,
    Servicio : Servicio,
    SistemaOrigen : Origen,
    CadenaValidacion : CadValidacion,
    NumCuenta : numeroCuenta,
    IdProspecto : idProspecto,
    Vigencia : timestamp
  };

  /**
  * Estructura para la creacion del objeto para el consumo del servicio DoDateServices
  */
  const doDataServices: DoDateServices = {
    serviceName: SERVICE_APIGWCS_METHOD_VALIDAR_BILLETERA_EMAIL_PROSPECTO,
    url: url_base,
    method: method,
    request: JSON.stringify(payload)
  }; 

  return doDataServices;

}

/**
* Consumo del servicio de GwValidarBilleteraEmailProspectoEBF que valida cuestiones de la URL
*/
export async function GwValidarBilleteraEmailProspectoEBF(Origen: any, Email: any, CadValidacion: any, idProspecto: any, numeroCuenta: any, Servicio: any, timestamp: any, Operacion:any) {
  
  let responseValidarBilleteraEmailProspecto: ResponseValidarBEP = {
    estado: "",
    codigoError: "",
    descripcionError: ""
  };
  try {
    
    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = GetDataService_ValidarBilleteraEmailProspecto(Origen, Email, CadValidacion, idProspecto, numeroCuenta, Servicio, timestamp, Operacion); 

    const response = await axios({
      url: `${doDataServices.url}/${doDataServices.serviceName}`,
      method: doDataServices.method,
      data: doDataServices.request,
      headers: doHeader,
      auth: auth
    });

    //Obtiene la respuesta de Axio
    let resp: ResponseValidarBilleteraEmailProspectoInterface = response.data;
    //console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
    
    //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
    //si existe el encabezado de respuesta
    if (resp.EBMHeaderResponse) {
      
      if (resp.EBMHeaderResponse.ErrorNegocio.Estado === "ok"){
        console.log("se redirecciona al formulario correspondiente");
        responseValidarBilleteraEmailProspecto.estado = resp.EBMHeaderResponse.ErrorNegocio.Estado;
        responseValidarBilleteraEmailProspecto.codigoError = resp.EBMHeaderResponse.ErrorNegocio.CodigoError;
        responseValidarBilleteraEmailProspecto.descripcionError = resp.EBMHeaderResponse.ErrorNegocio.DescripcionError;
      }else{
        console.log("se redirecciona a la pagina de error ");
        responseValidarBilleteraEmailProspecto.estado = resp.EBMHeaderResponse.ErrorNegocio.Estado;
        responseValidarBilleteraEmailProspecto.codigoError = resp.EBMHeaderResponse.ErrorNegocio.CodigoError;
        responseValidarBilleteraEmailProspecto.descripcionError = resp.EBMHeaderResponse.ErrorNegocio.DescripcionError;
      }

    } else {
      //si no existe solo se regresa el response para ser evaluado en la llamada
    }
      
  } catch (error: any) {
    console.error(error);
    //Verifica si hay respuesta: se sigue recisando
    if (error.response) {
      //Envìa los diferentes errores al log
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    //Se actualiza en estado de error de servicio

  }

  return responseValidarBilleteraEmailProspecto;
  
}

/* export interface ResponseValidarBEP{
  estado:string;
  codigoError:string;
  descripcionError:string;
} */