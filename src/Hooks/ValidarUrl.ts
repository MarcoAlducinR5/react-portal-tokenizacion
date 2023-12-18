/**
 * Archivo custom HOOK para consulta de servicio CONSULTA_BILLETERA.
 * @author RAUL VARGAS OCAMPO.
 * @version 1.0.
 *
 */
import { useApigwcsServices } from "../Services/common/UseApigwcs.Service";
import { SERVICE_APIGWCS_METHOD_VALIDAR_URL } from "../Constants/Urls/Services";
import GetPayloadReqValidarUrl, { ReqValidarEmail } from "../Services/apigwcs/ValidarUrl.Payload";
import { useEffect, useState } from "react";

/**
 * Custon Hook para obtener las tarjetas en billetera
 * @param cuenta Numero de cuenta para realizar la consulta
 * @returns datos de billetera: dataResponse, y loading: useState de consulta
 */
export const useValidarVigenciaUrl = () => {
  const { dataResponse, loading, invokeService } = useApigwcsServices();
  const [urlValida, setUrlValida] = useState<boolean | null>(null);

  async function ValidarVigenciaUrl(reqValidarEmail: ReqValidarEmail) {
    const payloadValUrl = GetPayloadReqValidarUrl(reqValidarEmail);
    console.log("Validando url con apiCyber;;;");
    await invokeService(SERVICE_APIGWCS_METHOD_VALIDAR_URL, payloadValUrl);
  }

  useEffect(() => {
    if (dataResponse !== null) {
      const codValida = dataResponse.stateCode;

      console.log(codValida);
      if (codValida === "0") {
        setUrlValida(true);
      } else setUrlValida(false);
    }
  }, [dataResponse]);

  return {
    dataRespValUrl: dataResponse,
    loadingVigencia: loading,
    ValidarVigenciaUrl, urlValida
  };
};
