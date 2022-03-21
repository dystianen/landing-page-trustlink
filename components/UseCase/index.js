import { CloseOutlined } from '@ant-design/icons';
import { Image, Avatar, Row } from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import Carousel from 'react-material-ui-carousel'

const UseCase = () => {
    const router = useRouter();
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    return (
        <div className={'ml-20'}>
            <div className={"relative h-[519px]"} style={{background: "url('/assets/base_img_card.jpg') ", backgroundPosition:'fill'}}>
                    <div className={'absolute z-20'}>
                        <Image preview={false} className="w-[100px] md:w-[200px] lg:w-[250px] grayscale invert opacity-50" src={'/assets/accents/logo-usecase-top.png'}/>
                    </div>
                    <div className={'absolute right-0 -bottom-1 z-20'}>
                        <Image preview={false} className="w-[100px] md:w-[200px] lg:w-[250px] grayscale invert opacity-50" src={' /assets/accents/logo-usecase-bottom.png'}/>
                    </div>
                    <div className={'absolute left-[2.2rem] bottom-[2.3rem] z-20'}>
                        <b className={'text-white text-4xl md:text-6xl font-bold mb-5 montserrat'}>Modern.</b>
                        <p className={'text-white text-3xl md:text-5xl montserrat'}>Biometric Use Case</p>
                    </div>
            </div>
            <div className={'flex flex-row h-[1097px] bg-[#05204D]'}>
                <Carousel
                    autoPlay={false}
                    className={'w-full '}
                    indicatorContainerProps={{
                        style: {
                            position: 'absolute',
                            top: '55%',
                            right: '-3%',
                            zIndex: 10
                        },
                    }}
                    indicatorIconButtonProps={{
                        style: {
                            color : '#B7DFFF'
                          }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            backgroundColor: '#fff',
                            color: '#fff',
                            width: 25,
                            height: 10,
                            borderRadius: 10,
                            marginRight: 5,
                            marginLeft: 5,
                        }
                    }}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'rgba(0,0,0, .1)'
                        },
                        className: 'arrow-usecase'
                    }}
                    navButtonsWrapperProps={{
                        style: {
                            margin: '0 20px 0 20px',
                        }
                    }}
                    NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
                    PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
                    animation={'slide'}
                >
                     <div className={'w-full flex flex-row lg:h-[1100px] md:h-[1100px] sm:h-[1100px] bg-[#05204D]'}>
                        <div className={'flex justify-center items-center w-2/4'}>
                            <Image preview={false} className="lg:w-[325px] md:w-[280px] lg:ml-24 md:ml-14" src={'/assets/phone-face.png'}/>
                        </div>
                        <div className={'flex flex-col justify-center lg:w-2/4 mb-44 md:w-1/3 md:ml-10'}>
                            <div>
                                <p className={'text-[32px] text-white mb-0 montserrat leading-none'}>Top Level <span className={'font-bold'}>Guarded</span></p>
                                <p className={'text-[32px] text-white montserrat mb-5'}><span className={'font-bold'}>Biometric</span> Approach</p>
                            </div>
                            <div>
                                <p className={"text-white w-[65%] text-base montserrat"}>Our guarded biometric approach supports law enforcement agencies by analyzing and recognizing potential
                                    suspect via face recognition and finger to deter or further investigate illicit behaviours or crimes.
                                </p>
                            </div>
                        </div>
                        <div className={'line-top'}/>
                        <div className={'circle'}/>
                        <div className={'line-mid'}/>
                        <div className={'line-bottom'}/>
                    </div>
                    <div className={'w-full flex flex-row lg:h-[1100px] md:h-[1100px] sm:h-[1100px] bg-[#4A90E2]'}>
                        <div className={'absolute -left-10'}>
                            <p className={'opacity-50 text-transparent montserrat stroke lg:text-[410px] md:text-[200px] leading-none'}>Airport</p>
                        </div>
                        <div className={'flex justify-center items-center w-2/4'}>
                            <Image preview={false} className="lg:w-[325px] md:w-[280px] lg:ml-24 md:ml-14" src={'/assets/phone-face-2x.png'}/>
                        </div>
                        <div className={'flex flex-col justify-center lg:w-2/4 mb-44 md:w-1/3 md:ml-10'}>
                            <div>
                                <p className={'text-[32px] text-white mb-0 montserrat leading-none'}><span className={'font-bold'}>Seamless</span> Passenger</p>
                                <p className={'text-[32px] text-white montserrat mb-5'}>Verification & Identification</p>
                            </div>
                            <div>
                                <p className={"text-white w-[70%] text-base montserrat"}>Improve the passenger’s identification and verification process in recognizing the white listed person.
                                </p>
                            </div>
                        </div>
                        <div className={'line-top'}/>
                        <div className={'circle'}/>
                        <div className={'line-mid'}/>
                        <div className={'line-bottom'}/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default UseCase;
