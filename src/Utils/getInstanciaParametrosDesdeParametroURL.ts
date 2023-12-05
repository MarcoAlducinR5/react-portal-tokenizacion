import { decryptBase64ArrayByteToString } from './decryptBase64ArrayByteToString';

/**
* Desencripta el valor del parámetro {@code "code"} que viene en la URL.
* @param valor el valor del parámetro
* @return el valor humanamente legible del parámetro
*/
export const getInstanciaParametrosDesdeParametroURL = (code: string | null) => {
    return decryptBase64ArrayByteToString(code);
}