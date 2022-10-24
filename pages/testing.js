import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import StickyHeader from "../components/StickyHeader";
import {Image} from "antd";
const Component1 = ()=>{
    const boxImage= [
        {
            src: '/assets/slider/kyc-1.png'
        },
        {
            src: '/assets/slider/kyc-2.png'
        },
        {
            src: '/assets/slider/kyc-3.png'
        },
    ]
    return (
        <div className={'relative h-screen w-full'} style={{background: 'linear-gradient(184deg, rgba(236,105,20,1) 29%, rgba(210,184,184,1) 47%, rgba(236,105,20,1) 78%)'}}>
            <StickyHeader
                // changeMenuOpen={setIsOpen}
                // isMenuOpen={isOpen}
            />

            <div className={'text-white text-7xl font-bold montserrat w-full text-center mt-16'}>
                <div>Trust-Centric Solutions</div>
                <div>
                    <span>To Do Your </span>
                    <span className={'text-6xl text-[#0030CE]'}>KYC Process</span>
                </div>
            </div>

            <div className={'absolute bottom-0 w-full flex justify-center items-end'}>
                {
                    boxImage.map((d, index) => (
                        <div key={index} className={'mx-8 flex items-enc'}>
                            <Image preview={false} src={d.src} className={`${index === 1 ? 'h-[28rem]' : 'h-[26rem]'}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const Component2 = ()=>{
    const boxImage= [
        {
            src: '/assets/slider/open-bk-1.png'
        },
        {
            src: '/assets/slider/open-bk-2.png'
        },
        {
            src: '/assets/slider/open-bk-3.png'
        },
    ]
    return (
        <div className={'h-screen w-full'} style={{background: 'linear-gradient(184deg, rgba(71,94,172,1) 24%, rgba(98,103,152,1) 58%, rgba(40,48,121,1) 81%)'}}>
            <StickyHeader
                // changeMenuOpen={setIsOpen}
                // isMenuOpen={isOpen}
            />

            <div className={'text-white text-7xl font-bold montserrat w-full text-center mt-16'}>
                <div>Trust-Centric Solutions</div>
                <div>
                    <span>To Do Your </span>
                    <span className={'text-6xl text-[#FE6704]'}>Open Banking</span>
                </div>
            </div>

            <div className={'absolute bottom-0 w-full flex justify-center items-end'}>
                {
                    boxImage.map((d, index) => (
                        <div key={index} className={'mx-8 flex items-enc'}>
                            <Image preview={false} src={d.src} className={`${index === 1 ? 'h-[28rem]' : 'h-[26rem]'}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
const Testing = observer(prop=>{

    return (
        <div className={'w-full'}>
            <ReactCompareSlider
                changePositionOnHover={true}
                itemOne={<Component1 />}
                itemTwo={<Component2 />}
                handle={(<div/>)}
            />
        </div>
    )
});

export default Testing;
