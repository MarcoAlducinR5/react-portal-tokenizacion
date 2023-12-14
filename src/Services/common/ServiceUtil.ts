import { EBMHeaderRequest } from "./Headers.Interface";
import { EBMHeaderRequest as EBMHeaderRequestCs } from "./HeadersApigwcs.Interface";

export const EbmHeaderRequestSoa = (operacion: string, sistema: string) => {
  const reqHeader: EBMHeaderRequest = {
    Operacion: operacion,
    SistemaOrigen: sistema,
    SeguridadList: {
      SeguridadItem: [
        {
          SistemaAAutenticar: sistema,
          Username: "",
          Password: ""
        }
      ]
    },
    ParametroList: {
      ParametroItem: []
    }
  };
  return reqHeader;
};

export const EbmHeaderRequestApigwcs = (
  operacion: string,
  sistemaOrigen?: string
) => {
  const reqHeader: EBMHeaderRequestCs = {
    Operacion: operacion,
    SistemaOrigen: sistemaOrigen ?? "PortalTokenizacion",
    SeguridadList: {
      SeguridadItem: [
        {
          SistemaAAutenticar: sistemaOrigen ?? "PortalTokenizacion",
          Username: "",
          Password: ""
        }
      ]
    },
    ParametroList: {
      ParametroItem: []
    }
  };
  return reqHeader;
};
