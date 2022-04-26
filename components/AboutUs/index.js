import { CloseOutlined } from '@ant-design/icons';
import {Image, Avatar, Divider, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography;

const AboutMePage = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    console.log(t, 'isi')
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    return (
        <div className='pl-12 md:pl-20 mt-[10vw] h-auto flex flex-col'>
            <div className={'relative w-full h-auto items-start flex justify-center'}>
                <div className={'flex relative w-full lg:w-[95%] xl:w-[90%]'}>
                    <span className={'z-10 about-img'}>
                        <Image preview={false} src={"/assets/meeting_stock_image.png"} className={'h-full'} />
                    </span>
                    <div className={'absolute left-0 bottom-0 h-[50%] w-[21%] z-20'}>
                        <Image src={"/assets/about_us_left.png"} preview={false} id={'about-me'} className={'h-full'}/>
                    </div>
                    <div className={"absolute left-[-21%] top-[50%] w-[42%] h-full z-0 about-img"}>
                        <Image src={"/assets/about_me.svg"} preview={false} className={'h-full'}/>
                    </div>
                </div>
            </div>
            <div className={'w-full mt-20 sm:mt-10 mr-10 flex justify-end'}>
                <div className={'w-full  sm:w-[100vw]'}>
                        <div className={'flex flex-col sm:pl-32 xl:pl-48 2xl:pl-[17rem] xl:pt-10 '}>
                            <div className={'flex flex-row items-center mb-2'}>
                                <div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>
                                <p className={'text-sm mb-0 text-center text-[#818FA6] tracking-widest'}>{t('About Us')}</p>
                            </div>
                            {/*<Fade when={transition} duration={1600}>*/}
                            <div>
                                <Title className={"font-bold text-xl md:text-2xl lg:text-[30px] montserrat"}>
                                        <span className={'block leading-snug w-full md:w-[26rem] lg:w-[32rem]'}>{t('About Headline')}</span>
                                    </Title>
                            </div>
                        </div>
                        <div>
                            <Text className={'text-[#4f6382] lg:pl-32 xl:pl-48 2xl:pl-64 lg:pr-10 2xl:pr-32 sm:mt-10 xl:mt-6 text-[18px] sm:flex montserrat font-normal'}>
                                <span className={'block w-[90%] sm:w-3/4 sm:pr-10 xl:w-3/5 text-justify'}>{t('About SubHeadline 1')}</span>
                                <br/>
                                <span className={'block w-[90%] sm:w-3/4 sm:pr-10 xl:w-3/5 text-justify'}>{t('About SubHeadline 2')}</span>
                                <br/>
                                <span className={'block w-[90%] sm:w-3/4 xl:w-3/5 text-justify'}>{t('About SubHeadline 3')}</span>
                            </Text>
                        </div>
                        {/*</Fade>*/}
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;
