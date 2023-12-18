/**
 * Hook personalizado para la invocación de servicios.
 * @author RAUL VARGAS OCAMPO.
 * @version 1.0
 */
import { Pago } from "../../Components/Home/Pago";
import { getInstanciaParametrosDesdeParametroURL } from "../../Utils/getInstanciaParametrosDesdeParametroURL";
import { inicializaDatosPeticion } from "../../Utils/inicializaDatosPeticion";
import { getParametroCodeDeURL } from "../../Utils/getParametroCodeDeUrl";
import { DatosTH } from "../../Services/interfaces/DatosTH.Interface";
import { useValidarVigenciaUrl } from "../../Hooks/ValidarUrl";
import { ReqValidarEmail } from "../../Services/apigwcs/ValidarUrl.Payload";
import React, { FC, useEffect, useState } from "react";
import {
  MSJ_CODE_NOTFOUND,
  MSJ_TITULO_COD_NOVAL, MSJ_NODATA_REQUIRED,
  MSJ_VALIDANDO
} from "../../Constants";
import MensajeRsp from "../../Components/Home/Respuestas/MensajeRsp";
import { ValidarMonto, ValidarOperacion } from "./Validaciones";

const Tokenizacion: FC = () => {
  //estado general de validacion para la liga, aqui de inicio es 0 lo que indica que no se ha dado inicio a la validacion
  /**
   * 0: valor de inicio
   * 1: parametro code recuperado de la URL
   * 2: parametros minimos requeridos OK
   * 3: Liga Validada
   * 4: Validacion de parametros requeridos segun el origen
   * 5: 
   */
  const [estadoLiga, setEstadoLiga] = useState<number>(0);

  const [msjEstadoLiga, setMsjEstadoLiga] = useState(MSJ_VALIDANDO);

  const { ValidarVigenciaUrl, urlValida, dataRespValUrl } =
    useValidarVigenciaUrl();

  /*** Obtiene el valor del parámetro de la URL ***/
  let code: string | null = getParametroCodeDeURL();

  /*
   * Inicializa los datos del portal.
   */
  const dataTH: DatosTH = {};

  const [data, setData] = React.useState(dataTH);

  const inicializaDatosPortal = (code: string | null) => {
    if (code === null) {
      //se marca el estado que no fue encontrado el parametro code en la liga
      setEstadoLiga(-1);
      setMsjEstadoLiga(MSJ_CODE_NOTFOUND);

      return "No se recuperó el parametro CODE de la cadena obtenida de la URL.";
    } else {
      let datosParametroCodeDeURL =
        getInstanciaParametrosDesdeParametroURL(code);
      inicializaDatosPeticion(data);
      //1 indica eu se recupero el parametro code
      setEstadoLiga(1);
      return datosParametroCodeDeURL;
    }
  };

  /**
   * Valida si los parametros minimos requeridos fueron recuperados en la liga
   */
  async function ValidarDatosRequeridos(){
    console.log('validando si la liga contiene los valores minimos requeridos')
    setMsjEstadoLiga(MSJ_VALIDANDO);
    const operacion = data.Operacion ?? '';
    if(ValidarOperacion(operacion)){
      setEstadoLiga(2)
    }else {
      setEstadoLiga(-1);
      setMsjEstadoLiga(MSJ_NODATA_REQUIRED);
    }
  }
  /**
   * Valida vigencia de la liga: VIGENTE o PENDIENTE y con vigencia
   */
  async function ValidarVigencia() {
    const reqValidarEmail: ReqValidarEmail = {
      email: data.Email ?? "",
      servicio: data.Servicio ?? "",
      origen: data.Origen ?? "",
      cadValidacion: data.CadValidacion ?? "",
      vigencia: data.timestamp ?? "",
      idProspecto: data.IdProspecto ?? "",
      numeroCuenta: data.Cuenta ?? ""
    };
    setMsjEstadoLiga(MSJ_VALIDANDO);
    await ValidarVigenciaUrl(reqValidarEmail);
    setEstadoLiga(3);
  }
  /**
   * Valida parametros dependiendo operacion/Origen
   */
  async function ValidarParametrosOrigen(){
    console.log('validando si la liga contiene los valores requeridos por Origen')
    setMsjEstadoLiga(MSJ_VALIDANDO);
    const operacion = data.Operacion ?? '';
    const monto = data.Monto ?? 0;

    console.log('operacion Obtenida:' , operacion)

    if( ValidarMonto(operacion, monto) ){
      setEstadoLiga(4);
    }else {
      setEstadoLiga(-1);
      setMsjEstadoLiga(MSJ_NODATA_REQUIRED);
    }
  }

  useEffect(() => {
    // Convertir la cadena de consulta en un objeto
    const params = new URLSearchParams(inicializaDatosPortal(code));

    // Crear un objeto con los valores de cada parámetro
    const newData: any = {};
    params.forEach((value, key) => {
      newData[key] = value;
    });

    setData(newData);
  }, []);

  useEffect(() => {
    console.log('urlValida', estadoLiga, urlValida)
    if(estadoLiga ===1 ){
      ValidarDatosRequeridos();
    }
    //si se recupero el parametro code y aun no se valida la liga
    if (estadoLiga === 2) {
      //se valida la liga
      ValidarVigencia();
    }
    //si la liga ya fue valdidada
    if (estadoLiga === 3){
      //si la liga es vigente, se realiza el sig paso para validar los parametros requeridos por Origen
      if(urlValida) {
        ValidarParametrosOrigen()
      }else{
          console.log('Liga no valida o null')
          setMsjEstadoLiga(dataRespValUrl?.message ?? MSJ_VALIDANDO);
      }
    } 
  }, [estadoLiga,urlValida]);

  return (
    <>
      {estadoLiga <= 3 ? (
        <>
          {estadoLiga === -1 || urlValida === false ? (
            <MensajeRsp
              estado={"ko"}
              descripccion={ msjEstadoLiga }
              titulo={MSJ_TITULO_COD_NOVAL}
            />
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <div className="lg:border-[1px] border-sky-gray-500 rounded-[10px] mx-9 my-[125px] lg:mx-0 lg:my-[153px] w-[320px] h-[1900px] lg:w-[728px]  lg:px-[18px] lg:py-8 lg:h-[1335px]">
                <div className="flex justify-between items-start flex-col lg:flex-row text-[#292929] border-b-[1px] border-sky-gray-500 pb-6">
                  <div>
                    <span className="text-[22px] font-medium">
                      Pago con tarjeta{" "}
                    </span>
                    <br />
                    <span className="text-[22px] font-medium">
                      { msjEstadoLiga }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Pago dataTH={data} />
      )}
    </>
  );
};

export default Tokenizacion;
