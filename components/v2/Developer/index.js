import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

export default function Developer() {
  return (
    <div className='flex flex-row justify-center items-center gap-20 h-screen bg-[#04204D]'>
        <Image alt='developer' src={'/assets/v2/section-1/developer.png'} width={'544px'} height={'438px'}/>
        <div className='flex flex-col gap-5'>
            <h3 className='font-bold text-2xl text-white'>Made for Developers</h3>
            <h1 className='text-[32px] font-normal text-white leading-[48px]'>Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit, sed do </h1>
            <p className='text-base font-light text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>
            <Button type='primary' className='rounded-full bg-button-orange border-none text-base h-auto w-max px-10 py-2'>View API Docs</Button>
        </div>
    </div>
  )
}
