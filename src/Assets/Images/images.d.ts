/*Esta declaración le dice a TypeScript que las 
importaciones de archivos PNG deben ser tratadas 
como un módulo y que el valor es de tipo any. 
 */
declare module '*.png' {
  const value: any;
  export = value;
}
  