//"#0.00"
//"dd/MM/yyyy"
/**
 * Regresa String de la fecha Local enviada con formato DD/MM/YY
 * @param date una fecha a convertir
 * @param format formato opcional, si no viene se establece por defecto a DD/MM/YY
 * @returns string de la fecha local con el formato establecido
 */
export const formatDateToString = (date: Date, format: string = "DD/MM/YY") => {
  // obtener mes, día del mes, año, hora
  const moment = require("moment");
  const now = moment(date);
  return now.format(format);
};

/**
 * Regresa String de la fecha UTC enviada con formato DD/MM/YY
 * @param date una fecha a convertir
 * @param format formato opcional, si no viene se establece por defecto a DD/MM/YY
 * @returns  string de la fecha UTC con el formato establecido
 */
export const formatDateToUTCString = (date: Date, format: string = "DD/MM/YY") => {
  // obtener mes, día del mes, año, hora
  const moment = require("moment");
  return moment.utc( date ).format( format )
};