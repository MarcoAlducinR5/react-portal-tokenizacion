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

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda a quidem enim, quibusdam laborum impedit in soluta similique, repellat dolore neque quas distinctio? Molestiae ab impedit officia odio placeat earum.
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
  