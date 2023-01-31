import { useRouter } from "next/router";
import { useStore } from "../../components/StoreProvider";
import { Button, Image } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { ParticlePage } from "../../components/Particle";
import UseCase from "../../components/UseCase";
import Footer from "../../components/Footer";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StickyHeader from "../../components/StickyHeader";
import { scrollIntoView, polyfill } from "seamless-scroll-polyfill";
import Breadcrumbs from "../../components/Breadcrumbs";

export const checkRerouteLoggedUser = (store, router) => {
    if (typeof window !== "undefined") {
        router.push("/under_construction");
    }
};

export default function Products() {
    const router = useRouter();
    const store = useStore();
    const { t, i18n } = useTranslation("common");
    const tablet = useMediaQuery({ query: "(max-width: 767px)" });
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 my-1 rounded-full ${tablet ? "bg-[#1D365F]" : "bg-[#FFFFFF]"} transition ease transform duration-300`;
    const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full ${tablet ? "bg-[#1D365F]" : "bg-[#FFFFFF]"} transition ease transform duration-300`;
    const mobile = useMediaQuery({ query: "(max-width: 576px)" });

    const {section} = router.query

    useEffect(() => {
        if(section && section === 'contact_us'){
            scrollToSpecificY(contactUsRef.current, {
                scroll_margin_top: 96,
            });
        }
    },[section])

    useEffect(() => {
        polyfill();
    }, []);

    const [indexProduct, setIndexProduct] = useState(0);
    const [currentProduct, setCurrentProduct] = useState('')

    const contactUsRef = useRef(null);
    const sectionProductRef = useRef(null);
    const topSectionRef = useRef(null);
    const membershipRef = useRef(null);
    const clientsRef = useRef(null);
    const useCasesRef = useRef(null);
    const aboutUsRef = useRef(null);
    const menu = [
        {
            name: t("About Us."),
        },
        {
            name: t("Products"),
        },
        {
            name: t("Use Cases"),
        },
        {
            name: t("Contact Us"),
        },
    ];

    // checkRerouteLoggedUser(store,router);

    const product = [
        {
            image: "trust-scan.png",
            className:
                "cursor-pointer w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 w-custom-small 2xl:w-40 2xl:h-40 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-3.5 relative -ml-4 md:ml-0 lg:ml-16 xl:ml-24 z-10",
            productIndex: 1, // index carousel
            alt: "Trustlink Trust Scan",
        },
        {
            image: "trust-verify.png",
            className:
                "cursor-pointer w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 w-custom-big 2xl:w-52 2xl:h-52 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-5 relative z-10 -mt-12 lg:-mt-24 ml-[30%] md:ml-[40%]",
            productIndex: 0, // index carousel
            alt: "Trustlink Trust Verify",
        },
        {
            image: "trust-live.png",
            className:
                "cursor-pointer w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 w-custom-small 2xl:w-40 2xl:h-40 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-3.5 absolute mt-6 md:bottom-[30vh] z-10 ml-[65%] md:ml-[65%]",
            productIndex: 2, // index carousel
            alt: "Trustlink Trust Live",
        },
        // {
        //     image: 'trust-vision.png',
        //     className: 'cursor-pointer w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 w-custom-big 2xl:w-52 2xl:h-52 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-5 absolute mt-16 md:bottom-28 2xl:bottom-36 z-10 ml-0 md:ml-[15%] lg:ml-[25%] xl:ml-[18%]',
        //     productIndex: 4 , // index carousel
        //     alt : "Trustlink Trust Vision"
        // },
        {
            image: "trust-connect.png",
            className:
                "cursor-pointer w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 w-custom-big 2xl:w-52 2xl:h-52 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-5 absolute mt-16 md:bottom-28 2xl:bottom-36 z-10 ml-0 md:ml-[15%] lg:ml-[25%] xl:ml-[18%]",
            productIndex: 3, // index carousel
            alt: "Trustlink Trust Vision",
        },
        // {
        //     image: 'trust-connect.png',
        //     className: 'cursor-pointer w-20 h-20 lg:w-36 lg:h-36 xl:w-40 xl:h-40 w-custom-big 2xl:w-44 2xl:h-44 flex justify-center items-center shadow-xl bg-white border-[6px] xl:border-8 border-[#FF6703] rounded-full p-5 absolute mt-16 md:bottom-82 md:left-32 lg:top-28 xl:top-44 2xl:top-60 2xl:left-48 z-10 ml-0 md:ml-[15%] lg:ml-[25%] xl:ml-[24%]',
        //     productIndex: 3 , // index carousel
        //     alt : "Trustlink Trust Connect"
        // }
    ];

    const handleClickProduct = (index) => {
        setIndexProduct(index);
        setIsOpen(false);
        sectionProductRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const setIndex = (num) => {
        setIndexProduct(num);
    };

    const onClickLogo = () => {
        setIsOpen(false);
        topSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToSpecificY = (elem, options = {}) => {
        if (!usingMenuFromModal) {
            elem.scrollIntoView({ behavior: "smooth" });
            return;
        }
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        let rect = elem.getBoundingClientRect();
        let scrollToY = rect.y + top;
        if (options.scroll_margin_top) {
            scrollToY -= options.scroll_margin_top;
        }
        window.scroll({ top: scrollToY, behavior: "smooth" });
    };

    const usingMenuFromModal = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <div>
            <StickyHeader
                changeMenuOpen={setIsOpen}
                isMenuOpen={isOpen}
                // onClickProduct={() => {
                //     scrollToSpecificY(sectionProductRef.current, {
                //         scroll_margin_top: 96
                //     })
                // }}
                onClickProduct={handleClickProduct}
                onClickContactUs={() => {
                    scrollToSpecificY(contactUsRef.current, {
                        scroll_margin_top: 96,
                    });
                }}
                onClickClients={() => {
                    scrollToSpecificY(clientsRef.current, {
                        scroll_margin_top: 80,
                    });
                }}
                onClickUseCases={() => {
                    scrollToSpecificY(useCasesRef.current, {
                        scroll_margin_top: 80,
                    });
                }}
                onClickAboutUs={() => {
                    scrollToSpecificY(aboutUsRef.current, {
                        scroll_margin_top: 96,
                    });
                }}
                onClickTopPage={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <div className="overflow-hidden">
                {/*<DrawerSlide menu={menu} isOpen={isOpen} />*/}
                <div className={`fixed w-16 sm:w-20 h-20 top-0 right-4 p-5 ${isOpen ? "z-[999999]" : "z-0"}`}>
                    <button className="flex sticky top-0 right-0 w-[24px] h-[40px] flex-col justify-center group" style={{ visibility: isOpen ? "visible" : "hidden" }} onClick={() => setIsOpen(!isOpen)}>
                        <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`} />
                        <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`} />
                    </button>
                </div>
                <div>
                    <ParticlePage
                        dimention={{
                            width: "100%",
                            height: "100vh",
                        }}
                        numberValue={120}
                        opacity={0.8}
                        className={"home-plexus"}
                    />
                </div>
                <Breadcrumbs currentProduct={'OCR'}/>
                <Footer onClickTop={() => topSectionRef.current.scrollIntoView({ behavior: "smooth" })} />
            </div>
            {/*<div>*/}
            {/*    <ParticlePage*/}
            {/*        dimention={{*/}
            {/*            width: mobile ? '100%' : '50%',*/}
            {/*            height: '100vh'*/}
            {/*        }}*/}
            {/*        numberValue={240}*/}
            {/*        opacity={0.8}*/}
            {/*        className={'home-plexus'}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<section>*/}
            {/*    <AboutMePage />*/}
            {/*</section>*/}
            {/*<section className={'pl-12 md:pl-20 mt-52'}>*/}
            {/*    <Product*/}
            {/*        onClickContact={()=>contactUsRef.current.scrollIntoView({behavior: 'smooth'}) }*/}
            {/*        productRef={sectionProductRef}*/}
            {/*        indexProduct={indexProduct}*/}
            {/*        setIndexProduct={setIndex}*/}
            {/*    />*/}
            {/*</section>*/}
            {/*<UseCase*/}
            {/*    onClickContact={()=>contactUsRef.current.scrollIntoView({behavior: 'smooth'}) }*/}
            {/*/>*/}
            {/*<Banner />*/}
            {/*<TrustedBy />*/}
            {/*<WeAimed />*/}
            {/*<div className="h-[5vh] md:h-[20vh]" />*/}
            {/*<CertificationMembership />*/}
            {/*<div className="h-quarter" />*/}
            {/*<ContactUs sectionRef={contactUsRef } />*/}
            {/*<MapAddress />*/}
            {/*<Footer onClickTop={()=>topSectionRef.current.scrollIntoView({behavior: 'smooth'}) }/>*/}
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // ...(await serverSideTranslations("en", ['common'])),
            // Will be passed to the page component as props
        },
    };
}
