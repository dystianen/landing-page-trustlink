import React from 'react';
import Image from 'next/image';

export default function WhyUs() {
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen'>
      <h1 className='text-[#04204D] text-lg font-bold'>Why Us</h1>
      <h3 className='text-[40px] text-[#111111] leading-[48px]'>
        TRUSTED PARTNER TO ACCELERATE YOUR <br /> JOURNEY OF DIGITAL TRANSFORMATION
      </h3>
      <p className='text-[23px] text-[#555555]'>
        We provide low-cost, flexible, and secure APIs that enable organizations <br /> to focus on business challenges rather than the technical details of <br /> obtaining and protecting access to critical customer data source.
      </p>

      <div className='flex flex-row text-[23px] gap-10 mx-30 mt-10'>
        <div>
          <Image src='/assets/v2/section-1/setting.png' width='64px' height={'64px'} alt='setting' />
          <h5>Quick and Seamless Integration</h5>
        </div>
        <div>
          <Image src='/assets/v2/section-1/user.png' width='64px' height={'64px'} alt='setting' />
          <h5>Proven State Of The Art Technology</h5>
        </div>
        <div>
          <Image src='/assets/v2/section-1/play.png' width='64px' height={'64px'} alt='setting' />
          <h5>Accurate and Fast Result</h5>
        </div>
      </div>
    </div>
  );
}
