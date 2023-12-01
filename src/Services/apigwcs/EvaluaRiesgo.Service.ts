import {
    DoDateServices,
    doHeader
  } from "../interfaces/Services.Interface";
  import axios from "axios";
  import { SERVICE_APIGWCS_METHOD_EVALUA_RIESGO } from '../../Constants/Urls/Services';
  import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
  import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import { ComercioInfo, DatosComerciante, DetalleMonto, InstrumentoDePago, OrdenInfo, PagoInfo, RequestEvaluarRiesgoInterface, ResponseEvaluarRiesgoInterface } from '../interfaces/billetera/EvaluaRiesgo.Interface';
  
const { REACT_APP_URL_APIGWCS, REACT_APP_USERNAME_APIGWCS, REACT_APP_PASSWORD_APIGWCS } = process.env;
  
let url_base = REACT_APP_URL_APIGWCS ?? '';
let method = "POST";
const auth = {
  username: REACT_APP_USERNAME_APIGWCS ?? '',
  password: REACT_APP_PASSWORD_APIGWCS ?? ''
};
  
  /**
   * Header genérico para solicitudes servicios apigwcs
   */
  let reqHeaderGenerico: EBMHeaderRequest = EbmHeaderRequestApigwcs(
    "EvaluarRiesgo"
  );

  /**
   * getDataService_EvaluarRiesgo
   * @param instrumentoDePagoId : token
   * @param comercioInfo : datos del comercio: mId, codigoSky
   * @param detalleMonto : monto y monedaISO
   * @param datosComerciante : Arreglo para Datos MDD 1-23
   * @param direccionIP 
   * @param sesionId 
   * @returns : dataService con payload para el servicio Evaluacion de riesgo
   */
  export const GetDataService_EvaluarRiesgo = (
    instrumentoDePagoId: string,
    comercioInfo: ComercioInfo,
    detalleMonto: DetalleMonto,
    datosComerciante: DatosComerciante,
    direccionIP: string,
    sesionId: string
  ) => {
    //instrumetId
    const idPago: InstrumentoDePago = {
      InstrumentoDePagoId: instrumentoDePagoId
    };

    const orden: OrdenInfo = {
      DetalleMonto: detalleMonto
    };
    const pago: PagoInfo = {
      InstrumentoDePago: idPago
    };

    const payload: RequestEvaluarRiesgoInterface = {
      EBMHeaderRequest: reqHeaderGenerico,
      ComercioInfo: comercioInfo,
      OrdenInfo: orden,
      PagoInfo: pago,
      DatosComerciante: datosComerciante,
      DireccionIP: direccionIP,
      SesionId: sesionId
    };

    console.log("Generando payload Req ", SERVICE_APIGWCS_METHOD_EVALUA_RIESGO);

    //Obtiene los datos de la solicitud.
    const doDataServices: DoDateServices = {
      serviceName: SERVICE_APIGWCS_METHOD_EVALUA_RIESGO,
      url: url_base,
      method: method,
      request: JSON.stringify(payload)
    };

    return doDataServices;
  };
  
 /**
  * evaluarRiesgo
  * @param instrumentoDePagoId : token
  * @param comercioInfo : datos del comercio: mId, codigoSky
  * @param detalleMonto : monto y monedaISO
  * @param datosComerciante : Arreglo para Datos MDD 1-23
  * @param direccionIP 
  * @param sesionId 
  * @returns : resultado de la evaluacion en estatusRiesgo
  */
  export const EvaluarRiesgo = async (
    instrumentoDePagoId: string,
    comercioInfo:        ComercioInfo,
    detalleMonto:     DetalleMonto,
    datosComerciante:    DatosComerciante,
    direccionIP:         string,
    sesionId:            string,
  ) => {
    
    let resultadoEvaluacion: ResultadoEvaluarInterface={
      estatusRiesgo: null,
      codigoSKY: '',
      transaccionId: '',
      fechaDM: ""
    };

    try {
      //Obtiene los datos de la solicitud.
      const doDataServices: DoDateServices = GetDataService_EvaluarRiesgo(
        instrumentoDePagoId, comercioInfo,  detalleMonto, datosComerciante, direccionIP, sesionId
      );
  
      console.log("solicitando POST - ", SERVICE_APIGWCS_METHOD_EVALUA_RIESGO);
  
      const response = await axios({
        url: `${doDataServices.url}/${doDataServices.serviceName}`,
        method: doDataServices.method,
        data: doDataServices.request,
        headers: doHeader,
        auth: auth
      });
  
      //Obtiene la respuesta de Axio
      let resp: ResponseEvaluarRiesgoInterface = response.data;
      console.log("respuesta servicio ", doDataServices.serviceName, " :", resp);
      //aqui se debe de análizar que valores de los encabezados aplican para validar la respuesta del servicio
      //si existe el encabezado de respuesta
      if (resp.EBMHeaderResponse) {
        if (resp.EBMHeaderResponse?.ErrorTecnico.code === "0") {
          //el codigo de error de negocio no se evalua ya que estos deben ser evaluados por quien lo llame, por la variedad de codigos de los N servicios
          if (resp.EBMHeaderResponse.ErrorNegocio.CodigoError === "0") {
            /*Inicializa la respuesta al estado, como tal se regresa lo que se recupera del servicio y quien lo llama puede mostrarlo o utilizar otro mas personalizado para el usuario
                por recomendación quien llame al servicio solo se deberia evaluar el codigoError = 0 como éxitoso 
                y mostrar un mensaje personalizado al usuario*/
                if(resp.EstatusRiesgo !== undefined){
                  resultadoEvaluacion.estatusRiesgo = resp.EstatusRiesgo
                  resultadoEvaluacion.fechaDM = resp.FechaTransaccionUTC ? resp.FechaTransaccionUTC?.toString(): '';
                  resultadoEvaluacion.codigoSKY = resp.CodigoSKY ? resp.CodigoSKY : ''
                  resultadoEvaluacion.transaccionId = resp.TransaccionId ? resp.TransaccionId : ''
                }
          }
        } else {
          //Se actualiza en estado de error de servicio a -2
          //: es el código genérico para indicar que ocurrió un error Técnico en el llamado al servicio
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
      //Se actualiza en estado de error de servicio a -1
      //: es el código genérico para indicar que ocurrió un error en el llamado al servicio
    }
    return resultadoEvaluacion;
  };

  export interface ResultadoEvaluarInterface{
    estatusRiesgo: string | null,
    fechaDM: string;
    codigoSKY: string,
    transaccionId: string,
  }