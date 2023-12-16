import { GwValidarBilleteraEmailProspectoEBF } from "../Services/apigwcs/ValidarBilleteraEmailProspectoEBF.Service";
import { ResponseValidarBEP } from "../Services/interfaces/responseValidarBEP.interface";

/**
* Valida que la información con la que se accede a la aplicación sea válida.
*/
export const validarURL = (data: any) => {
    let validaVigenciaRespuesta = validarVigenciaURL(data.Origen, data.Email, data.CadValidacion, data.IdProspecto, data.Cuenta, data.Servicio, data.timestamp, data.Operacion);

    const objectValidarBEP: ResponseValidarBEP = {};

    validaVigenciaRespuesta.then(resultado => {
        objectValidarBEP.estado = resultado.estado;
        objectValidarBEP.codigoError = resultado.codigoError;
        objectValidarBEP.descripcionError = resultado.descripcionError;
      });
    return objectValidarBEP;
    /* console.log( "Origen: " +data.Origen );
    console.log( "Email: " +data.Email );
    console.log( "CadValidacion: " +data.CadValidacion );
    console.log( "IdProspecto: " +data.IdProspecto );
    console.log( "Cuenta: " +data.Cuenta );
    console.log( "Servicio: " +data.Servicio );
    console.log( "timestamp: " +data.timestamp );
    console.log( "Operacion: " +data.Operacion ); */
}

/**
* Realiza la validación de que la URL aún sea vigente, ya que tiene caducidad.
*/
export const validarVigenciaURL = (Origen: any, Email: any, CadValidacion: any, idProspecto: any, numeroCuenta: any, Servicio: any, timestamp: any, Operacion:any) => {
    let respuesta = GwValidarBilleteraEmailProspectoEBF(Origen, Email, CadValidacion, idProspecto, numeroCuenta, Servicio, timestamp, Operacion);
    return respuesta;
}



        /**
     * Valida que la informaci&oacute;n con la que se accede a la aplicaci&oacute;n sea v&aacute;lida.
     * @return {@code "irCapturarInformacion"} 
     */
/* 
        public String validarURL() {
            final String METHOD_NAME = "validarURL";
            LOGGER.entering(CLASS_NAME, METHOD_NAME);
            final String outcome = "irCapturarInformacion";
            if (this.datosParametroCodeDeURL.isParametrosOK()) {
                LOGGER.finer("los parametros estan bien ");
                ValidaVigenciaRespuesta validaVigenciaRespuesta = validarVigenciaURL();
                manejaRespuestaValidaVigencia(validaVigenciaRespuesta);
                if (this.urlValida) {
                    LOGGER.finer("URL es considerada como valida");
                    datosRequestCyberSource = construyeRequestCybersouce("");
                    try {
                        inicializarHostCheckoutAPI();
                        this.datosRequestCyberSource.agregarSignedParam("transaction_type", "create_payment_token");
                        this.anioInicial = Year.now().getValue();
                        LOGGER.finer("validando si viene email en la url");
                        flagEmail = validarEmail(this.datosParametroCodeDeURL.getEmail());
                        String telefono = this.datosParametroCodeDeURL.getTelefono();
                        String sistemaOrigen = this.datosParametroCodeDeURL.getSistemaOrigen();
                        flagTelefono = validarTelefono(telefono, sistemaOrigen);
                        flagAPaterno = Objects.nonNull(datosParametroCodeDeURL.getAPaterno());
                        flagMaterno = Objects.nonNull(datosParametroCodeDeURL.getAMaterno());
                        direccionValida = datosDireccionValidos();
                        rastreaValoresRequeridosDatosUsuario();
                        rastreaValoresRequeridosDireccion();
                        setValuesInputsDireccion(); //se cargan los datos que ya vienen en la url
                        setValuesInputsNombre(); //se cargan los datos del nombre que ya vienen en la url
                    } catch (Exception e) {
                        LOGGER.severe(e);
                    }
                } else { //por vigencia u otros razones
                    LOGGER.warning("URL no valida");
                    AppUtils.publicaMensajeURLInvalida();
                }
            } else {
                LOGGER.severe("Los parametros se consideran incorrectos");
            }
            LOGGER.exiting(CLASS_NAME, METHOD_NAME, outcome);
            return outcome;
        }
         */