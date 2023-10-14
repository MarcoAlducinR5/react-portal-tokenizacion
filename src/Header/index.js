import React from 'react';
import logoSky from "../Images/logoSky.png";

function Header() {
    return (
      <>
        <header className='fixed top-0 w-full bg-white border-b-2'>
          {/* <div class="h-1 bg-gradient-to-r from-[#FF9E00] from-0% via-[#FF0000] via-[33.93%]  to-[#0071FF] pb-1"></div> */}

          <div className='h-1 bg-gradient-to-r from-sky-spectrum-100 from-0% via-sky-spectrum-101 via-[33.93%] to-sky-spectrum-104'></div>
          
          <div className='flex justify-between w-full h-[68px] px-8 lg:px-[108px] py-4 lg:py-4'>
          
            <img src={logoSky} alt="LogoSky" className='w-max h-max lg:w-[58.81px] lg:h-[34.25px]' />
            <span className='hidden lg:block py-0.5 font-medium text-sky-gray-120 text-[22px]'>Billetera</span>

          </div>

          
        </header>
      </>
    );
  }
  
  export {Header};
  