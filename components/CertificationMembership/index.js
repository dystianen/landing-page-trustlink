import React from "react";
import { Image } from "antd";
import {useTranslation} from "next-i18next";
import { useRouter } from 'next/router'
import { observer } from "mobx-react-lite";
export const CertificationMembership = observer(({sectionRef})=> {

    const { t } = useTranslation('common');
    const router = useRouter()
    const {color} = router.query;
    const item = [
        {
            src: '/assets/aftech-2.png',
            className: ' h-1/2 md:h-3/5 w-auto',
            href: 'https://fintech.id/id'
        },
        {
            src: '/assets/images/ISO-27001-logo.png',
            className: 'h-1/2 md:h-3/5 w-auto',
            href: 'https://isoindonesiacenter.com/iso-27001-information-security/'
        },
        {
            src: '/assets/dukcapil.png',
            className: 'h-3/4 md:h-full w-auto',
            href: 'https://dukcapil.kemendagri.go.id/'
        },
        {
            src: '/assets/keminfo.png',
            className: 'h-3/5 md:h-3/4 w-auto',
            href: 'https://www.kominfo.go.id/'
        },
        {
            src: '/assets/images/logo-aitb-2.png',
            className: 'h-2/5 md:h-1/2 w-auto',
            href: 'https://biometrik.org/'
        },
    ];

    const openLink = (href, index, src) => {
        window.open(href, "_blank");
    }

    return (
        <div className={'section-most-top -mt-98'} ref={sectionRef}>
            <div className={'flex w-full justify-center mt-20'}>
                <div className={'flex flex-row items-center z-10'}>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                    <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>{t('Registred and Supervisied')}</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center montserrat mt-4'}>
                <div className={'z-10'}>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-0 text-[#04204D]'}>{t('International')}</p>
                    <p className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-4 text-[#04204D] font-medium'}>{t('Certification and Membership')}</p>
                </div>
            </div>
            <div className={'w-full sm:mt-5 flex justify-center items-center'}>
                <div className={'w-full md:w-[90%] lg:w-5/6 h-auto flex flex-wrap flex-col sm:flex-row justify-center items-center'}>
                    {
                        item.map((props, index) => (
                            <div key={index} onClick={()=>openLink(props.href)} className={`cursor-pointer flex sm:flex-row w-full sm:w-1/3 trusted-img h-36 mb-2 ${props.class}`}>
                                <Image preview={false} className={`${props.className} company-logo ${color === 'true' ? 'logo-image-gray' : ''}`} src={props.src} alt={'certification_logo'}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
})
