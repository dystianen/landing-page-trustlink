import React, {useState} from 'react';
import {Image, Popover, Steps, Button, Row, Col} from "antd";
import Carousel from 'react-material-ui-carousel';

export const Product = () => {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;

    const data = [
        {
            name: 'Live',
            icon: '/assets/logo/trust-live/match.png',
        },
        {
            name: 'Scan',
            icon: '/assets/logo/trust-scan/scan.png',
        },
        {
            name: 'Verify',
            icon: '/assets/logo/trust-verify/verification.png',
        },
        {
            name: 'Connect',
            icon: '/assets/logo/trust-connect/icon-without-text.png',
        },
        {
            name: 'Score',
            icon: '/assets/logo/trust-score/score.png',
        }
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
        }
    ]

    const Item = ({item}) => {
        return (
            <div className={'flex w-full h-auto'}>
                <div className={'flex justify-center items-center w-2/4 text-center'}>
                    <Image preview={false} className="w-[325px] ml-24 justify-end items-end" src={item.icon}/>
                </div>
                <div className={'flex flex-col justify-center w-2/4'}>
                    <div>
                        <p className={'text-6xl mb-0 montserrat leading-none font-bold'} style={{color: '#04204D'}}>{item.name}<span style={{color: '#FE6601'}}>{item.name2}</span></p>
                    </div>
                    <div className={'mt-14'}>
                        <p style={{color: '#04204D'}} className={"w-[65%] text-base montserrat"}>
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={'flex w-full justify-center'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'w-8 h-px'} style={{backgroundColor: 'rgba(129, 143, 166, 0.5)'}}/>
                    <p className={'text-sm mx-6'} style={{color: '#818FA6'}}>
                        ONE & FOR ALL
                    </p>
                    <div className={'w-8 h-px'} style={{backgroundColor: 'rgba(129, 143, 166, 0.5)'}}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p style={{color: '#161D24'}} className={'text-7xl font-bold text-center mb-0'}>
                        Products
                    </p>
                    <p className={'text-5xl text-center mt-2'} style={{color: '#161D24'}}>
                        End-to-End Services.
                    </p>
                    <p className={'text-center'} style={{color: '#4F6382'}}>
                        We are a leading digital biometric provider in Indonesia, <br/>
                        exclusively focused on comprehensive biometric recognition<br/>
                        products and highly tailored with data analytics platforms.
                    </p>
                </div>
            </div>
            <div className={'relative w-full'}>
                <Steps current={current} className={'mt-16 w-11/12 h-48'} onChange={(num) => setCurrent(num)}>
                    {data.map((it, index) => (
                        <Step
                            className={'flex justify-center items-center'}
                            key={index}
                            icon={
                                <div className={`flex flex-col justify-content items-center ${current === index ? 'mt-8' : 'mt-12'}`}>
                                    <div className={`rounded-full border-4 ${current === index ? 'w-32 h-32 mb-10 border-[#FE6601]' : 'w-24 h-24 border-[#FE944D]'} mb-2 bg-white z-10 flex justify-center items-center`}
                                         style={{transition: 'width 200ms, height 200ms', boxShadow: current === index ? '0 0 20px 1px #FE6601' : null}}
                                    >
                                        <Image preview={false} src={it.icon} className={'w-[50px]'}/>
                                    </div>
                                    <p className={`w-40 text-lg montserrat text-[#B4BCC9] ${current === index ? 'hidden' : null}`}><span className={'font-bold'}>Trust</span>{it.name}</p>
                                </div>
                            }
                        />
                    ))}
                    <hr className={'absolute right-0 top-[48%] w-[90%] h-1 bg-[#FE6601] z-0'}/>
                </Steps>
            </div>

            <div className={'mt-28'}>
                <Carousel
                    navButtonsAlwaysVisible={true}
                    animation={'slide'}
                    next={num => setCurrent(num)}
                    prev={num => setCurrent(num)}
                    index={current}
                    autoPlay={false}
                    NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
                    PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
                    indicators={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: '#000000',
                            opacity: 0.15,
                        }
                    }}
                    navButtonsWrapperProps={{
                        className: `mr-5 ml-5 ${!current ? 'arrow-prev-product' : current == 4 ? 'arrow-next-product' : null}`
                    }}
                >
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
            </div>
        </>
    )
}
