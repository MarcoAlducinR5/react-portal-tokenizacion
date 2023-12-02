import React from 'react';
import visa from "../../../Assets/Images/Visa.png";
import masterCard from "../../../Assets/Images/MasterCard.png";
import aMex from "../../../Assets/Images/AmericanExpress.png";
import "./Pago.css"

function Pago({data}){
    
    const [requerido, setRequerido] = React.useState(false);
    
    return (
        <React.Fragment>
            <div class="flex flex-col justify-center items-center ">
                <div className={`lg:border-[1px] border-sky-gray-500 rounded-[10px] mx-9 my-[125px] lg:mx-0 lg:my-[153px] w-[320px] h-[1900px] lg:w-[728px]  lg:px-[18px] lg:py-8 ${requerido ? 'lg:h-[1435px]' : 'lg:h-[1335px]'}`}>
                    <div className='flex justify-between items-start flex-col lg:flex-row text-[#292929] border-b-[1px] border-sky-gray-500 pb-6'>
                        <div>
                            <span className='text-[22px] font-medium'>Pago con tarjeta</span>
                            <br/>
                            <span className='text-lg font-normal'>Ingresa los datos de tu tarjeta</span>
                        </div>
                        <br className='lg:hidden' />
                        <span className='text-base font-normal'>Identificador: 12345678</span>
                    </div>
                    

                    <div class="radio-group flex justify-between items-center flex-row w-full lg:w-[692px] h-[100px] lg:h-[67px] px-2 lg:px-40 lg:my-5">
                        <input type="radio" name="option" id="option1" className='appearance-none' />
                        <label for="option1" className='flex justify-center items-center rounded border-[1px] w-[69px] h-[46px] lg:w-[99px] lg:h-[67px] shadow-[0px 2px 8px 0px rgba(242, 242, 242, 1)]'>
                            <div className='flex justify-center items-center rounded w-[67px] h-[45px] lg:w-[97px] lg:h-[66px] bg-white'>
                                <img src={visa} alt='' className='w-[54px] h-[54px] lg:w-[78px] lg:h-[79px]' />
                            </div>
                        </label>
                        
                        <input type="radio" name="option" id="option2" className='appearance-none' />
                        <label for="option2" className='flex justify-center items-center rounded border-[1px] w-[69px] h-[46px] lg:w-[99px] lg:h-[67px] shadow-[0px 2px 8px 0px rgba(242, 242, 242, 1)]'>
                            <div className='flex justify-center items-center rounded w-[67px] h-[45px] lg:w-[96px] lg:h-[66px] bg-white'>
                                <img src={masterCard} alt='' className='w-[39px] h-[38px] lg:w-[66px] lg:h-[66px]' />
                            </div>
                        </label>

                        <input type="radio" name="option" id="option3" className='appearance-none' />
                        <label for="option3" className='flex justify-center items-center rounded border-[1px] w-[69px] h-[46px] lg:w-[99px] lg:h-[67px] shadow-[0px 2px 8px 0px rgba(242, 242, 242, 1)]'>
                            <div className='flex justify-center items-center rounded w-[67px] h-[45px] lg:w-[97px] lg:h-[66px] bg-white'>
                                <img src={aMex} alt='' className='w-[46px] h-[46px] lg:w-[80px] lg:h-[80px]' />
                            </div>
                        </label>
                    </div>
                    
                    <span className='text-xl text-sky-black-100 text font-normal'>Datos de tarjetahabiente</span>

                    <div className='flex flex-col lg:flex-row justify-between py-2 lg:py-4'>
                        <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Nombre</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='text' name='nombre' placeholder='Nombre' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Nombre}  />
                            </div>
                        </div>
                        <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Apellido paterno</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='text' name='apellidoPaterno' placeholder='Apellido paterno' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Paterno} />
                            </div>
                        </div>
                        <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Apellido materno</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='text' name='apellidoMaterno' placeholder='Apellido materno' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Materno} />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between py-2 lg:py-4'>
                        <div className='flex flex-col h-[86px] lg:w-[446.5px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Correo electrónico</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='email' name='correo' placeholder='mail@mail.com' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Email} />
                            </div>
                        </div>
                        <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Número telefónico</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='tel' name='telefono' placeholder='Teléfono' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Telefono} />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between py-2 lg:py-4'>
                        <div className='flex flex-col h-[86px] lg:w-[326px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Número de tarjeta</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='tel' name='tarjeta' placeholder='**** **** **** 0123' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                            </div>
                        </div>
                        <div className='flex flex-col h-[86px] lg:w-[326px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Confirmar número de tarjeta</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='tel' name='confirmaTarjeta' placeholder='**** **** **** 0123' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between py-2 lg:py-4'>
                        <div className='flex flex-row justify-between h-[86px] lg:w-[446.5px] lg:h-[80px]'>
                            <div className='flex flex-col w-[140px] lg:w-[205px] lg:h-[80px]'>
                                <div className='block my-1 lg:mt-0 lg:mb-1'>
                                    <label className='text-sm text-[#292929]'>Mes de vencimiento</label>
                                </div>
                                <div className='block my-1 lg:mb-0 lg:mt-1'>
                                    <select name='mesVenci' placeholder='Mes' class='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4'>
                                        <option className='text-base text-sky-gray-120 p-4'>Mes</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="01">01</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="02">02</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="03">03</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="04">04</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="05">05</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="06">06</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="07">07</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="08">08</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="09">09</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="10">10</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="11">11</option>
                                        <option className='text-base text-sky-gray-120 p-4' value="12">12</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col w-[140px] lg:w-[205px] lg:h-[80px]'>
                                <div className='block my-1 lg:mt-0 lg:mb-1'>
                                    <label className='text-sm text-[#292929]'>Año de vencimiento</label>
                                </div>
                                <div className='block my-1 lg:mb-0 lg:mt-1'>
                                    <input type='tel' name='anioVenci' placeholder='Año' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>CVV</label>
                            </div>
                            <div className='block my-1 lg:mb-0 lg:mt-1'>
                                <input type='password' name='ccv' placeholder='CVV' maxLength={3} className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                            </div>
                        </div>
                    </div>
                    
                    <span className='text-xl text-sky-black-100 font-normal'>Dirección</span>

                    <div className='flex flex-col lg:flex-row justify-between pt-2 lg:pt-4'>
                        <div className={`flex flex-col lg:w-[446.5px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Calle</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='text' name='Calle' placeholder='Calle' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Calle} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                        <div className={`hidden lg:flex flex-col w-[205px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Número exterior</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='tel' name='exterior' placeholder='No.' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.NumExt} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden flex flex-col justify-between pt-2'>
                        <div className={`flex flex-row justify-between ${requerido ? 'h-[104px]' : ' h-[86px]'}`}>
                            <div className='flex flex-col w-[140px]'>
                                <div className='block my-1'>
                                    <label className='text-sm text-[#292929]'>Número exterior</label>
                                </div>
                                <div className='block mt-1'>
                                    <input type='tel' name='exterior' placeholder='No.' className='w-full h-[40px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.NumExt} />
                                </div>
                                <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                    <span>Campo requerido</span>
                                </div>
                            </div>
                            <div className='flex flex-col w-[140px]'>
                                <div className='block my-1'>
                                    <label className='text-sm text-[#292929]'>Número interior</label>
                                </div>
                                <div className='block mt-1'>
                                    <input type='tel' name='interior' placeholder='No.' className='w-full h-[40px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.NumInt} />
                                </div>
                                <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                    <span>Campo requerido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row justify-between pt-2 lg:pt-4'>
                        <div className={`hidden lg:flex flex-col w-[205px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Número interior</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='tel' name='interior' placeholder='No.' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.NumInt} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                        <div className={`flex flex-col lg:w-[446.5px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Colonia</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='text' name='colonia' placeholder='Colonia' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Colonia} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between pt-2 lg:pt-4'>
                        <div className={`flex flex-col lg:w-[326px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Ciudad</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='text' name='ciudad' placeholder='Ciudad' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Ciudad} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                        <div className={`flex flex-col lg:w-[326px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Alcaldia o Municipio</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='text' name='alcaldia' placeholder='Alcaldia' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Municipio} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between pt-2 lg:pt-4'>
                        <div className={`flex flex-col lg:w-[446.5px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Estado</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='text' name='Estado' placeholder='Estado' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.Estado} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                        <div className={`flex flex-col lg:w-[205px] ${requerido ? 'h-[104px]' : 'h-[86px] lg:h-[80px]'}`}>
                            <div className='block my-1 lg:mt-0 lg:mb-1'>
                                <label className='text-sm text-[#292929]'>Código Postal</label>
                            </div>
                            <div className='block mt-1'>
                                <input type='tel' name='cp' placeholder='56789' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' defaultValue={data.CP} />
                            </div>
                            <div className={`h-[18px] text-xs text-[#DA1E28] ${requerido ? 'block' : 'hidden'}`}>
                                <span>Campo requerido</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='flex flex-col h-[38px] lg:h-[74px] py-2 lg:py-7'>
                            <span className='text-xs text-sky-black-100 font-normal'>
                                Todos los campos son requeridos
                            </span>
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-around h-[108px] lg:h-[118px] py-8 lg:p-8 lg:mb-8'>
                        <button className='block h-[48px] w-full lg:w-[344px] bg-[#000FF5] text-white rounded-[4px]'>
                            <div className='flex justify-between items-start flex-row px-4'>
                                <span className='hidden lg:block text-base font-medium'>Continuar</span>
                                <span className='lg:hidden text-base font-medium'>Confirmar</span>
                                <div className='h-6 w-6 py-1'>
                                    <svg className='h-[15px] w-[18px]' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 0.715332L9.4275 1.76008L15.1125 7.46533H0V8.96533H15.1125L9.4275 14.6451L10.5 15.7153L18 8.21533L10.5 0.715332Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export {Pago};