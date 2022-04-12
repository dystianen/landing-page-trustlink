import { useRouter } from "next/router";
import { appConfig } from "../config/app";
import { isAuthUrl } from "../utils/checkUrl";
import { useStore } from "../components/StoreProvider";
import { Image } from "antd";
import React, { useRef, useState } from "react";
import { ParticlePage } from "../components/Particle";
import { DrawerSlide } from "../components/DrawerSlide";
import { Product } from "../components/Product";
import UseCase from "../components/UseCase";
import Footer from "../components/Footer";
import AboutMePage from "../components/AboutUs";
import Banner from "../components/Banner";
import TrustedBy from "../components/TrustedBy";
import WeAimed from "../components/WeAimed";
import { CertificationMembership } from "../components/CertificationMembership";
import ContactUs from "../components/ContactUs";
import {useMediaQuery} from "react-responsive";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Link from "next/link";

export const checkRerouteLoggedUser = (store, router) => {
    if (typeof window !== 'undefined') {
        router.push('/under_construction')
    }
}

export default function Home() {
    const router = useRouter();
    const store = useStore();
    const { t, i18n } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 my-1 rounded-full bg-orange transition ease transform duration-300`;
    const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-orange transition ease transform duration-300`;
    const mobile = useMediaQuery({ query: '(max-width: 576px)' });

    const contactUsRef = useRef(null);

    const menu = [
        {
            name: t('About Us.'),
        }, {
            name: t('Products'),
        }, {
            name: t('Use Cases'),
        },
    ]

    // checkRerouteLoggedUser(store,router);

    const product = [
        {
            image: 'trust-scan.png',
            className: 'w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center shadow-xl bg-white border-8 border-[#FE7519] rounded-full p-3.5 relative -ml-20 md:ml-0 xl:ml-24 z-10'
        },{
            image: 'trust-connect.png',
            className: 'w-44 h-44 lg:w-52 lg:h-52 flex justify-center items-center shadow-xl bg-white border-8 border-[#FE7519] rounded-full p-5 relative z-10 -mt-24 ml-[25%] md:ml-[40%]'
        },{
            image: 'trust-live.png',
            className: 'w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center shadow-xl bg-white border-8 border-[#FE7519] rounded-full p-3.5 relative z-10 mt-[5%] md:mt-[17%] lg:mt-[8%] ml-[55%] md:ml-[65%]'
        },{
            image: 'trust-verify.png',
            className: 'w-44 h-44 lg:w-52 lg:h-52 flex justify-center items-center shadow-xl bg-white border-8 border-[#FE7519] rounded-full p-5 relative z-10 -ml-16 md:ml-[7%] xl:ml-[18%] -mt-12 md:-mt-6 lg:-mt-12'
        },
    ]

    return (
        <div className={'overflow-hidden'}>
            <DrawerSlide menu={menu} isOpen={isOpen} />
            <div className={'fixed w-16 sm:w-20 h-20 transparent top-2/4 left-0 p-5'} style={{ zIndex: 10000 }}>
                <button className="flex flex-col w-full h-full justify-center group" onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`}/>
                    <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100"}`}/>
                    <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`}/>
                </button>
            </div>
            <div className={'relative h-full md:h-[75vh] lg:h-full min-h-screen'}>
                <div className={'absolute w-full top-0 flex flex-row'} style={{ justifyContent: 'space-between' }}>
                    <div>
                        <Image preview={false} className="fixed w-14 top-4" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }} />
                        <Image preview={false} className="relative h-14 left-14 mt-4" src={'/assets/logo/text-only.png'} />
                    </div>
                    <div className={'choose-lang flex flex-row mr-10 mt-8 md:mr-32 lg:mt-10'}>
                        <Link href={'/'} locale="en">
                            <p className={`cursor-pointer font-medium ${i18n.language === 'en' && 'text-[#FE7519]'}`}>EN</p>
                        </Link>
                        <div className={'w-px h-5 mt-1 mx-2'} style={{ backgroundColor: '#818FA6' }} />
                        <Link href={'/'} locale="id">
                            <p className={`cursor-pointer font-medium ${i18n.language === 'id' && 'text-[#FE7519]'}`}>ID</p>
                        </Link>
                    </div>
                </div>
                <div className={'relative w-full pl-12 md:pl-20'}>
                    <section className={'flex justify-start w-auto h-full'}>
                        {/*<div className={'flex items-end justify-center w-32'}>*/}
                        {/*<div className={'auto-rows-auto invisible ml-8 lg:ml-3 xl:ml-0 md:visible'}><p className={'w-max -rotate-180'} style={{ color: '#161D24', fontFamily: 'Montserrat', letterSpacing: '0.15rem', fontSize: '0.6rem', writingMode: 'vertical-lr', textOrientation: 'sideways' }}>SCROLL DOWN</p>*/}
                        {/*    <Image preview={false} src={'/assets/scroll-down.svg'} />*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        <div className={'w-max h-[50vh] md:h-full md:min-h-screen lg:pl-8 flex flex-col justify-end md:justify-center'}>
                            <div className={'home-next-generation text-3xl sm:text-4xl md:text-5xl lg:text-6xl'}>
                                <span className={'block mb-2'}>Trust-Centric</span>
                                <span>Solution</span>
                            </div>
                            <div className={'home-next-generation-sub leading-tight text-xl sm:text-3xl md:text-3xl lg:text-4xl mt-5 font-medium'}>
                                <span className={'block mb-2'}>For Identity Management</span>
                                <span> And Open Finance Platform</span>
                            </div>
                        </div>
                    </section>
                    <section className={'absolute top-[100%] md:top-20 right-10 w-3/5 h-full mt-6 md:mt-0 mb-24 md:mb-0'}>
                        {
                            product.map((it,index) => (
                                <div key={index} className={it.className}>
                                    <Image preview={false} src={`/assets/images/${it.image}`} className={'z-10 justify-center'} />
                                </div>
                            ))
                        }
                    </section>
                </div>
            </div>
            <div>
                <ParticlePage
                    dimention={{
                        width: mobile ? '100%' : '50%',
                        height: '100vh'
                    }}
                    numberValue={240}
                    opacity={0.8}
                    className={'home-plexus'}
                />
            </div>
            <section className={'mt-56 md:mt-0'}>
                <AboutMePage />
            </section>
            <section className={'pl-12 md:pl-20 mt-52'}>
                <Product onClickContact={()=>contactUsRef.current.scrollIntoView({behavior: 'smooth'}) }/>
            </section>
            <UseCase />
            <Banner />
            <TrustedBy />
            <WeAimed />
            <div className="h-[43vh]" />
            <CertificationMembership />
            <div className="h-quarter" />
            <ContactUs sectionRef={contactUsRef } />
            <Footer />
        </div>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // ...(await serverSideTranslations("en", ['common'])),
            // Will be passed to the page component as props
        },
    };
}
