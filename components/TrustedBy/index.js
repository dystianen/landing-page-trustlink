import { Carousel, Image } from "antd";
import { propertyOf } from "lodash";
import { useTranslation } from "next-i18next";
import React from "react";
import {useMediaQuery} from 'react-responsive'
// import Particles from "react-tsparticles";
import { ParticlesTrusted } from "./ParticlesTrusted";
import { useRouter } from 'next/router'

const TrustedBy = ({sectionRef}) => {
    const lg = useMediaQuery({query: '(min-width: 1024px)'})
    const md = useMediaQuery({query: '(min-width: 768px)'})
    const sm = useMediaQuery({query: '(min-width: 576px)'})
    const { t } = useTranslation(); const router = useRouter()
    const {color} = router.query

    const showSlide = lg ? 4 : md ? 3: sm ? 3 : 2
    const logos = [
        {
            src: 'assets/trusted_by/duitku.png',
            href: 'https://www.duitku.com/'
        },
        {
            src: 'assets/trusted_by/flip.png',
            href: 'https://flip.id/landing'
        },
        {
            src: 'assets/trusted_by/asaren-crop.png',
            href: 'https://asaren.ai/'
        },
        {
            src: 'assets/trusted_by/TECH5_logo-01.png',
            href: 'https://tech5.ai/'
        },
        {
            src: 'assets/trusted_by/interbio.svg',
            href: 'https://interbio.id/'
        },
        {
            src: 'assets/trusted_by/logo-dark.png',
            href: 'https://totmtechnologies.com/'
        },
        // {
        //     src: 'assets/trusted_by/more.png',
        // },
        {
            src: 'assets/trusted_by/vida.png',
            href: 'https://www.vida.id/'
        }
    ];

    const openLink = (href, index, src) => {
        let selectedIndex = index + 2;
        if(index >= logos.length - 2 ){
            selectedIndex = (logos.length - index) % 2;
        }
        const data = logos[selectedIndex];
        window.open(data.href, "_blank");
    }

    return (
        <div className={'relative flex items-center w-full h-auto py-28 sm:py-40 lg:py-52 pl-6 sm:pl-12 lg:pl-20 z-50 bg-[#F1F1F1] my-10 sm:my-0 sm:mb-20 section-most-top-client'} ref={sectionRef}>
            <div className={'h-full sm:h-auto absolute bottom-0 right-0 about-img'}>
                <Image preview={false} className="w-auto opacity-30" src={'/assets/images/accent-master-connecting-dots-2.png'} alt={"Trustlink Connection Dots 2"}/>
            </div>
             <div className={'relative w-full h-full'}>
                {/* <div className={'absolute top-14 sm:top-20 lg:top-24 right-0 h-64 sm:h-72 w-[85%] bg-[#EAEDF1] mr-4 lg:mr-20'}/> */}
                <div className={'relative w-full z-10 pr-4 lg:pr-0 flex flex-col items-center'}>
                    <div className={'flex flex-row items-center justify-center'}>
                        {/*<div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>*/}
                        {/*<p className={'text-sm text-[#818FA6] mb-0 ml-6 montserrat tracking-widest'}>{t('Trusted By')}</p>*/}
                        <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center font-normal'}>{t('Trusted By')}</p>
                        <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                    </div>
                    <p className={'text-3xl sm:text-5xl md:text-6xl lg:text-7xl montserrat text-[#04204D] font-bold my-2 sm:my-6'}>{t('Clients and Partners')}</p>
                    <p className={'text-base md:text-lg lg:text-xl montserrat text-[#04204D] font-medium mb-0'}>{t('Collaboration 1')}</p>
                    {/*<p className={'text-base sm:text-lg lg:text-xl montserrat text-[#04204D] font-medium mb-0'}>{t('Collaboration 2')}</p>*/}
                </div>
                <div className={'flex flex-row justify-start mt-6 sm:mt-10 z-10 mr-4 lg:mr-20'}>
                    <div className={"bg-gray-300 w-full"}>
                        <Carousel dots={false} slidesToShow={showSlide} autoplay={true} speed={1000} autoplaySpeed={1000}>
                                {logos.map((props, index) => {
                                    return (
                                        <div key={index}  className={`flex justify-center  border-r-2 items-center text-center bg-white company-logo ${color === 'true' ? 'logo-image-gray' : ''} h-20 md:h-24 xl:h-30`}>
                                            <div className={'h-full about-img py-5 md:py-7 xl:py-8 px-2'}>
                                                {/* <Image onClick={()=>openLink(props.href, index, props.src)} src={props.src} className={'cursor-pointer h-full w-auto'} preview={false}/> */}
                                                <Image src={props.src} className={' h-full w-auto'} preview={false} alt={"Trustlink Clients Logo"}/>
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
