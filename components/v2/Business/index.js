import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { useState } from 'react';

export default function Business() {
  const [isIdentity, setIsIdentity] = useState(true);
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen'>
      <h1 className='text-[40px] text-[#111111]'>Transform your Business with TrustLink</h1>
      <p className='text-[23px] text-[#555555] text-center font-light'>
        We provide a unified single API Platform for Identity and <br /> Financial Verification to grow your business{' '}
      </p>

      <div className='flex flex-row gap-5'>
        <Button onClick={() => setIsIdentity(true)} className={`w-64 rounded-full ${isIdentity ? 'bg-button-puple text-white' : 'border-2 border-[#04204D] text-[#04204D]'} text-[19px] h-auto`}>
          Identity Verification
        </Button>
        <Button onClick={() => setIsIdentity(false)} className={`w-64 rounded-full ${!isIdentity ? 'bg-button-puple text-white' : 'border-2 border-[#04204D] text-[#04204D]'} text-[19px] h-auto`}>
          Open Finance
        </Button>
      </div>

      {isIdentity ? (
        <div className='flex flex-row justify-center items-center gap-40 mt-14'>
          <Image alt='business' src='/assets/v2/section-1/business.png' width={'321px'} height={'319px'} />
          <div className='flex flex-col items-start'>
            <h1 className='text-[32px]'>Identity Verification</h1>
            <p className='text-base text-left'>
              AI driven biometric identity verification platform to increase <br /> your revenue, drive efficiencies and reduce fraud
            </p>
            <Button type='primary' className='rounded-full bg-button-orange border-none text-base h-auto px-10 py-2'>
              Learn More
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-row justify-center items-center gap-40 mt-14'>
          <Image alt='business' src='/assets/v2/section-1/open-finance.png' width={'321px'} height={'319px'} />
          <div className='flex flex-col items-start'>
            <h1 className='text-[32px]'>Open Finance</h1>
            <p className='text-base text-left'>Our comprehensive financial data will help you in analyzing <br/> your end user financial behavior in order to make the best <br/> decision for your business</p>
            <Button type='primary' className='rounded-full bg-button-orange border-none text-base h-auto px-10 py-2'>
              Learn More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
