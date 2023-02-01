import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex flex-col justify-between p-20 text-white h-[50vh] bg-[#04204D]'>
      <div className='grid grid-cols-4 gap-10'>
        <div>
          <p className='text-[15px] font-bold'>Centennial Tower Level 29 Unit F</p>
          <p className='text-[15px] opacity-[.6]'>
            Jl. Jend Gatot Subroto No 27, <br /> Karet Semanggi, Kec. Setiabudi, <br /> Jakarta Selatan, DKI Jakarta 12930
          </p>
        </div>
        <div>
          <p className='text-[15px] font-bold'>Call Us</p>
          <p className='text-[15px] opacity-[.6]'>(021) 29602116 / 29602117</p>
          <p className='text-[15px] opacity-[.6]'>Mon - Fri (8.30 - 20.00)</p>
        </div>
        <div>
          <p className='text-[15px] font-bold'>Email</p>
          <p className='text-[15px] opacity-[.6]'>info@withtrustlink.com</p>
        </div>
        <div className='flex flex-row items-start gap-5 mt-5'>
            <Image alt='' src={'/assets/v2/section-1/twitter.svg'} width={'24px'} height={'24px'}/>
            <Image alt='' src={'/assets/v2/section-1/facebook.svg'} width={'24px'} height={'24px'}/>
            <Image alt='' src={'/assets/v2/section-1/linkedin.svg'} width={'24px'} height={'24px'}/>
            <Image alt='' src={'/assets/v2/section-1/instagram.svg'} width={'24px'} height={'24px'}/>
        </div>
      </div>

      <hr className='my-10 border-white opacity-[.2]'/>

      <p className='text-center opacity-[.6] text-sm'>Copyright © 2022 TrustLink, all Rights Reserved.</p>
    </div>
  );
}
