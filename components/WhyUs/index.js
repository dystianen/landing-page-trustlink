import { CloseOutlined } from '@ant-design/icons';
import {Image, Avatar, Divider, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography;

const WhyUsPage = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    const dataWhyUs = [
        {
            title: t("why_us_1_title"),
            description: t("why_us_1_desc"),
            image_url: "/assets/why_us/API_laptop.png"
        },{
            title: t("why_us_2_title"),
            description: t("why_us_2_desc"),
            image_url: "/assets/why_us/fingerprint_laptop.png"
        },{
            title: t("why_us_3_title"),
            description: t("why_us_3_desc"),
            image_url: "/assets/why_us/fingerprint_laptop.png"
        },{
            title: t("why_us_4_title"),
            description: t("why_us_4_desc"),
            image_url: "/assets/why_us/profile_laptop.png"
        },
    ]

    return (
        <div className='relative md:pl-20 pl-12 h-auto mt-30 mb-30 overflow-x-none flex flex-col'>
            <div className={"absolute -top-52 lg:-top-30 left-[75%] w-[50rem] lg:w-[67rem] h-auto"}>
                <Image alt={"why_bg"} src={"/assets/why_us/bg1.png"} preview={false}/>
            </div>
            <div>
                <div className={'flex flex-row items-center mb-2'}>
                    <div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>
                    <p className={'text-xs lg:text-base tracking-wide mb-0 text-center text-[#818FA6] tracking-widest montserrat'}>{t('Why TrustLink')}</p>
                </div>
                <div>
                    <p className={"text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl w-[21rem] sm:w-[32rem] lg:w-[42rem] xl:w-[52rem] 2xl:w-[62rem] sm:mb-10 montserrat font-bold sm:font-semibold text-[#1D365F]"}>We Create The Best Result-Oriented Offerings</p>
                </div>
            </div>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:pl-10 justify-items-center items-center"}>
                {dataWhyUs.map((item, index) =>(
                    <div key={index} className={"box-hover py-5 px-[1.875rem] flex flex-col text-[#1D365F] items-center max-w-[19rem] lg:max-w-[30rem] xl:max-w-[40rem] mb-10 sm:mb-0"}>
                        <Image alt={item.title} src={item.image_url} preview={false} />
                        <Divider />
                        <div>
                            <p className={'montserrat text-lg md:text-xl lg:text-2xl font-bold text-center mb-1'}>{item.title}</p>
                            <p className={'montserrat text-sm md:text-base lg:text-lg text-center'}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUsPage;
