import React from 'react';

const Confirmacion: React.FC = () => {
    
    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <div className='lg:border-[1px] border-sky-gray-500 rounded-[10px] mx-9 my-[125px] lg:mx-0 lg:my-[153px] w-[281px] h-[617px] lg:w-[728px] lg:h-[395px] lg:px-[18px] lg:pt-8'>
                    
                    <div className='flex flex-col mb-14 lg:mb-11'>
                        <div className='block py-2 lg:py-0 mb-4 lg:mb-0 h-[186px] lg:h-[120px] border-[1px] lg:border-0 rounded-[10px]'>
                            
                            <div className='flex flex-col items-center justify-around h-[122px] lg:h-[120px] my-5 lg:my-0'>
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
                        <div className='hidden lg:block border-[0.5px] border-sky-gray-500'></div>
                        <div className='block px-4 lg:px-0 py-2 mt-4 lg:mt-0 h-[281px] lg:h-[199px] border-[1px] lg:border-0 rounded-[10px]'>
                            <div className='flex flex-col justify-between h-[217px] lg:h-[191px] my-5 lg:my-0'>
                                <div className='block mb-3'>
                                    <span className='lg:hidden text-[22px] font-medium'>Detalle de tarjeta</span>
                                    <span className='hidden lg:block text-base font-medium'>Datos de tarjeta</span>
                                </div>
                                <div className='block lg:hidden border-[0.5px] border-sky-gray-500'></div>
                                <div className='flex flex-col mt-3'>
                                <div className='block text-[14px] lg:text-base font-medium lg:font-normal pb-[1px] lg:pb-0'>Fecha: 20 de junio 2023</div>
                                    <div className='hidden lg:block py-[1px] lg:py-0'>MASTERCARD</div>
                                    <div className='block lg:hidden text-[14px] lg:text-base font-medium'>
                                        <div className='block py-[1px] lg:py-0'>Daniel Alejandro Tellez Fernández</div>
                                        <div className='block py-[1px] lg:py-0'>****   ****   ****   0123</div>
                                    </div>
                                    <div className='hidden lg:block text-[14px] lg:text-base font-normal'>
                                        <div className='block py-[1px] lg:py-0'>****   ****   ****   0123</div>
                                        <div className='block py-[1px] lg:py-0'>Daniel Alejandro Tellez Fernández</div>
                                    </div>
                                    <div className='block text-[14px] lg:text-base font-medium lg:font-normal py-[1px] lg:py-0'>05/23</div>
                                    <div className='block text-[14px] lg:text-base font-normal lg:font-normal pt-[1px] lg:pt-0'>Sirianes 255 Int 322, San Rafael, 09640 CDMX, México</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-around lg:h-[118px]'>
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
            </div>
        </>
    );

}

export {Confirmacion};