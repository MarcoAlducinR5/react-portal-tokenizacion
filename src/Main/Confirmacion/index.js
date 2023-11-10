import React from 'react';

function Confirmacion(){
    
    return (
        <React.Fragment>
            <div class="flex flex-col justify-center items-center ">
                <div className='lg:border-[1px] border-sky-gray-500 rounded-[10px] mx-9 my-[125px] lg:mx-0 lg:my-[153px] w-[281px] h-[617px] lg:w-[728px] lg:h-[379px] lg:px-[18px] lg:py-8'>
                    
                    <div className='flex flex-col mb-14'>
                        <div className='block py-2 mb-4 h-[186px] border-[1px] rounded-[10px]'>
                            
                            <div className='flex flex-col items-center justify-around h-[122px] my-5'>
                                <div className='block border-[3px] border-[#198038] mb-2 w-[42px] h-[42px] rounded-full pl-2 pt-2.5'>
                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15.621L0 8.1195L2.1195 6L7.5 11.379L18.8775 0L21 2.1225L7.5 15.621Z" fill="#198038"/>
                                    </svg>
                                </div>
                                <div className='block w-full h-[64px] mt-2 text-center'>
                                    <span className='text-[22px] font-medium'>¡Pago realizado exitosamente!</span>
                                </div>
                            </div>
                        </div>
                        <div className='block px-4 py-2 mt-4 h-[281px] border-[1px] rounded-[10px]'>
                            <div className='flex flex-col justify-between h-[217px] my-5'>
                                <div className='block mb-3'>
                                    <span className='text-[22px] font-medium'>Detalle de tarjeta</span>
                                </div>
                                <div className='block border-[0.5px] border-sky-gray-500'></div>
                                <div className='flex flex-col mt-3 bo'>
                                    <div className='block text-[14px] font-medium pb-0.5'>Fecha: 20 de junio 2023</div>
                                    <div className='block text-[14px] font-medium py-0.5'>Daniel Alejandro Tellez Fernández</div>
                                    <div className='block text-[14px] font-medium py-0.5'>****   ****   ****   0123</div>
                                    <div className='block text-[14px] font-medium py-0.5'>05/23</div>
                                    <div className='block text-[14px] font-normal pt-0.5'>Sirianes 255 Int 322, San Rafael, 09640 CDMX, México</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='block h-[48px] w-full lg:w-[344px] bg-[#000FF5] text-white rounded-[4px]'>
                        <div className='flex justify-between items-start flex-row px-4'>
                            <span className='block text-base font-medium'>Aceptar</span>
                            <div className='h-6 w-6 py-1'>
                                <svg className='h-[15px] w-[18px]' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0.715332L9.4275 1.76008L15.1125 7.46533H0V8.96533H15.1125L9.4275 14.6451L10.5 15.7153L18 8.21533L10.5 0.715332Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </button>

                </div>
            </div>
        </React.Fragment>
    );

}

export {Confirmacion};