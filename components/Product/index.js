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
    const xs = useMediaQuery({query: '(min-width: 425px)'})

    const shadow = xl ? 20 : lg ? 10 : md ? 15: sm ? 15 : 5
    const step = xs ? 'w-10 h-10' : 'w-14 h-14'
    const stepActive = xs ? 'w-[50px] h-[50px]' : 'w-[65px] h-[65px]'
    const imageSm = xs ? 'w-[16px]' : 'w-[18px]'

    const [isSafari, setIsSafari] = useState(false)
    const [isIos, setIsIos] = useState(false)
    useEffect(() => {
        const checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        const checkIos = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);
        const checkIos13 = [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)


        if(checkSafari){
            setIsSafari(true)
        }
        if(checkIos || checkIos13){
            setIsIos(true)
        }

    },[])

    const data = [
        {
            name: 'Verify',
            icon: '/assets/images/logo-trust-verify.png',
            alt :'product'
        },
        {
            name: 'Scan',
            icon: '/assets/images/logo-trust-scan.png',
            alt :'product'
        },
        {
            name: 'Live',
            icon: '/assets/images/logo-trust-live.png',
            alt :'product'
        },
        // {
        //     name: 'Connect',
        //     icon: '/assets/images/logo-trust-connect.png',
        // },
        {
            name: 'Vision',
            icon: '/assets/images/logo-trust-vision.png',
            alt :'product'
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
            src: isSafari || isIos ? '/assets/product/bg-white/TrustVerify.mp4' : '/assets/product/TrustVerify.webm',
            subhead: t('trust_verify_title'),
            desc: t('trust_verify_subtitle'),
            size: md ? '100%' : xs ? '50%' : '80%',
            width_subhead: 'w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[32rem]',
            width_desc: 'w-[19.5rem] md:w-[23rem] lg:w-[25rem] xl:w-[37.5rem] 2xl:w-[45rem] tracking-tighter md:tracking-normal lg:tracking-tight 2xl:tracking-tighter'
        },
        {
            name: 'Trust',
            name2: 'Scan',
            coming_soon : '',
            src: isSafari || isIos ? '/assets/product/bg-white/TrustScan.mp4' : '/assets/product/revision-13-05/TrustScan.webm',
            subhead: t('trust_scan_title'),
            desc: t('trust_scan_subtitle'),
            size: md ? '100%' : xs ? '50%' : '80%',
            width_subhead: 'w-[17rem] md:w-[15rem] lg:w-[18rem] xl:w-auto',
            width_desc: 'w-[19rem] md:w-[20.5rem] lg:w-[30.5rem] xl:w-[39rem] 2xl:w-[45rem] tracking-tighter md:tracking-normal lg:tracking-tighter'
        },

        {
            name: 'Trust',
            name2: 'Live',
            coming_soon : '',
            src: isSafari || isIos ? '/assets/product/bg-white/TrustLive-short.mp4' : '/assets/product/revision-13-05/TrustLive-short.webm',
            subhead: t('trust_live_title'),
            desc: t('trust_live_subtitle'),
            size: md ? '100%' : xs ? '50%' : '80%',
            width_subhead: 'w-[18rem] md:w-[20rem] lg:w-[28rem] 2xl:w-[40rem]',
            width_desc: 'w-[19.5rem] md:w-[25.5rem] lg:w-[30rem] xl:w-[37.5rem] 2xl:w-[47.5rem] tracking-tighter lg:tracking-tight'
        },
        // {
        //     name: 'Trust',
        //     name2: 'Connect',
        //     coming_soon : '',
        //     src: isSafari ? '/assets/product/bg-white/TrustConnect.webm' : '/assets/product/revision-13-05/TrustConnect.webm',
        //     subhead: t('Subhead trust connect'),
        //     desc: t('Desc TrustConnect'),
        //     size: '100%'
        // },
        {
            name: 'Trust',
            name2: 'Vision',
            src: isSafari || isIos ? '/assets/product/bg-white/TrustVision.mp4' : '/assets/product/revision-13-05/TrustVision.webm',
            subhead: t('trust_vision_title'),
            desc: t('trust_vision_subtitle'),
            size: md ? '90%' : xs ? '50%' : '80%',
            width_subhead: 'w-[17.8rem] md:w-[20rem] lg:w-[22rem] xl:w-[38rem] 2xl:w-[50rem]',
            width_desc: 'w-[19rem] md:w-[27rem] lg:w-[34rem] xl:w-[42rem] 2xl:w-[45rem] tracking-tighter md:tracking-tight'
        },
        // {
        //     name: 'Trust',
        //     name2: 'Score',
        //     src: isSafari ? '/assets/product/bg-white/TrustScore.mp4' : '/assets/product/revision-13-05/TrustScore.webm',
        //     coming_soon : true,
        //     subhead: t('Subhead trust score'),
        //     desc: t('Desc TrustScore'),
        //     size: '90%'
        // },
    ]

    const Item = ({item}) => {
        return (
            // <div className={'flex flex-col md:flex-row w-full min-h-[43rem] md:h-[28rem] lg:h-[38rem] xl:h-[42rem] bg-green-100'}>
            <div className={'flex flex-col md:flex-row w-full min-h-[50vh] md:h-[30rem] xl:h-[28rem] mt-0 px-0 md:px-6 xl:px-0'}>
                <div className={`flex justify-center items-center w-screen md:w-3/6 lg:w-2/4 text-center ${isSafari || isIos ? 'z-30' : 'z-10'}`}>
                    <ReactPlayer
                        className=''
                        url={item.src}
                        width={item.size}
                        height={item.size}
                        loop={true}
                        muted
                        playing={true}
                        playsinline
                    />
                </div>
                <div className={'flex flex-col justify-center items-center md:items-start w-full md:w-3/6 lg:w-2/4 z-40 mt-0 px-6 md:px-0'}>
                    <div>
                        <p className={'text-center md:text-left text-3xl md:text-4xl lg:text-4xl mb-0 montserrat text-gray-400 font-bold leading-none mt-4'} style={{ color: item.coming_soon ? '#cbd5e0' : '#04204D' }}>{item.name}<span className={`${item.coming_soon ?  'text-gray-400' : 'text-[#FF6703]' } font-medium`}>{item.name2} </span><span style={{ color: '#fe6601', position:'absolute'}} className={'text-lg md:text-xl'}>{item.coming_soon ? 'Coming Soon' : ''}</span></p>
                    </div>
                    <p className={`${item.width_subhead} text-lg md:text-lg lg:text-xl mb-0 montserrat leading-tight md:leading-none font-bold mt-5 text-center md:text-left`} style={{color: '#04204D'}}>{item.subhead}</p>
                    <div className={'mt-5 md:mt-5 ' + item.width_desc}>
                        <p style={{color: '#04204D', textAlign: "justify"}} className={"w-full md:w-[80%] text-sm md:text-base lg:text-lg montserrat mb-3"}>
                            {item.desc}
                        </p>
                        <a
                            type="primary"
                            className={'rounded-lg  mt-2 flex justify-center items-center bg-[#FF6703] text-white text-base sm:text-lg h-12 md:w-1/2 lg:w-2/5 xl:w-3/12 montserrat tracking-normal'}
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
        <div className={'relative h-auto w-full section-most-top'} ref={productRef} id={'product-section'}>
            <div className={'h-full w-full absolute top-24 -left-48 md:-left-60 about-img'}>
                <Image preview={false} className="w-full md:w-[70%] lg:w-4/5 xl:w-[90%] 2xl:w-full h-auto " alt={'dots-bg'} src={'/assets/images/accent-master-connecting-dots-1.png'}/>
            </div>
            <div className={'flex w-full justify-center'} ref={productRef}>
                <div className={'flex flex-row items-center z-10 mb-2'}>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>{t('One and For All')}</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#04204D] mb-0 montserrat'}>{t('Products')}</p>
                    {/*<div className={'text-base lg:text-lg leading-relaxed text-center text-[#4F6382] montserrat w-full flex justify-center items-center'}>*/}
                    <div className={'text-base lg:text-lg leading-relaxed text-center text-[#04204D] montserrat w-full flex justify-center items-center'}>
                        <p className='z-10 sm:w-4/6 md:w-[31rem] lg:w-[34rem] mb-0'>{t('We are a leading digital biometric')}</p>
                    </div>
                </div>
            </div>
            <div >
                <div className={'z-40 relative w-screen lg:w-auto overflow-visible'}>
                    <Steps responsive={false} current={current} className={'mt-6 md:mt-1 w-full h-20 sm:h-36 -ml-4 lg:ml-0 mr-8'} onChange={(num) => onChangeProduct(num)}>
                        {data.map((it, index) => (
                            <Step
                                className={'flex justify-center items-center overflow-visible'}
                                key={index}
                                icon={
                                    <div className={`flex flex-col justify-center items-start sm:items-center ${current === index ? 'mt-2 lg:mt-0' : 'mt-12 sm:mt-10 lg:mt-12'}`}>
                                        <div className={`p-0 ${index === (data.length - 1) ? `sm:ml-[16px]` : ``} rounded-full border-4 ${current === index ? `w-14 h-14 sm:w-[4.75rem] lg:w-24 sm:h-[4.75rem] lg:h-24 border-[#FF6703]` : `w-12 h-12 sm:w-16 lg:w-20 sm:h-16 lg:h-20 border-[#FF6703]`} mb-2 bg-white z-10 flex justify-center items-center`}
                                             style={{transition: 'width 200ms, height 200ms', boxShadow: current === index ? `0 0 ${shadow}px 1px #FE6601` : null}}
                                        >
                                            <Tooltip title={'Trust' +it.name}>
                                            <Image preview={false} src={it.icon} alt={it.alt} className={`w-[24px] sm:w-[28px] md:w-[28px] lg:w-[35px]`}/>
                                            </Tooltip>
                                        </div>
                                        <p className={`w-10 sm:w-20 md:w-40 text-[10px] sm:text-sm lg:text-lg montserrat ${current === index ? 'hidden' : null}`}>
                                            <span className={'font-bold  sm:contents text-[#04204D]'}>Trust</span><span className={'text-[#FF6703]'}>{it.name}</span></p>
                                    </div>
                                }
                            />
                        ))}
                        <hr className={`absolute left-12 md:left-16 lg:left-[10%] top-[48%] w-[78%] h-1 bg-[#FE6601] z-0`}/>
                    </Steps>
                </div>

                <div className={'z-10'}>
                    <Carousel
                        navButtonsAlwaysVisible={true}
                        animation={'slide'}
                        next={num => onChangeProduct(num)}
                        prev={num => onChangeProduct(num)}
                        index={current}
                        autoPlay={false}
                        NextIcon={<Image preview={false} alt={"next_logo"} className="w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]" src={'/assets/arrow-right.svg'}/>}
                        PrevIcon={<Image preview={false}  alt={"prev_logo"}  className="w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]" src={'/assets/arrow-left.svg'}/>}
                        indicators={false}
                        navButtonsProps={{
                            style: {
                                backgroundColor: '#000000',
                                opacity: 0.15,
                            }
                        }}
                        navButtonsWrapperProps={{
                            className: `sm:mr-5 md:mr-0 xl:mr-5 sm:ml-5 md:ml-0 xl:ml-5 ${isSafari || isIos ? 'z-40' : 'z-40'} ${!current ? 'arrow-prev-product' : current === (items.length - 1) ? 'arrow-next-product' : null}`
                        }}
                        className={''}
                    >
                        {
                            items.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel>
                </div>
            </div>

            <div className="relative h-[3vh] sm:h-[10vh]" />
            <div className={`absolute w-full lg:w-10/12 xl:w-8/12 h-1/3 sm:h-auto -bottom-10 right-0 usecase-img ${isSafari || isIos ? 'z-30' : 'z-0'}`}>
              <Image preview={false} src={'/assets/images/accent-home-sectionProduct-2-edit.png'} alt={"bg_product_opacity"} className={'h-full w-full opacity-10'}/>
            </div>
        </div>
    )
}
