import React, {useState} from 'react';
import {Image, Popover, Steps, Button, Row, Col, Tooltip} from "antd";
import Carousel from 'react-material-ui-carousel';

export const Product = () => {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;

    const data = [
        {
            name: 'Live',
            icon: '/assets/logo/trust/live.png',
        },
        {
            name: 'Scan',
            icon: '/assets/logo/trust/scan.png',
        },
        {
            name: 'Verify',
            icon: '/assets/logo/trust/verify.png',
        },
        {
            name: 'Connect',
            icon: '/assets/logo/trust/connect.png',
        },
        {
            name: 'Score',
            icon: '/assets/logo/trust/score.png',
        },
        {
            name: 'Vision',
            icon: '/assets/logo/trust/vision.png',
        },
    ]

    let items = [
        {
            name: 'Trust',
            name2: 'Live',
            icon: '/assets/phone-face.png',
            desc: 'Increase assurance levels for every verification, our liveness detection determines whether the presented face is a real person and not a spoof. Preventing fraud in your onboarding process and within your product.'
        },
        {
            name: 'Trust',
            name2: 'Scan',
            icon: '/assets/phone-face3.png',
            desc: 'TrustScan is a powerful AI-powered machine learning trained to scan and extract data from ID’s and auto-fill your customer data - making onboarding process seamless and no hassle.'
        },
        {
            name: 'Trust',
            name2: 'Verify',
            icon: '/assets/phone-face2.png',
            desc: 'TrustVerification is the highest compliance to verify identity by comparing the face biometric to Dukcapil database. TrustLink is the official “Platform Bersama” operator'
        },
        {
            name: 'Trust',
            name2: 'Connect',
            icon: '/assets/phone-face.png',
            desc: 'TrustScan is a powerful AI-powered machine learning trained to scan and extract data from ID’s and auto-fill your customer data - making onboarding process seamless and no hassle.'
        },
        {
            name: 'Trust',
            name2: 'Score',
            icon: '/assets/phone-face3.png',
            desc: 'TrustScan is a powerful AI-powered machine learning trained to scan and extract data from ID’s and auto-fill your customer data - making onboarding process seamless and no hassle.'
        },
        {
            name: 'Trust',
            name2: 'Vision',
            icon: '/assets/phone-face3.png',
            desc: 'TrustVision is a powerful AI-powered machine learning trained to scan and extract data from ID’s and auto-fill your customer data - making onboarding process seamless and no hassle.'
        }
    ]

    const Item = ({item}) => {
        return (
            <div className={'flex flex-col md:flex-row w-full h-auto'}>
                <div className={'flex justify-center items-center w-full md:w-3/6 lg:w-2/4 text-center z-10'}>
                    <Image preview={false} className="w-[160px] md:w-[200px] lg:w-[325px]" src={item.icon}/>
                </div>
                <div className={'flex flex-col justify-center mt-4 w-full md:w-3/6 lg:w-2/4 z-10'}>
                    <div>
                        <p className={'text-3xl md:text-4xl lg:text-6xl mb-0 montserrat leading-none font-bold'} style={{color: '#04204D'}}>{item.name}<span style={{color: '#FE6601'}}>{item.name2}</span></p>
                    </div>
                    <div className={'mt-5 md:mt-14'}>
                        <p style={{color: '#04204D'}} className={"w-[95%] md:w-[65%] text-base montserrat"}>
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
                    <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>ONE & FOR ALL</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#161D24] mb-0 montserrat'}>Products</p>
                    <p className={'text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 text-[#161D24] montserrat font-medium'}>End-to-End Services.</p>
                    <p className={'text-sm text-center text-[#4F6382] montserrat'}>
                        We are a leading digital biometric provider in Indonesia, <br/>
                        exclusively focused on comprehensive biometric recognition<br/>
                        products and highly tailored with data analytics platforms.
                    </p>
                </div>
            </div>
            <div className={'relative w-full'}>
                <Steps responsive={false} current={current} className={'mt-6 md:mt-1 w-11/12 h-24 md:h-48'} onChange={(num) => setCurrent(num)}>
                    {data.map((it, index) => (
                        <Step
                            className={'flex justify-center items-center'}
                            key={index}
                            icon={
                                <div className={`flex flex-col justify-content items-center ${current === index ? 'mt-2 md:mt-2 lg:mt-4' : 'mt-12 md:mt-10 lg:mt-12'}`}>
                                    <div className={`rounded-full border-4 ${current === index ? 'w-[40px] md:w-[71px] lg:w-32 h-[40px] md:h-[71px] lg:h-32 mb-10 border-[#FE6601]' : 'w-8 md:w-14 lg:w-24 h-8 md:h-14 lg:h-24 border-[#FE944D]'} mb-2 bg-white z-10 flex justify-center items-center`}
                                         style={{transition: 'width 200ms, height 200ms', boxShadow: current === index ? '0 0 20px 1px #FE6601' : null}}
                                    >
                                        <Tooltip title={'Trust' +it.name}>
                                            <Image preview={false} src={it.icon} className={`${current === index ? 'w-[16px] md:w-[30px] lg:w-[50px]' :'w-[12px] md:w-[20px] lg:w-[50px]'}`}/>
                                        </Tooltip>
                                    </div>
                                    <p className={`w-24 md:w-40 text-[10px] md:text-sm lg:text-lg montserrat text-[#B4BCC9] ${current === index ? 'hidden' : null}`}><span className={'font-bold hidden md:contents'}>Trust</span>{it.name}</p>
                                </div>
                            }
                        />
                    ))}
                    <hr className={'absolute right-0 top-[48%] w-[90%] h-1 bg-[#FE6601] z-0'}/>
                </Steps>
            </div>

            <div className={'mt-4 md:mt-28 z-10'}>
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
                        className: `mr-5 ml-5 z-10 ${!current ? 'arrow-prev-product' : current == 4 ? 'arrow-next-product' : null}`
                    }}
                >
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
            </div>
            <div className="relative h-[10vh] sm:h-quarter xl:h-half" />
            <div className={'absolute w-full lg:w-10/12 xl:w-8/12 h-1/3 sm:h-auto -bottom-10 right-0 usecase-img z-0'}>
                <Image preview={false} src={'/assets/images/accent-home-sectionProduct-2-edit.png'} className={'h-full w-full opacity-10'}/>
            </div>
        </div>
    )
}
