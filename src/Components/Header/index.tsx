import React from 'react';
import logoSky from "../../Assets/Images/logoSky.png";

const Header: React.FC = () => {
  return (
    <>
      <header className='fixed top-0 w-full bg-white border-b-2'>
        <div className='h-1 lg:bg-gradient-to-r lg:from-sky-spectrum-100 lg:from-0% lg:via-sky-spectrum-101 lg:via-[33.93%] lg:to-sky-spectrum-104'></div>
        
        <div className='flex justify-between w-full h-[68px] px-8 lg:px-[108px] py-4 lg:py-4'>
        
          <img src={logoSky} alt="LogoSky" className='w-max h-max lg:w-[58.81px] lg:h-[34.25px]' />
          <span className='hidden lg:block py-0.5 font-medium text-sky-gray-120 text-[22px]'>Billetera</span>

        </div>
      </header>
    </>
  );
}

export {Header};
  