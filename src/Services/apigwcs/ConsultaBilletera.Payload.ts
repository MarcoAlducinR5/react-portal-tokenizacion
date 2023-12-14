import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import {
  RequestConsultarBilleteraInterface,
} from "../interfaces/billetera/ConsultaBilletera.Interface";

/**
 * Header genérico para solicitudes servicios apigwcs
 */
let reqHeaderGetBilletera: EBMHeaderRequest = EbmHeaderRequestApigwcs(
  "Consultar Billetera"
);

export default function GetPayloadReqConsultarBilletera (
  numeroCuenta: string,
  paymentInstrument?: string
) {
  const payloadBilletera: RequestConsultarBilleteraInterface = {
    EBMHeaderRequest: reqHeaderGetBilletera,
    NumeroCuenta: numeroCuenta,
    PaymentInstrument: paymentInstrument
  };

  console.log("Generaldo payload Req - GwConsultarBilleteraEBF");
  return JSON.stringify(payloadBilletera);
};
