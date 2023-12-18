import React, { useState } from "react";
import { Pago } from "./Pago";
import { Confirmacion } from "./Confirmacion";
import { getInstanciaParametrosDesdeParametroURL } from "../../Utils/getInstanciaParametrosDesdeParametroURL";
import { inicializaDatosPeticion } from "../../Utils/inicializaDatosPeticion";
import { getParametroCodeDeURL } from "../../Utils/getParametroCodeDeUrl";
import { DatosTH } from "../../Services/interfaces/DatosTH.Interface";
import { validarURL } from "../../Utils/validarURL";
import { ResponseValidarBEP } from "../../Services/interfaces/responseValidarBEP.interface";
import { useValidarVigenciaUrl } from "../../Hooks/ValidarUrl";
import { ReqValidarEmail } from "../../Services/apigwcs/ValidarUrl.Payload";

const Home: React.FC = () => {
  const { dataRespValUrl, ValidarVigenciaUrl, urlValida } =
    useValidarVigenciaUrl();

  /*** Obtiene el valor del parámetro de la URL ***/
  let code: string | null = getParametroCodeDeURL();

  /*
   * Inicializa los datos del portal.
   */
  const dataTH: DatosTH = {};

  const [data, setData] = React.useState(dataTH);
  

  function ValidarVigencia() {
    const reqValidarEmail: ReqValidarEmail = {
      email: data.Email ?? "",
      servicio: data.Servicio ?? "",
      origen: data.Origen ?? "",
      cadValidacion: data.CadValidacion ?? "",
      vigencia: data.timestamp ?? "",
      idProspecto: data.IdProspecto ?? "",
      numeroCuenta: data.Cuenta ?? ""
    };
    ValidarVigenciaUrl(reqValidarEmail);
  }
  React.useEffect(() => {
    console.log("useEffect Index");
    // Convertir la cadena de consulta en un objeto
    const params = new URLSearchParams(inicializaDatosPortal(code));

    // Crear un objeto con los valores de cada parámetro
    const newData: any = {};
    params.forEach((value, key) => {
      newData[key] = value;
    });

    setData(newData);
  }, []);

  React.useEffect(() => {
    console.log("useEffect data");
    if (data.Origen && data.Origen !== null) {
      //se valida la liga
      ValidarVigencia();
    }
  }, [data]);

  const inicializaDatosPortal = (code: string | null) => {
    if (code === null) {
      return "No se recuperó el parametro CODE de la cadena obtenida de la URL.";
    } else {
      let datosParametroCodeDeURL =
        getInstanciaParametrosDesdeParametroURL(code);
      inicializaDatosPeticion(data);
      return datosParametroCodeDeURL;
    }
  };

  return (
    <React.Fragment>
      {dataRespValUrl !== null ? (
        urlValida ? (
          <Pago dataTH={data} />
        ) : (
          <Confirmacion
            validacionesEBP={{
              estado: "ko",
              codigoError: dataRespValUrl?.stateCode,
              descripcionError: dataRespValUrl?.message
            }}
          />
        )
      ) : ''}
    </React.Fragment>
  );
};

export { Home };
