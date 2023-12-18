import { OP_CFP, OP_PR, OP_PU, OP_TOK } from "../../Constants/Constantes"

export function ValidarOperacion(oper : string){
    if(  oper !== OP_TOK
      && oper !== OP_PU
      && oper !== OP_CFP
      && oper !== OP_PR){
        return false
      }else 
      return true
}

export function ValidarMonto(operacion : string, monto: number){
    if( (operacion === OP_PU || operacion === OP_PR) && monto <= 0 ){
        return false} else return true
}