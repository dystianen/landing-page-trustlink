import React, {useState} from 'react';
import {Image, Popover, Steps, Button, Row, Col, Tooltip} from "antd";
import Carousel from 'react-material-ui-carousel';
import {useMediaQuery} from "react-responsive";
import { useTranslation } from 'next-i18next';
import ReactPlayer from 'react-player'

export const Product = () => {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;

    const { t } = useTranslation();
    const xl = useMediaQuery({query: '(min-width: 1440px)'})
    const lg = useMediaQuery({query: '(min-width: 1024px)'})
    const md = useMediaQuery({query: '(min-width: 768px)'})
    const sm = useMediaQuery({query: '(min-width: 576px)'})
    const xs = useMediaQuery({query: '(max-width: 476px)'})

    const shadow = xl ? 20 : lg ? 10 : md ? 15: sm ? 15 : 5
    const step = xs ? 'w-10 h-10' : 'w-14 h-14'
    const stepActive = xs ? 'w-[50px] h-[50px]' : 'w-[65px] h-[65px]'
    const imageSm = xs ? 'w-[16px]' : 'w-[24px]'
    const data = [
        {
            name: 'Live',
            icon: '/assets/images/logo-trust-live.png',
        },
        {
            name: 'Scan',
            icon: '/assets/images/logo-trust-scan.png',
        },
        {
            name: 'Verify',
            icon: '/assets/images/logo-trust-verify.png',
        },
        {
            name: 'Connect',
            icon: '/assets/images/logo-trust-connect.png',
        },
        {
            name: 'Score',
            icon: '/assets/images/logo-trust-score.png',
        },
        {
            name: 'Vision',
            icon: '/assets/images/logo-trust-vision.png',
        },
    ]

    let items = [
        {
            name: 'Trust',
            name2: 'Live',
            src: '/assets/product/TrustLive-short.webm',
            desc: t('Desc TrustLive')
        },
        {
            name: 'Trust',
            name2: 'Scan',
            src: '/assets/product/TrustScan.webm',
            desc: t('Desc TrustScan')
        },
        {
            name: 'Trust',
            name2: 'Verify',
            src: '/assets/product/TrustVerify.webm',
            desc: t('Desc TrustVerification')
        },
        {
            name: 'Trust',
            name2: 'Connect',
            src: '/assets/product/TrustConnect.webm',
            desc: t('Desc TrustLive')
        },
        {
            name: 'Trust',
            name2: 'Score',
            src: '/assets/product/TrustScore.webm',
            desc: t('Desc TrustLive')
        },
        {
            name: 'Trust',
            name2: 'Vision',
            src: '/assets/product/TrustVision.webm',
            desc: t('Desc TrustLive')
        }
    ]

    const Item = ({item}) => {
        return (
            <div className={'flex flex-col md:flex-row w-full h-auto md:min-h-[28rem] lg:min-h-[38rem] xl:min-h-[42rem]'}>
                <div className={'flex justify-center items-center w-full md:w-3/6 lg:w-2/4 text-center z-10'}>
                    <ReactPlayer
                        className=''
                        url={item.src}
                        width='100%'
                        height='100%'
                        loop={true}
                        muted
                        playing={true}
                    />
                </div>
                <div className={'flex flex-col justify-center mt-4 w-full md:w-3/6 lg:w-2/4 z-10 pl-12 md:pl-0'}>
                    <div>
                        <p className={'text-3xl md:text-4xl lg:text-6xl mb-0 montserrat leading-none font-bold'} style={{color: '#04204D'}}>{item.name}<span className='text-orange font-medium'>{item.name2}</span></p>
                    </div>
                    <div className={'mt-5 md:mt-14'}>
                        <p style={{color: '#04204D'}} className={"w-[95%] md:w-[65%] text-base lg:text-lg montserrat"}>
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={'relative h-auto w-full'}>
            <div className={'h-1/2 lg:h-auto absolute top-24 -left-60 about-img'}>
                <Image preview={false} className="h-full w-auto " src={'/assets/images/accent-master-connecting-dots-1.png'}/>
            </div>
            <div className={'flex w-full justify-center'}>
                <div className={'flex flex-row items-center z-10 mb-2'}>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                    <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>{t('One and For All')}</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#161D24] mb-0 montserrat'}>{t('Products')}</p>
                    <p className={'text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 text-[#161D24] montserrat font-medium'}>{t('End to End Services')}</p>
                    <div className={'text-sm text-center text-[#4F6382] montserrat w-full flex justify-center items-center'}>
                        <p className='sm:w-4/6 lg:w-[45%] xl:w-[35%]'>{t('We are a leading digital biometric')}</p>
                    </div>
                </div>
            </div>
            <div className={'relative w-screen lg:w-auto'}>
                <Steps responsive={false} current={current} className={'mt-6 md:mt-1 w-full h-32 sm:h-48 -ml-12 md:-ml-20 lg:ml-0 mr-8'} onChange={(num) => setCurrent(num)}>
                    {data.map((it, index) => (
                        <Step
                            className={'flex justify-center items-center'}
                            key={index}
                            icon={
                                <div className={`flex flex-col justify-content items-center ${current === index ? 'mt-2 lg:mt-0' : 'mt-12 sm:mt-10 lg:mt-12'}`}>
                                    <div className={`rounded-full border-4 ${current === index ? `${stepActive} sm:w-[78px] md:w-[95px] lg:w-32 sm:h-[78px] md:h-[95px] lg:h-32 border-[#FE6601]` : `${step} sm:w-16 md:w-20 lg:w-24 sm:h-16 md:h-20 lg:h-24 border-[#FE944D]`} mb-2 bg-white z-10 flex justify-center items-center`}
                                         style={{transition: 'width 200ms, height 200ms', boxShadow: current === index ? `0 0 ${shadow}px 1px #FE6601` : null}}
                                    >
                                        <Tooltip title={'Trust' +it.name}>
                                            <Image preview={false} src={it.icon} className={`${imageSm} sm:w-[28px] md:w-[35px] lg:w-[50px]`}/>
                                        </Tooltip>
                                    </div>
                                    <p className={`w-24 md:w-40 text-[10px] sm:text-sm lg:text-lg montserrat text-[#B4BCC9] ${current === index ? 'hidden' : null}`}><span className={'font-bold hidden sm:contents'}>Trust</span>{it.name}</p>
                                </div>
                            }
                        />
                    ))}
                    <hr className={`absolute right-0 top-[48%] ${xs ? 'w-[105%]' : 'w-full' } lg:w-[90%] h-1 bg-[#FE6601] z-0`}/>
                </Steps>
            </div>

            <div className={'mt-4 md:mt-8 z-10'}>
                <Carousel
                    navButtonsAlwaysVisible={true}
                    animation={'slide'}
                    next={num => setCurrent(num)}
                    prev={num => setCurrent(num)}
                    index={current}
                    autoPlay={false}
                    NextIcon={<Image preview={false} className="w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]" src={'/assets/arrow-right.svg'}/>}
                    PrevIcon={<Image preview={false} className="w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]" src={'/assets/arrow-left.svg'}/>}
                    indicators={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: '#000000',
                            opacity: 0.15,
                        }
                    }}
                    navButtonsWrapperProps={{
                        className: `mr-5 ml-5 z-10 ${!current ? 'arrow-prev-product' : current == 5 ? 'arrow-next-product' : null}`
                    }}
                    className={'-ml-12 md:ml-0'}
                >
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
            </div>
            <div className="relative h-[10vh]" />
            <div className={'absolute w-full lg:w-10/12 xl:w-8/12 h-1/3 sm:h-auto -bottom-10 right-0 usecase-img z-0'}>
                <Image preview={false} src={'/assets/images/accent-home-sectionProduct-2-edit.png'} className={'h-full w-full opacity-10'}/>
            </div>
        </div>
    )
}
