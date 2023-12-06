import * as aesjs from 'aes-js/index';
import { Buffer } from 'buffer/index';

const keyV = "Pr0c3s0R3g1str0S";
const initv = "R3g1str0Pr0c3s0S";

/**
 * Decripta el base64 a string.
 * 
 * @param code código a decodificar.
 * @returns Resultado
 */
export const decryptBase64ArrayByteToString = (code: any) => {

  const keyBytes = aesjs.utils.utf8.toBytes(keyV);
  const ivBytes = aesjs.utils.utf8.toBytes(initv);

  //Sustituye los caracteres
  code = code.replace(/[_]/g, "+");
  code = code.replace(/~/g, "/");
  code = code.replace("*", "=");

  //Convierte a byte
  let respuesta = Buffer.from(code, 'base64').toString('binary');
  let textBytes = new Uint8Array(new ArrayBuffer(respuesta.length));//aesjs.utils.utf8.toBytes(code);
  textBytes = textBytes.map((byte, i) => respuesta.charCodeAt(i));

  //Decodifica con clave
  const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
  const encryptedBytes = aesCbc.decrypt(textBytes);
  const result: string = new TextDecoder().decode(encryptedBytes);

  return result;
  
};