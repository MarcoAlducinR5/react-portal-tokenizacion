import React from 'react';
import visa from "../Images/Visa.png";
import masterCard from "../Images/MasterCard.png";
import aMex from "../Images/AmericanExpress.png";
import "./Main.css"

function Main() {
    return (
      <>
        <div class="flex flex-col justify-center items-center ">
          <div className='lg:border-[1px] border-sky-gray-500 rounded-[10px] mx-9 my-[125px] lg:mx-0 lg:my-[153px] w-[320px] h-[1900px] lg:w-[728px] lg:h-[1282px] lg:px-[18px] lg:py-8'>
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
                  <input type='text' name='nombre' placeholder='Nombre' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>Apellido paterno</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='text' name='apellidoPaterno' placeholder='Apellido paterno' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>Apellido materno</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='text' name='apellidoMaterno' placeholder='Apellido materno' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between py-2 lg:py-4'>
              <div className='flex flex-col h-[86px] lg:w-[446.5px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>Correo electrónico</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='email' name='correo' placeholder='mail@mail.com' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>Número telefónico</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='tel' name='telefono' placeholder='Teléfono' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
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
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
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
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>Año de vencimiento</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='tel' name='anioVenci' placeholder='Año' className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
              <div className='flex flex-col h-[86px] lg:w-[205px] lg:h-[80px]'>
                <div className='block my-1 lg:mt-0 lg:mb-1'>
                  <label className='text-sm text-[#292929]'>CVV</label>
                </div>
                <div className='block my-1 lg:mb-0 lg:mt-1'>
                  <input type='password' name='apellidoMaterno' placeholder='CVV' maxLength={3} className='w-full h-[40px] lg:h-[48px] rounded border-[1px] border-sky-gray-500 focus:outline-none focus:border-[#DA1E28] placeholder:text-base placeholder:text-sky-gray-120 placeholder:p-4' />
                </div>
              </div>
            </div>
            
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
            
          </div>
        </div> 
      </>
    );
  }
  
  export {Main};
  