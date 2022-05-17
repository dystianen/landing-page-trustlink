import {Button, Drawer, Image} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import { useTranslation } from "next-i18next";

export const Product = observer(({show, setShow}) => {
    const { t } = useTranslation();

    const products = [
        {
            key: 'verify',
            title: 'Verify',
            description: t('Desc trust verify'),
            image: '/assets/logo/trust/verify.png'
        },
        {
            key: 'scan',
            title: 'Scan',
            description: t('Desc trust scan'),
            image: '/assets/logo/trust/scan.png'
        },
        {
            key: 'live',
            title: 'Live',
            description: t('Desc trust live'),
            image: '/assets/logo/trust/live.png'
        },
        {
            key: 'vision',
            title: 'Vision',
            description: t('Desc trust vision'),
            image: '/assets/logo/trust/vision.png'
        },
    ]

    return (
            <div className={'flex montserrat overflow-hidden flex-row bg-white h-auto md:h-full min-h-[100vh]'}>
                <div className={'ml-20 border-l border-gray-300 h-auto md:h-full'}/>
                <div className={'border-r border-gray-300 px-5 hidden md:inline-block'}>
                    <div className={'cursor-pointer mt-16 w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'} onClick={() => setShow(!show)}>
                        <LeftOutlined className={'text-xl mb-1 font-bold'}/>
                    </div>
                </div>

                <div className={'w-full h-full'}>
                    <div className={'w-full h-auto mt-4 md:mt-16 px-2 lg:px-5'}>
                        <div>
                            <div className={'inline-block md:hidden mr-4 mb-4'}>
                                <div className={'cursor-pointer w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'} onClick={() => setShow(!show)}>
                                    <LeftOutlined className={'text-xl mb-1 font-bold'}/>
                                </div>
                            </div>
                            <p className={'inline text-3xl mb-5 pt-2 leading-none font-bold text-[#04204D]'}>{t('Products')}</p>
                            {/*<p className={'text-sm lg:w-3/4 pt-2 pb-6 text-[#4F6382]'}>*/}
                            <p className={'text-sm lg:w-3/4 pt-2 pb-6 text-[#04204D]'}>
                                {t('Learn How To')}
                                {/* Learn how the digitalize biometric of human <br/> unique pattern becomes the lead of security alignment. */}
                            </p>
                        </div>
                    </div>
                    <div className={'h-auto custom-height'}>
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 montserrat`}>
                            {products.map((data, index) => {
                                return (
                                    <div key={data.key} className={`w-full h-32 lg:h-52 border border-l-0 ${index >= 2 ? null : 'border-b-0'} border-gray-300 flex flex-row`}>
                                        <div className={'z-0 flex justify-end items-center'}>
                                            <Image preview={false} className="w-[6rem] sm:w-[3rem] md:w-[5rem] lg:w-32 xl:w-20" src={data.image}/>
                                        </div>
                                        <div className={'relative h-full flex flex-col justify-center px-2 lg:px-2 xl:px-4'}>
                                            <p className={'md:text-base lg:text-xl text-[#04204D] leading-tight mt-4 md:mt-0 md:mb-2 z-10'}>Trust<span className="text-orange">{data.title}</span></p>
                                            <p className={'montserrat md:text-xs text-[#818FA6] xl:w-60 mb-5 md:mb-0 z-10 text-justify'}>{data.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
    )
})
