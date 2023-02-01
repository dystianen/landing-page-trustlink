import React from 'react';
import { Image } from 'antd';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ParticlePage } from '../../Particle';

export default function Home() {
  const ComponentOne = () => (
    <div className='bg-banner-orange bg-cover w-full h-screen flex flex-col justify-center items-center'>
      <ParticlePage
        dimention={{
          width: '100%',
          height: '100vh',
        }}
        numberValue={120}
        opacity={0.8}
        className={'home-plexus'}
      />

      <h2 className='m-0 text-[64px] text-center text-white leading-[56px]'>
        Identity platform to <br /> manage your seamless{' '}
      </h2>
      <h1 className='text-[74px] text-[#002ED0]'>KYC Process</h1>

      <div className='flex flex-row justify-between gap-14 bottom-0'>
        <Image preview={false} className='mt-6' src='/assets/v2/section-1/hp-1.png' width={'344px'} height={'350px'} alt='hp' />
        <Image preview={false} src='/assets/v2/section-1/hp-2.png' width={'344px'} height={'375px'} alt='hp' />
        <Image preview={false} className='mt-6' src='/assets/v2/section-1/hp-3.png' width={'344px'} height={'350px'} alt='hp' />
      </div>
    </div>
  );

  const ComponentTwo = () => (
    <div className='bg-banner-blue bg-cover w-full h-screen flex flex-col justify-center items-center pt-5'>
      <ParticlePage
        dimention={{
          width: '100%',
          height: '100vh',
        }}
        numberValue={120}
        opacity={0.8}
        className={'home-plexus'}
      />
      <h2 className='mb-0 mt-10 text-[64px] text-center text-white leading-[56px]'>
        One Platform. Single API <br /> Financial Inclusion <span className='text-[74px] text-[#FF6600]'>for All</span>
      </h2>

      <div className='flex flex-row justify-center bottom-0'>
        <Image preview={false} className='mt-10' src='/assets/v2/section-1/laptop.png' alt='laptop' />
      </div>
    </div>
  );

  return (
    <div>
      <ReactCompareSlider changePositionOnHover={true} itemOne={<ComponentOne />} itemTwo={<ComponentTwo />} handle={<div />} />
    </div>
  );
}
