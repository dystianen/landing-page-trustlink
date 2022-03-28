import { CloseOutlined } from '@ant-design/icons';
import {Image, Avatar, Row, Button} from 'antd';
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

    const pageCarousel = 2
    const [current, setCurrent] = useState(0)

    const CarouselPage1 = () => (
        <div className={'w-full h-auto md:h-screen flex flex-col md:flex-row bg-[#05204D]'}>
            <div className={'flex justify-center items-center w-full md:w-1/2 h-auto md:h-full my-16 md:my-0'}>
                <div className={'h-full w-auto flex justify-center items-center'}>
                    <Image preview={false} src={'/assets/logo/logo-for-dark-background.png'} className={'z-10 justify-center w-full h-full'} />
                </div>
            </div>
            <div className={'flex flex-col justify-center w-full md:w-1/2 h-auto md:h-full'}>
                <div className={"mb-7"}>
                    <p className={'text-lg text-[#818fa6] tracking-[3px] mb-0 montserrat text-center md:text-left'}>AIRPORT</p>
                </div>
                <div className={'text-3xl lg:text-4xl text-white montserrat text-center md:text-left'}>
                    <p className={'mb-0 leading-none'}><span className={'font-semibold'}>Seamless</span> Passenger</p>
                    <p className={'mb-8'}>Verification & Identification</p>
                </div>
                <div className={'mb-6 px-4 md:px-0'}>
                    <p className={"text-white w-auto lg:w-4/5 xl:w-7/12 text-sm montserrat mb-0 text-center md:text-left"}>Our guarded biometric approach supports law enforcement agencies by analyzing and recognizing potential
                        suspect via face recognition and finger to deter or further investigate illicit behaviours or crimes.
                    </p>
                </div>
                <div className={'text-center md:text-left mb-24 md:mb-0'}>
                    <Button className={"text-white text-lg border-[#fe6601] bg-[#fe6601] montserrat rounded-lg h-12 w-48"}>
                        Request Demo
                    </Button>
                </div>
            </div>
        </div>
    )

    const CarouselPage2 = () => (
        <div className={'w-full h-auto md:h-screen flex flex-col md:flex-row bg-[#05204D]'}>
            <div className={'flex justify-center items-center w-full md:w-1/2 h-auto md:h-full my-16 md:my-0'}>
                <Image preview={false} src={'/assets/logo/logo-for-dark-background.png'} className={'z-10 justify-center w-auto md:w-full h-full'} />
            </div>
            <div className={'flex flex-col justify-center w-full md:w-1/2 h-auto md:h-full'}>
                <div className={"mb-7"}>
                    <p className={'text-[16px] text-[#818fa6] tracking-[3px] mb-0 montserrat leading-none text-center md:text-left'}>LAW FIELDS</p>
                </div>
                <div className={'text-[32px] lg:text-[40px] text-white montserrat text-center md:text-left'}>
                    <p className={'mb-0 leading-snug md:leading-none'}>Top Level <span className={'font-bold'}>Guarded</span></p>
                    <p className={'mb-8'}><span className={'font-bold'}>Biometric</span> Approach</p>
                </div>
                <div className={'mb-6 px-4 md:px-0'}>
                    <p className={"text-white w-auto lg:w-4/5 xl:w-7/12 text-sm montserrat mb-0 text-center md:text-left"}>
                        Our guarded biometric approach supports law enforcement agencies by analyzing and recognizing potential suspect via face recognition and finger to deter or further investigate illicit behaviors or crimes.
                    </p>
                </div>
                <div className={'text-center md:text-left mb-24 md:mb-0'}>
                    <Button className={"text-white text-lg border-[#fe6601] bg-[#fe6601] montserrat rounded-lg h-12 w-48"}>
                        Request Demo
                    </Button>
                </div>
            </div>
        </div>
    )

    return (
        <div className={'w-full h-full pl-12 md:pl-20'}>
            <div className={'w-full h-full'}>
                <div className={"relative w-full h-auto max-h-[519px] usecase-img"}>
                    <Image preview={false} className="w-full h-full brightness-50" src={'/assets/usecase-airport.png'}/>
                    <div className={'absolute top-0 left-0 h-full w-full usecase-img'}>
                        <Image preview={false} className="w-full h-full brightness-50 " src={'/assets/usecase-airport.png'}/>
                    </div>
                    <div className={'absolute right-0 top-0 z-20 h-full w-auto usecase-img'}>
                        <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionUseCase-1.png'}/>
                    </div>
                    <div className={'absolute left-[1.2rem] sm:left-[2.2rem] bottom-[1rem] sm:bottom-[2.3rem] z-20'}>
                        <b className={'text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 montserrat'}>Modern.</b>
                        <p className={'text-white text-2xl sm:text-3xl md:text-5xl montserrat'}>Biometric Use Case</p>
                    </div>

                </div>
                <div className={'flex flex-row h-auto bg-[#05204D]'}>
                    <Carousel
                        autoPlay={false}
                        className={'w-full h-full'}
                        indicatorContainerProps={{
                            style: {
                                position: 'absolute',
                                bottom: '3%',
                                // right: '3%',
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
                                backgroundColor: '#0681FA',
                                color: '#0681FA',
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
                                backgroundColor: 'rgba(0,0,0, .1)',
                            },
                            className: 'arrow-usecase mt-56 md:mt-36'
                        }}
                        navButtonsWrapperProps={{
                            className: `mx-2 md:mx-8 ${!current ? 'arrow-prev-product' : current === (pageCarousel - 1) ? 'arrow-next-product' : null}`
                        }}
                        NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
                        PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
                        animation={'slide'}
                        onChange={num => setCurrent(num)}
                    >
                        <CarouselPage1 />
                        <CarouselPage2 />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default UseCase;
