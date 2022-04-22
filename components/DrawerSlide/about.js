import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {Button, Drawer, Image} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export const About =  observer(({show, setShow}) => {
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
        {
            key: 'connect',
            title: 'Connect',
            description: t('Desc trust connect'),
            image: '/assets/logo/trust/connect.png'
        },
        {
            key: 'score',
            title: 'Score',
            description: t('Desc trust score'),
            image: '/assets/logo/trust/score.png'
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
                            <p className={'inline text-3xl mb-5 pt-2 leading-none font-bold text-[#04204D]'}>{t('About Us')}</p>
                        </div>
                    </div>
                    <div className={'w-full pl-4 pr-8'}>
                        <p className='text-lg xl:text-xl mt-8'>
                            The Only Open Finance with Biometrics Identity Verification Solution
                        </p>
                        <p className='text-gray-400 mt-6 text-base xl:text-lg text-justify'>
                            We are the only company that provides the most advanced identity verification against Indonesian national database as the official Dukcapil partner in Platform Bersama that combine it with open finance facilitator for a seamless, simpler, and most secure financial data integration
                        </p>
                        <div className={'grid grid-cols-2 lg:grid-cols-4'} style={{justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                            <Image preview={false} className="w-30 xshort:w-28 company-logo logo-image-gray" src={'/assets/keminfo.png'}/>
                            <Image preview={false} className="w-16 xshort:w-14 company-logo logo-image-gray" src={'/assets/dukcapil.svg'}/>
                            <Image preview={false} className="w-20 xshort:w-18 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/aftech.png'}/>
                            <Image preview={false} className="w-16 xshort:w-14 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/iso.png'}/>
                        </div>
                    </div>
                </div>
            </div>
    )
})
