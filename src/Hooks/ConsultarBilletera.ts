/**
 * Archivo custom HOOK para consulta de servicio CONSULTA_BILLETERA.
 * @author RAUL VARGAS OCAMPO.
 * @version 1.0.
 *
 */
import { useApigwcsServices } from "../Services/common/UseApigwcs.Service";
import { SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA } from "../Constants/Urls/Services";
import GetPayloadReqConsultarBilletera from "../Services/apigwcs/ConsultaBilletera.Payload";

/**
 * Custon Hook para obtener las tarjetas en billetera
 * @param cuenta Numero de cuenta para realizar la consulta
 * @returns datos de billetera: dataResponse, y loading: useState de consulta
 */
export const useObtenerTarjetas = (cuenta: string) => {
  const { dataResponse, loading, invokeService } = useApigwcsServices();

  const payloadConsulta = GetPayloadReqConsultarBilletera(cuenta, "");

  function ObtenerTarjetas() {
    console.log("consultando info tdc con apiCyber;;;");
    invokeService(SERVICE_APIGWCS_METHOD_CONSULTA_BILLETERA, payloadConsulta);
  }

  return {
    dataResponse,
    loading,
    ObtenerTarjetas
  };
};
