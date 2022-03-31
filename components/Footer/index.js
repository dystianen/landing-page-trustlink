import { Image } from "antd";
import React from "react";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const Footer = () => {

    const { t, i18n } = useTranslation('common');

    return (
        <div className={'relative'}>
            <div className="h-auto w-full text-white py-4 pl-16 pr-6 md:pr-16 text-2xl bg-footer">
                <div className={"w-full grid grid-cols-12 gap-2"}>
                    <div className={'col-span-9 lg:col-span-6 xl:col-span-6'}>
                        <Image className="w-3/5 md:w-1/2" src="/assets/logo/logo-for-dark-background-rt.png" preview={false} />
                    </div>
                    <div className={'col-span-3 lg:col-span-6 xl:col-span-6 text-[#71757C] flex md:justify-end items-center md:mr-6 lg:mr-12 xl:mr-24'}>
                        <p className={'text-sm md:text-xl montserrat m-0'}>
                            <Link href={'/'} locale="en">
                                <span className={`cursor-pointer ${i18n.language === 'en' && 'text-orange'}`}>EN</span>
                            </Link>
                            <span className="text-[#7C7D7F66] mx-2">|</span>
                            <Link href={'/'} locale="id">
                                <span className={`cursor-pointer ${i18n.language === 'id' && 'text-orange'}`}>ID</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={"w-full mt-4 md:mt-6 lg:mt-12 font-light flex flex-wrap justify-around xl:pl-24"}>
                    <div className={'w-full md:w-1/2 lg:w-auto flex md:justify-center'}>
                        <div className={'w-full md:w-9/12 lg:w-auto'}>
                            <p className={'text-base montserrat opacity-80'}>{t('Call Us')}</p>
                            <p className="montserrat text-lg md:text-2xl tracking-normal mt-5 md:mt-7 lg:mt-10 mb-3">0628 671 8889</p>
                            <p className="text-base montserrat opacity-80">{t('Mon to Fri')} (8.30 - 17.30)</p>
                        </div>
                    </div>
                    <div className={'w-full md:w-1/2 lg:w-2/5 flex md:justify-center my-6 md:my-0'}>
                        <div className={'w-auto'}>
                            <p className={'text-base montserrat opacity-80'}>EMAIL</p>
                            <p className="montserrat text-lg md:text-2xl tracking-normal mt-5 md:mt-7 lg:mt-9">info@withtrustlink.com</p>
                        </div>
                    </div>
                    <div className={'w-full md:w-1/2 lg:w-auto flex md:justify-center lg:justify-end md:mt-8 lg:mt-0'}>
                        <div className={'w-full md:w-9/12 lg:w-auto'}>
                            <p className={'text-base montserrat opacity-80'}>{t('Company')}</p>
                            <p className="montserrat text-lg md:text-2xl tracking-normal mt-5 md:mt-7 lg:mt-10 mb-2">{t('Partners')}</p>
                            <p className="montserrat text-lg md:text-2xl tracking-normal">{t('Carrer')}</p>
                        </div>
                    </div>
                    <div className={'md:w-1/2 lg:w-0'}/>
                </div>
                <div className={"w-full mt-4 md:mt-10 lg:mt-30 text-xs md:text-base lg:text-lg relative bottom-0 flex flex-col md:flex-row"}>
                    <div className={'w-full md:w-1/2 text-base montserrat text-[#EAEDF1] my-4 md:my-0'}>
                        2022 &copy; {t('Copyright')}
                    </div>
                    <div className={'w-full md:w-1/2 text-base montserrat tracking-wide md:text-right text-[#EAEDF1]'}>
                        {t('Privacy Policy')} <span className={'text-[24px] m-0 p-0'}>&bull;</span> {t('Tnc')}
                    </div>
                </div>
            </div>
            <div className={'absolute top-6 md:top-10 right-6 md:right-10 cursor-pointer'} onClick={() => window.scrollTo(0, 0)}>
                <Image preview={false} src={'/assets/scroll-top.svg'} className={'rotate-180'}/>
                <p className={'w-max mt-4'} style={{ color: '#fff', fontFamily: 'Montserrat', letterSpacing: '0.15rem', fontSize: '0.6rem', writingMode: 'vertical-rl', textOrientation: 'sideways-right' }}>{t('Go To Top')}</p>
            </div>
        </div>
    );
};

export default Footer;
