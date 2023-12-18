/**
 * Hook personalizado para la invocación de servicios.
 * @author RAUL VARGAS OCAMPO.
 * @version 1.0
 */
import { useState } from "react";
import { cyberApi } from "../apigwcs/configApi";
import { EBMHeaderResponse } from "./Headers.Interface";

type responseServiceType = {
  EBMHeaderResponse: EBMHeaderResponse;
  body: any;
};
type responseType = {
  stateCode: string | undefined;
  message: string | undefined;
  completResponse: any;
};
type responseErrorType = {
  code: number;
  messageError: string;
};

type alertType = {
  title: string;
  text?: string;
  type?: string;
};

export const useApigwcsServices = () => {
  //Almacena la respuesta del servicio
  const [dataResponse, setDataResponse] = useState<responseType | null>(null);

  //Almacena los errores del servicio
  const [errorService, setErrorService] = useState<responseErrorType | null>(
    null
  );

  //Almacena el estatus de procesamiento, true para indicar que se esta ejecutando el llamado al servicio
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Reinicia la peticiòn
   */
  const resetRequest = () => {
    setDataResponse(null);

    //Inicializa los errores
    setErrorService(null);

    //Inicializa la bandera de ejecución de servicio
    setLoading(true);
  };

  /**
   * Invoca el servicio de pre-registro.
   *
   * @param doDateServices Datos del formulario.
   */
  const invokeService = async (
    serviceName: string,
    payloadRequest: any
  ) => {
    try {
      resetRequest();
      //Consume el servicio y genera la respuesta
      const response = await cyberApi.post(serviceName, payloadRequest);
      //Obtiene la respuesta de Axio y la transforma a un tipo de dato
      console.log("response ", response);
      let resp: responseServiceType = response.data;
      console.log("redp ", resp);
      //aqui se podría manejar los mensajes de error para definir si la respuesta es correcta o no o ya dejarlo del lado del js que invoca
      if (resp.EBMHeaderResponse) {
        //: ocurrió un error de negocio, se realizo la ejecucion correcta del servicio pero no se recupera respuesta exitosa de la accion
        setErrorService({
          code: Number(resp.EBMHeaderResponse?.ErrorNegocio.CodigoError),
          messageError: resp.EBMHeaderResponse?.ErrorNegocio.DescripcionError
        });
      }
      //Inicializa la respuesta al estado
      setDataResponse({
        stateCode: resp.EBMHeaderResponse?.ErrorNegocio.CodigoError,
        message: resp.EBMHeaderResponse?.ErrorNegocio.DescripcionError,
        completResponse: resp
      });

      console.log(resp);
    } catch (error: any) {
      //Verifica si hay respuesta
      if (error.response) {
        //Envìa los diferentes errores al log
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      //Se actualiza en estado de error de servicio a -1
      //: es el código genérico para indicar que ocurrió un error en el llamado al servicio
      setErrorService({
        code: -1,
        messageError:
          "Por el momento no podemos atender tu solicitud, por favor intentalo mas tarde." //error.message
      });
    }
    //Inicializa el estado de carga finalizada
    setLoading(false);
  };
  /*
   * Se regresa los siguientes hooks personalizados:
   *      - Estado de la respuesta
   *      - Estado de error de servicio
   *
   * Funciones de manejo de estados:
   *      - Invocación de servicio
   *      - Reinicio de petición.
   */
  return { dataResponse, errorService, loading, invokeService, resetRequest };
};
