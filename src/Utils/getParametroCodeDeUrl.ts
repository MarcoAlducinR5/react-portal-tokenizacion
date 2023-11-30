/**
* Obtiene el valor del parámetro {@code "code"} de la URL
* @return el valor del parámetro
*/

export const getParametroCodeDeURL = () =>{
    const valorParamCodeRaw = new URLSearchParams(window.location.search);
    return valorParamCodeRaw.get('code'); 
}