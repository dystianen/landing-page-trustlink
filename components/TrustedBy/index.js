import { Carousel, Image } from "antd";
import { propertyOf } from "lodash";
import { useTranslation } from "next-i18next";
import React from "react";
import {useMediaQuery} from 'react-responsive'
// import Particles from "react-tsparticles";
import { ParticlesTrusted } from "./ParticlesTrusted";
import { useRouter } from 'next/router'

const TrustedBy = (props) => {
    const lg = useMediaQuery({query: '(min-width: 1024px)'})
    const md = useMediaQuery({query: '(min-width: 768px)'})
    const sm = useMediaQuery({query: '(min-width: 576px)'})
    const { t } = useTranslation(); const router = useRouter()
    const {color} = router.query

    const showSlide = lg ? 4 : md ? 3: sm ? 3 : 2
    const logos = [
        {
            src: 'assets/trusted_by/duitku.png',
        },
        {
            src: 'assets/trusted_by/flip.png',
        },
        {
            src: 'assets/trusted_by/asaren-crop.png',
        },
        {
            src: 'assets/trusted_by/TECH5_logo-01.png',
        },
        {
            src: 'assets/trusted_by/interbio.svg',
        },
        {
            src: 'assets/trusted_by/logo-dark.png',
        },
        // {
        //     src: 'assets/trusted_by/more.png',
        // },
        {
            src: 'assets/trusted_by/vida.png',
        }
    ]

    return (
        <div className={'relative flex items-center w-full h-auto py-28 sm:py-40 lg:py-52 pl-12 md:pl-20 z-50 bg-[#F1F1F1] my-10 sm:my-0 sm:mb-20'}>
            <div className={'h-full sm:h-auto absolute bottom-0 right-0 about-img'}>
                <Image preview={false} className="h-full w-auto opacity-30" src={'/assets/images/accent-master-connecting-dots-2.png'}/>
            </div>
             <div className={'relative w-full h-full'}>
                <div className={'absolute top-14 sm:top-20 lg:top-24 right-0 h-48 sm:h-72 w-[85%] bg-[#EAEDF1]'}/>
                <div className={'relative w-full z-10'}>
                    <div className={'flex flex-row items-center'}>
                        <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        <p className={'text-sm text-[#818FA6] mb-0 ml-6 montserrat tracking-widest'}>{t('Trusted By')}</p>
                    </div>
                    <p className={'text-3xl sm:text-5xl md:text-6xl lg:text-7xl montserrat text-[#1D365F] font-bold my-2 sm:my-6'}>{t('Clients and Partners')}</p>
                    <p className={'text-base sm:text-lg lg:text-xl montserrat text-[#1D365F] font-medium mb-0'}>{t('Collaboration 1')}</p>
                    <p className={'text-base sm:text-lg lg:text-xl montserrat text-[#1D365F] font-medium mb-0'}>{t('Collaboration 2')}</p>
                </div>
                <div className={'flex flex-row justify-end mt-6 sm:mt-10 z-10'}>
                    <div className={"bg-gray-300 w-[94%]"}>
                        <Carousel dots={false} slidesToShow={showSlide} autoplay={true} speed={1000} autoplaySpeed={1000}>
                                {logos.map((props, index) => {
                                    return (
                                        <div key={index} className={`flex justify-center border-r-2 items-center text-center bg-white company-logo ${color === 'true' ? 'logo-image-gray' : ''} h-20 md:h-24 xl:h-30`}>
                                            <div className={'h-full about-img py-5 md:py-7 xl:py-8 px-2'}>
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
