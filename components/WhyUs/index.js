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
            image_url: "/assets/why_us/Fast.png"
        },{
            title: t("why_us_2_title"),
            description: t("why_us_2_desc"),
            image_url: "/assets/why_us/Proven.png"
        },{
            title: t("why_us_3_title"),
            description: t("why_us_3_desc"),
            image_url: "/assets/why_us/Accurate.png"
        },{
            title: t("why_us_4_title"),
            description: t("why_us_4_desc"),
            image_url: "/assets/why_us/Strongest.png"
        },
    ]

    return (
        <div className='relative lg:pl-20 h-auto mt-24 md:mt-0 lg:mt-10 xl:mt-16 mb-30 overflow-x-none flex flex-col'>
            <div className={"absolute -top-16 md:-top-12 lg:-top-52 lg:-top-30 left-[75%] w-[20rem] md:w-[30rem] lg:w-[50rem] xl:w-[67rem] h-auto"}>
                <Image alt={"why_bg"} src={"/assets/why_us/bg1.png"} preview={false}/>
            </div>
            <div className={'pl-4 sm:pl-12'}>
                <div className={'flex flex-row items-center mb-2'}>
                    <div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>
                    <p className={'text-xs lg:text-base tracking-wide mb-0 text-center text-[#818FA6] tracking-widest montserrat'}>{t('Why TrustLink')}</p>
                </div>
                <div>
                    <p className={"text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl w-full sm:w-[65vw] whitespace-pre-line sm:mb-10 montserrat font-bold sm:font-semibold text-[#04204D]"}>We Create The Best{'\n'}Result-Oriented Offerings</p>
                </div>
            </div>
            <div className={"flex flex-col md:grid md:grid-cols-2 gap-4 lg:pl-10 justify-items-center items-center"}>
                {dataWhyUs.map((item, index) =>(
                    <div key={index} className={"box-hover py-2 md:py-5 px-[1.875rem] flex flex-col text-[#1D365F] lg:h-[40vh] xl:h-[35vh] items-center max-w-[19rem] lg:max-w-[30rem] xl:max-w-[40rem]"}>
                        <Image alt={item.title} width={65} src={item.image_url} preview={false} />
                        {/*<Divider />*/}
                        <div className={'mt-5'}>
                            <p className={'montserrat text-lg md:text-lg lg:text-xl font-bold text-center mb-1'}>{item.title}</p>
                            <p style={{textAlignLast: "center"}} className={'montserrat text-justify text-sm md:text-sm lg:text-base text-center lg:tracking-tight'}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUsPage;
