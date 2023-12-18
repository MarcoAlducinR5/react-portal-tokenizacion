
export function ValidarOperacion(oper : string){
    if(  oper !== 'TOKEN'
      && oper !== 'PAGO'
      && oper !== 'PAGO_RECURRENTE'
      && oper !== 'CAMBIO_FORMA_PAGO'){
        return false
      }else 
      return true
}

export function ValidarMonto(operacion : string, monto: number){
    if( (operacion === 'PAGO' || operacion === 'PAGO_RECURRENTE') && monto <= 0 ){
        return false} else return true
}