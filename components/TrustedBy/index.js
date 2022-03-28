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

    const showSlide = lg ? 5 : md ? 4: sm ? 3 : 2
    const logos = [
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/adie-logo.png',
            preview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/banque-logo.png',
            preview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/alma-logo.png',
            preview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/bnp-logo.png',
            preview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/aria-logo.png',
            preview : false,
            height : 45
        },
    ]

    return (
        <div className={'flex items-center w-full h-full min-h-screen pl-12 md:pl-20'}>
             <div className={'relative w-full h-full'}>
                <div className={'absolute top-14 sm:top-20 lg:top-24 right-0 h-60 sm:h-72 w-[85%] bg-[#EAEDF1] z-00'}/>
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
                        <Carousel dots={true} slidesToShow={showSlide} autoplay={true}>
                                {logos.map((props, index) => {
                                    return (
                                        <div key={index} className={props.class_name}>
                                            <Image src={props.src} height={props.height} preview={ props.preview}/>
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
