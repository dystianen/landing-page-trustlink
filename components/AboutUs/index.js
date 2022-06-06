import { CloseOutlined } from '@ant-design/icons';
import {Image, Avatar, Divider, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Trans } from 'react-i18next'
const { Title, Text } = Typography;

const AboutMePage = ({sectionRef}) => {
    const router = useRouter();
    const { t } = useTranslation('common');
    console.log(t, 'isi')
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    return (
        <div className='pl-6 sm:pl-12 md:pl-20 mt-[10vw] h-auto flex flex-col'>
            <div className={'relative w-full h-auto items-start flex justify-center'}>
                <div className={'flex relative w-full lg:w-[95%] xl:w-[90%]'}>
                        <div className={'absolute z-20  left-[83%] top-0'}>
                        <Image preview={false} src={"/assets/about-logo.png"} alt={"about_logo"} className={'h-full w-full'} />
                        </div>
                    <span className={'z-10 about-img w-full'}>
                        <Image preview={false} src={"/assets/about-new.png"} alt={"about_logo"} className={'h-full w-[2500px]'} />
                    </span>
                    <div className={'absolute left-0 bottom-0 h-[50%] w-[21%] z-20'}>
                        <Image src={"/assets/about_us_left.png"} alt={"about_logo"} preview={false} id={'about-me'} className={'h-full'}/>
                    </div>
                    <div className={"absolute left-[-21%] top-[50%] w-[42%] h-full z-0 about-img"}>
                        <Image src={"/assets/about_me.svg"} alt={"about_logo"} preview={false} className={'h-full'}/>
                    </div>
                </div>
            </div>
            <div className={'w-full mt-20 sm:mt-10 mr-10 flex justify-end section-most-top'} ref={sectionRef}>
                <div className={'w-full sm:w-[100vw]'}>
                        <div className={'flex flex-col sm:pl-32 md:pl-12 lg:pl-24 xl:pl-40 2xl:pl-[15%] xl:pt-10 '}>
                            {/* <div className={'flex flex-row items-center mb-2'}>
                                <div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>
                                <p className={'text-sm mb-0 text-center text-[#818FA6] tracking-widest'}>{t('About Us.')}</p>
                            </div> */}
                            {/*<Fade when={transition} duration={1600}>*/}
                            <div >
                            <Title className={"font-bold flex flex-col items-center w-full xl:w-[90%] text-lg md:text-xl lg:text-2xl montserrat"} style={{ whiteSpace: 'pre-line' }}>
                                        <div className={'flex flex-row justify-center items-center z-10  text-center mb-5'}>
                                            <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                                                <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center font-normal'}>{t('About Us.')}</p>
                                            <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                                        </div>
                                        <div className={'-ml-3 sm:-ml-12 md:ml-0 w-[20rem] sm:w-[38rem] md:w-[32rem] lg:w-[52rem] xl:w-auto'}>
                                            <span className={'block leading-snug text-[#04204D] text-base md:text-xl lg:text-2xl text-center'}>{t('about_us_main_text')}</span>
                                        </div>
                                    </Title>
                            </div>
                        </div>
                        <div style={{whiteSpace: 'pre-line'}} className={'flex justify-center'}>
                            {/*<Text className={'text-[#4f6382] w-full md:w-[95%] lg:w-[60rem] xl:w-[90%] 2xl:w-[90%] lg:pl-24 xl:pl-40 2xl:pl-[15%] md:px-4 sm:pr-10 sm:mt-10 xl:mt-6 text-base lg:text-lg sm:flex montserrat font-normal'}>*/}
                            <Text className={'text-[#04204D] w-full md:w-[46rem] lg:w-[58rem] xl:w-[64.8rem] 2xl:w-[80.5rem] sm:pl-10 lg:pl-20 xl:pl-8 2xl:pl-12 md:px-8 lg:px-4 sm:pr-10 sm:mt-10 xl:mt-6 text-base lg:text-lg sm:flex montserrat font-normal tracking-tight md:tracking-tighter lg:tracking-tight xl:tracking-tighter'}>
                                <span className={'block w-[95%] sm:w-3/4 sm:pr-6 lg:pr-10 xl:w-full text-justify'}><Trans i18nKey="about_us_column1" /></span>
                                <br/>
                                {/*<span className={'block w-[95%] sm:w-3/4 sm:pr-10 xl:w-3/5 text-justify'}>{t('About SubHeadline 2')}</span>*/}
                                {/*<br/>*/}
                                <span className={'block w-[95%] sm:w-3/4 xl:w-full text-justify'}><Trans i18nKey="about_us_column2" /></span>
                            </Text>
                        </div>
                        {/*</Fade>*/}
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;
