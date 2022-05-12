import React, {useEffect, useState} from 'react';
import {Image, Popover, Steps, Button, Row, Col, Tooltip} from "antd";
import Carousel from 'react-material-ui-carousel';
import {useMediaQuery} from "react-responsive";
import { useTranslation } from 'next-i18next';
import ReactPlayer from 'react-player'

const emptyFunction = () => {}

export const Product = ({onClickContact=emptyFunction, productRef, indexProduct, setIndexProduct=emptyFunction}) => {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;

    useEffect(() => {
        setCurrent(indexProduct)
    }, [indexProduct])

    const { t } = useTranslation();
    const xl = useMediaQuery({query: '(min-width: 1440px)'})
    const lg = useMediaQuery({query: '(min-width: 1024px)'})
    const md = useMediaQuery({query: '(min-width: 768px)'})
    const sm = useMediaQuery({query: '(min-width: 576px)'})
    const xs = useMediaQuery({query: '(max-width: 476px)'})

    const shadow = xl ? 20 : lg ? 10 : md ? 15: sm ? 15 : 5
    const step = xs ? 'w-10 h-10' : 'w-14 h-14'
    const stepActive = xs ? 'w-[50px] h-[50px]' : 'w-[65px] h-[65px]'
    const imageSm = xs ? 'w-[16px]' : 'w-[18px]'

    const [isSafari, setIsSafari] = useState(false)
    useEffect(() => {
        const checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        if(checkSafari){
            setIsSafari(true)
        }
    },[])

    const data = [
        {
            name: 'Verify',
            icon: '/assets/images/logo-trust-verify.png',
        },
        {
            name: 'Scan',
            icon: '/assets/images/logo-trust-scan.png',
        },
        {
            name: 'Live',
            icon: '/assets/images/logo-trust-live.png',
        },
        // {
        //     name: 'Connect',
        //     icon: '/assets/images/logo-trust-connect.png',
        // },
        {
            name: 'Vision',
            icon: '/assets/images/logo-trust-vision.png',
        },
        // {
        //     name: 'Score',
        //     icon: '/assets/images/logo-trust-score.png',
        // }
    ]

    let items = [
        {
            name: 'Trust',
            name2: 'Verify',
            coming_soon : '',
            src: isSafari ? '/assets/product/bg-white/TrustVerify.mp4' : '/assets/product/TrustVerify.webm',
            subhead: t('trust_verify_title'),
            desc: t('trust_verify_subtitle'),
            size: '100%',
            width_subhead: 'lg:w-[25rem] xl:w-[38rem]',
            width_desc: 'lg:w-[33rem] xl:w-[39rem] 2xl:w-[48rem]'
        },
        {
            name: 'Trust',
            name2: 'Scan',
            coming_soon : '',
            src: isSafari ? '/assets/product/bg-white/TrustScan.mp4' : '/assets/product/TrustScan.webm',
            subhead: t('trust_scan_title'),
            desc: t('trust_scan_subtitle'),
            size: '100%',
            width_subhead: 'lg:w-[23rem] xl:w-auto',
            width_desc: 'lg:w-[33rem] xl:w-[41rem] 2xl:w-[50rem]'
        },

        {
            name: 'Trust',
            name2: 'Live',
            coming_soon : '',
            src: isSafari ? '/assets/product/bg-white/TrustLive-short.mp4' : '/assets/product/TrustLive-short.webm',
            subhead: t('trust_live_title'),
            desc: t('trust_live_subtitle'),
            size: '100%',
            width_subhead: 'lg:w-[33rem] xl:w-[39rem]',
            width_desc: 'lg:w-[34rem] xl:w-[41rem] 2xl:w-[50rem]'
        },
        // {
        //     name: 'Trust',
        //     name2: 'Connect',
        //     coming_soon : '',
        //     src: isSafari ? '/assets/product/bg-white/TrustConnect.webm' : '/assets/product/TrustConnect.webm',
        //     subhead: t('Subhead trust connect'),
        //     desc: t('Desc TrustConnect'),
        //     size: '100%'
        // },
        {
            name: 'Trust',
            name2: 'Vision',
            src: isSafari ? '/assets/product/bg-white/TrustVision.mp4' : '/assets/product/TrustVision.webm',
            subhead: t('trust_vision_title'),
            desc: t('trust_vision_subtitle'),
            size: '90%',
            width_subhead: 'lg:w-[25rem] 2xl:w-[50rem]',
            width_desc: 'lg:w-[33rem] xl:w-[39rem] 2xl:w-[50rem]'
        },
        // {
        //     name: 'Trust',
        //     name2: 'Score',
        //     src: isSafari ? '/assets/product/bg-white/TrustScore.mp4' : '/assets/product/TrustScore.webm',
        //     coming_soon : true,
        //     subhead: t('Subhead trust score'),
        //     desc: t('Desc TrustScore'),
        //     size: '90%'
        // },
    ]

    const Item = ({item}) => {
        return (
            <div className={'flex flex-col md:flex-row w-full min-h-[43rem] md:h-[28rem] lg:h-[38rem] xl:h-[42rem]'}>
                <div className={`flex justify-center md:justify-end items-center w-full md:w-3/6 lg:w-2/4 text-center ${isSafari ? 'z-30' : 'z-10'}`}>
                    <ReactPlayer
                        className=''
                        url={item.src}
                        width={item.size}
                        height={item.size}
                        loop={true}
                        muted
                        playing={true}
                    />
                </div>
                <div className={'flex flex-col justify-center mt-4 w-full md:w-3/6 lg:w-2/4 pl-12 md:pl-0 z-40'}>
                    <div>
                        <p className={'text-center md:text-left text-3xl md:text-4xl lg:text-6xl mb-0 montserrat text-gray-400 font-bold leading-none'} style={{ color: item.coming_soon ? '#cbd5e0' : '#04204D' }}>{item.name}<span className={`${item.coming_soon ?  'text-gray-400' : 'text-[#FF6600]' } font-medium`}>{item.name2} </span><span style={{ color: '#fe6601', position:'absolute'}} className={'text-lg md:text-xl'}>{item.coming_soon ? 'Coming Soon' : ''}</span></p>
                    </div>
                    <p className={`w-[95%] md:w-[80%] ${item.width_subhead} text-lg md:text-xl lg:text-2xl mb-0 montserrat leading-none font-bold mt-5 text-center md:text-left`} style={{color: '#04204D'}}>{item.subhead}</p>
                    <div className={'mt-5 md:mt-5 ' + item.width_desc}>
                        <p style={{color: '#04204D'}} className={"w-[95%] md:w-[80%] text-sm md:text-base lg:text-lg montserrat text-justify mb-3"}>
                            {item.desc}
                        </p>
                        <a
                            type="primary"
                            className={'rounded-lg bg-[#04204D] mt-2 flex justify-center items-center bg-[#04204D] text-white text-base sm:text-lg h-12 mr-4 md:mr-0 md:w-1/2 lg:w-3/12 montserrat'}
                            onClick={onClickContact}
                        >
                            {t('Contact Us')}
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    const onChangeProduct = (num) => {
        setCurrent(num)
        setIndexProduct(num)
    }

    return (
        <div className={'relative h-auto w-full section-most-top'} ref={productRef}>
            <div className={'h-[35%] lg:h-auto absolute top-24 -left-60 about-img'}>
                <Image preview={false} className="h-full w-auto " src={'/assets/images/accent-master-connecting-dots-1.png'}/>
            </div>
            <div className={'flex w-full justify-center'} >
                <div className={'flex flex-row items-center z-10 mb-2'}>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>{t('One and For All')}</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#161D24] mb-0 montserrat'}>{t('Products')}</p>
                    {/*<p className={'text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 text-[#161D24] montserrat font-medium'}>{t('End to End Services')}</p>*/}
                    <br />
                    <div className={'text-base lg:text-lg leading-relaxed text-center text-[#4F6382] montserrat w-full flex justify-center items-center'}>
                        <p className='z-10 sm:w-4/6 md:w-[31rem] lg:w-[34rem]'>{t('We are a leading digital biometric')}</p>
                    </div>
                </div>
            </div>
            <div >
                <div className={'relative w-screen lg:w-auto'}>
                    <Steps responsive={false} current={current} className={'mt-6 md:mt-1 w-full h-32 sm:h-48 -ml-12 md:-ml-20 lg:ml-0 mr-8'} onChange={(num) => onChangeProduct(num)}>
                        {data.map((it, index) => (
                            <Step
                                className={'flex justify-center items-center'}
                                key={index}
                                icon={
                                    <div className={`flex flex-col justify-content items-center ${current === index ? 'mt-2 lg:mt-0' : 'mt-12 sm:mt-10 lg:mt-12'}`}>
                                        <div className={`rounded-full border-4 ${current === index ? `w-[55px] h-[55px] sm:w-[78px] md:w-[95px] lg:w-32 sm:h-[78px] md:h-[95px] lg:h-32 border-[#FF6600]` : `w-12 h-12 sm:w-16 md:w-20 lg:w-24 sm:h-16 md:h-20 lg:h-24 border-[#FF6600]`} mb-2 bg-white z-10 flex justify-center items-center`}
                                             style={{transition: 'width 200ms, height 200ms', boxShadow: current === index ? `0 0 ${shadow}px 1px #FE6601` : null}}
                                        >
                                            <Tooltip title={'Trust' +it.name}>
                                                <Image preview={false} src={it.icon} className={`w-[18px] sm:w-[28px] md:w-[35px] lg:w-[50px]`}/>
                                            </Tooltip>
                                        </div>
                                        <p className={`w-24 md:w-40 text-[10px] sm:text-sm lg:text-lg montserrat text-[#B4BCC9] ${current === index ? 'hidden' : null}`}><span className={'font-bold hidden sm:contents'}>Trust</span>{it.name}</p>
                                    </div>
                                }
                            />
                        ))}
                        <hr className={`absolute left-0 lg:left-[10%] top-[48%] w-[78%] h-1 bg-[#FE6601] z-0`}/>
                    </Steps>
                </div>

                <div className={'mt-4 md:mt-8 z-10'}>
                    <Carousel
                        navButtonsAlwaysVisible={true}
                        animation={'slide'}
                        next={num => onChangeProduct(num)}
                        prev={num => onChangeProduct(num)}
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
                            className: `sm:mr-5 sm:ml-5 ${isSafari ? 'z-40' : 'z-40'} ${!current ? 'arrow-prev-product' : current === (items.length - 1) ? 'arrow-next-product' : null}`
                        }}
                        className={'-ml-12 md:ml-0'}
                    >
                        {
                            items.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel>
                </div>
            </div>

            <div className="relative h-[3vh] sm:h-[10vh]" />
            <div className={`absolute w-full lg:w-10/12 xl:w-8/12 h-1/3 sm:h-auto -bottom-10 right-0 usecase-img ${isSafari ? 'z-30' : 'z-0'}`}>
                <Image preview={false} src={'/assets/images/accent-home-sectionProduct-2-edit.png'} className={'h-full w-full opacity-10'}/>
            </div>
        </div>
    )
}
