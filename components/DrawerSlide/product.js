import {Button, Drawer, Image} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";

export const Product = observer(({show, setShow}) => {

    const products = [
        {
            key: 'verify',
            title: 'Verify',
            description: 'TrustVerify is our AI that can match your pict to dukcapil',
            image: '/assets/logo/trust/verify.png'
        },
        {
            key: 'scan',
            title: 'Scan',
            description: 'TrustScan is our OCR for your needed',
            image: '/assets/logo/trust/scan.png'
        },
        {
            key: 'live',
            title: 'Live',
            description: 'TrustLive is powerfull to scan the liveness of a picture',
            image: '/assets/logo/trust/live.png'
        },
        {
            key: 'vision',
            title: 'Vision',
            description: 'TrustVision able to scan multiple face and match the data',
            image: '/assets/logo/trust/vision.png'
        },
        {
            key: 'connect',
            title: 'Connect',
            description: 'TrustConnect can help you connect to multiple bank',
            image: '/assets/logo/trust/connect.png'
        },
        {
            key: 'score',
            title: 'Score',
            description: 'TrustScore will help analys and control your spending.',
            image: '/assets/logo/trust/score.png'
        },
    ]

    return (
            <div className={'flex montserrat overflow-hidden flex-row bg-white h-auto md:h-full min-h-[100vh]'}>
                <div className={'ml-20 border-l border-gray-300 h-auto md:h-full'}/>
                <div className={'border-r border-gray-300 px-5 hidden md:inline-block'} onClick={() => setShow(!show)}>
                    <div className={'mt-16 w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'}>
                        <LeftOutlined className={'text-xl mb-1 font-bold'}/>
                    </div>
                </div>

                <div className={'w-full h-full'}>
                    <div className={'w-full h-auto mt-4 md:mt-16 px-2 lg:px-5'}>
                        <div>
                            <div className={'inline-block md:hidden mr-4 mb-4'} onClick={() => setShow(!show)}>
                                <div className={'w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'}>
                                    <LeftOutlined className={'text-xl mb-1 font-bold'}/>
                                </div>
                            </div>
                            <p className={'inline text-3xl mb-5 pt-2 leading-none font-bold text-[#04204D]'}>Products.</p>
                            <p className={'text-sm pt-2 pb-6 text-[#4F6382]'}>
                                Learn how the digitalize biometric of human <br/> unique pattern becomes the lead of security alignment.
                            </p>
                        </div>
                    </div>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-12'}>
                        {products.map((data, index) => {
                            return (
                                <div key={data.key} className={`w-full h-auto md:h-36 lg:h-52 border border-l-0 ${index >= 3 ? null : 'border-b-0'} border-gray-300`}>
                                    <div className={'relative h-full flex flex-col justify-center items-center pl-2 lg:pl-8'}>
                                        <p className={'md:text-base lg:text-xl text-[#1D365F] leading-tight w-[70%] mt-4 md:mt-0 md:mb-2 lg:mb-4 z-10'}>Trust<span className="text-orange">{data.title}</span></p>
                                        <p className={'md:text-[10px] lg:text-xs text-[#818FA6] w-[70%] mb-5 md:mb-0 z-10'}>{data.description}</p>
                                        <div className={'absolute -bottom-2 justify-start items-start w-full left-0 z-0'}>
                                            <Image preview={false} className="w-[40px] opacity-80 lg:w-[70px]" src={data.image}/>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
    )
})
