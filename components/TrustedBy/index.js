import { Carousel, Image } from "antd";
import { propertyOf } from "lodash";
import React from "react";
import {useMediaQuery} from 'react-responsive'
// import Particles from "react-tsparticles";
import { ParticlesTrusted } from "./ParticlesTrusted";

const TrustedBy = () => {
    const lg = useMediaQuery({query: '(min-width: 1024px)'})
    const md = useMediaQuery({query: '(min-width: 768px)'})
    const sm = useMediaQuery({query: '(min-width: 576px)'})

    const showSlide = lg ? 4 : md ? 3: sm ? 3 : 2
    const logos = [
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white company-logo logo-image-gray h-20 md:h-24 xl:h-30',
            src: 'assets/trusted_by/logo_aitb.png',
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white company-logo logo-image-gray h-20 md:h-24 xl:h-30',
            src: 'assets/trusted_by/asaren-crop.png',
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white company-logo logo-image-gray h-20 md:h-24 xl:h-30',
            src: 'assets/trusted_by/duitku.png',
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white company-logo logo-image-gray h-20 md:h-24 xl:h-30',
            src: 'assets/trusted_by/flip.png',
        }
    ]

    return (
        <div className={'relative flex items-center w-full h-full min-h-screen pl-12 md:pl-20 z-50 bg-[#F1F1F1]'}>
             <div className={'relative w-full h-full'}>
                <div className={'absolute top-14 sm:top-20 lg:top-24 right-0 h-60 sm:h-72 w-[85%] bg-[#EAEDF1]'}/>
                <div className={'relative w-full z-10'}>
                    <div className={'flex flex-row items-center'}>
                        <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        <p className={'text-sm text-[#818FA6] mb-0 ml-6 montserrat tracking-widest'}>ALWAYS RELIABLE</p>
                    </div>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl montserrat text-[#1D365F] font-bold my-2 sm:my-6'}>Trusted by.</p>
                    <p className={'text-[26px] sm:text-3xl md:text-4xl lg:text-5xl montserrat text-[#1D365F] font-medium mb-0'}>Clients & Partners</p>
                </div>
                <div className={'flex flex-row justify-end mt-6 sm:mt-10 z-10'}>
                    <div className={"bg-gray-300 w-[94%]"}>
                        <Carousel dots={false} slidesToShow={showSlide} autoplay={true}>
                                {logos.map((props, index) => {
                                    return (
                                        <div key={index} className={props.class_name}>
                                            <div className={'h-full about-img p-4'}>
                                                <Image src={props.src} className={'h-full w-auto'} preview={false}/>
                                            </div>
                                        </div>
                                    )
                                })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy;
