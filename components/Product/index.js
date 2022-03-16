import React, {useState} from 'react';
import {Image, Popover, Steps} from "antd";
import Carousel from 'react-material-ui-carousel'


export const Product = () => {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;

    const onChange = current => {
        console.log('onChange:', current);
        setCurrent(current)
    };

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
        // {
        //     name: 'TrustConnect',
        //     icon: '/assets/logo/trust-connect/icon-without-text.png'
        // },
        // {
        //     name: 'TrustScore',
        //     icon: '/assets/logo/trust-score/score.png'
        // }
    ]

    const content = (
        <Carousel
            autoPlay={false}
            className={'w-full h-[1000px]'}
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                style: {
                    backgroundColor: '#000000'
                }
            }}
            navButtonsWrapperProps={{
                style: {
                    margin: '0 20px 0 20px',
                },
            }}
            NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
            PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
            animation={'slide'}
        >
            {
                items.map( (item, i) => (
                    <div key={i} className={'flex flex-row h-[1000px]'}>
                        <div className={'flex justify-center items-center w-2/4 z-20'}>
                            <Image preview={false} className="w-[325px] ml-24" src={item.icon}/>
                        </div>
                        <div className={'flex flex-col justify-center w-2/4 mb-48 z-20'}>
                            <div>
                                <p className={'text-6xl mb-0 monsterrat leading-none font-bold'} style={{color: '#04204D'}}>{item.name}<span style={{color: '#FE6601'}}>{item.name2}</span></p>
                            </div>
                            <div className={'mt-14'}>
                                <p style={{color: '#04204D'}} className={"w-[65%] text-base monsterrat"}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ) )
            }
        </Carousel>
    )

    const data = [
        {
            name: 'TrustLive',
            icon: '/assets/logo/trust-live/match.png',
            content: content
        },
        {
            name: 'TrustScan',
            icon: '/assets/logo/trust-scan/scan.png'
        },
        {
            name: 'TrustVerify',
            icon: '/assets/logo/trust-verify/verification.png'
        },
        {
            name: 'TrustConnect',
            icon: '/assets/logo/trust-connect/icon-without-text.png'
        },
        {
            name: 'TrustScore',
            icon: '/assets/logo/trust-score/score.png'
        }
    ]

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
            <Steps current={current} className={'mt-16 w-11/12 h-20'} onChange={onChange}>
                {data.map((it, index) => (
                    <Step
                        key={index}
                        title={it.name}
                        icon={
                            <div className={'rounded-full border-4 p-3 w-16'} style={{borderColor: '#FE6601'}}>
                                <Image preview={false} src={it.icon}/>
                            </div>
                        }
                    />
                ))}
            </Steps>
            <div style={{minHeight: '200px',
                marginTop: 16,
                borderRadius: 2}}>
                {data[current].content}
            </div>
        </>
    )
}
