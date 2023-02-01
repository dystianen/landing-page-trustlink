import { Button, Checkbox, Input, Select } from 'antd'
import React from 'react'

export default function ContactUs() {
  return (
    <div className='flex flex-col justify-center mx-20 text-center h-screen'>
        <h3 className='text-2xl font-bold text-[#04204D] mb-0'>Let&#39;s Connect</h3>
        <h1 className='text-[32px] text-[#111111]'>Get in touch with us</h1>

        <div className='grid grid-cols-4 gap-5 mt-5'>
            <Input className='rounded-lg' size='large' placeholder='Name'/>
            <Input className='rounded-lg' size='large' placeholder='Company Name'/>
            <Input className='rounded-lg' size='large' placeholder='Company Email'/>
            <Input className='rounded-lg' size='large' placeholder='Company Size'/>
            <Select className='rounded-lg text-left' size='large' placeholder='Industry'/>
            <Select className='rounded-lg text-left' size='large' placeholder='Division'/>
            <Select className='rounded-lg text-left' size='large' placeholder='Position'/>
            <Select className='rounded-lg text-left' size='large' placeholder='Services'/>
            <Input.TextArea className='rounded-lg w-full col-span-4' rows={6} placeholder='How Can We Help?'/>
        </div>

        <div className='flex flex-row justify-between items-center mt-5'>
            <Checkbox>I am willing to be contacted by TrustLink</Checkbox>
            <Button type='primary' className='rounded-full bg-button-orange border-none text-base h-auto px-10 py-2'>Submit</Button>
        </div>
    </div>
  )
}
