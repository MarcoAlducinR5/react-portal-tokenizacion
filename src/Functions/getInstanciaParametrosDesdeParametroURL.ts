import { decryptBase64ArrayByteToString } from './decryptBase64ArrayByteToString.ts';

export const getInstanciaParametrosDesdeParametroURL = (urlParams: URLSearchParams) => {
    let code = urlParams.get('code'); 

    const codeDecryp = decryptBase64ArrayByteToString(code);

    return codeDecryp;
}