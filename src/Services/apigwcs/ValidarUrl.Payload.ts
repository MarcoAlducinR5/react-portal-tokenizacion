import { EBMHeaderRequest } from "../common/HeadersApigwcs.Interface";
import { EbmHeaderRequestApigwcs } from "../common/ServiceUtil";
import { RequestValidarBilleteraEmailProspectoInterface, ValidarBilleteraListInput } from "../interfaces/billetera/ValidarBilleteraEmailProspecto.Interface";


/**
 * Header genérico para solicitudes servicios apigwcs
 */
let reqHeaderValUrl: EBMHeaderRequest = EbmHeaderRequestApigwcs(
  "ValidarUrl"
);

export default function GetPayloadReqValidarUrl (
  reqValidarEmail: ReqValidarEmail
) {
    const validarBilleteraInput : ValidarBilleteraListInput={
        NumCuenta: reqValidarEmail.numeroCuenta ?? '',
        IdProspecto: reqValidarEmail.idProspecto ?? '',
        Email: reqValidarEmail.email,
        Servicio: reqValidarEmail.servicio,
        SistemaOrigen: reqValidarEmail.origen,
        CadenaValidacion: reqValidarEmail.cadValidacion,
        Vigencia: reqValidarEmail.vigencia
    };
    
  const payloadValidaUrl: RequestValidarBilleteraEmailProspectoInterface = {
      EBMHeaderRequest: reqHeaderValUrl,
      ValidarBilleteraListInput: [validarBilleteraInput]
  };

  console.log("Generando payload Req - GwValidarBilleteraEmailProspectoEBF");
  return JSON.stringify(payloadValidaUrl);
};

export type ReqValidarEmail = {
    email: string,
    servicio: string,
    origen: string,
    cadValidacion: string,
    vigencia: string,
    numeroCuenta?: string,
    idProspecto?: string,
}