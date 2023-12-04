export class DatosPeticionDTO {
    tipoPagoFlujo: string;
    operacion: string;
    numeroContrato: string;
    tokenNuevo: string | null;
    puntoA: boolean;

    constructor(
        tipoPagoFlujo: string,
        operacion: string,
        numeroContrato: string,
        tokenNuevo: string | null,
        puntoA: boolean
    ) {
        this.tipoPagoFlujo = tipoPagoFlujo;
        this.operacion = operacion;
        this.numeroContrato = numeroContrato;
        this.tokenNuevo = tokenNuevo;
        this.puntoA = puntoA;
    }
}
  