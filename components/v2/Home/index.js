import React from 'react';
import { Image } from 'antd';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ParticlePage } from '../../Particle';

export default function Home() {
  const ComponentOne = () => (
    <div className='bg-banner-orange bg-cover w-full h-screen flex flex-col pt-40'>
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
      <h1 className='text-[74px] text-[#002ED0] font-gochi-hand text-center'>KYC Process</h1>

      <div className='flex flex-row justify-center absolute bottom-0'>
        <Image preview={false} src='/assets/v2/section-1/hp.png' width={'70%'} height={'auto'} alt='hp' />
      </div>
    </div>
  );

  const ComponentTwo = () => (
    <div className='bg-banner-blue bg-cover w-full h-screen flex flex-col justify-center items-center pt-12'>
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
        One Platform. Single API <br /> Financial Inclusion <span className='text-[74px] text-[#FF6600] font-gochi-hand'>for All</span>
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
