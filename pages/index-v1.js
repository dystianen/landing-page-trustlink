import { useRouter } from "next/router";
import { appConfig } from "../config/app";
import { isAuthUrl } from "../utils/checkUrl";
import { useStore } from "../components/StoreProvider";
import { Button, Image } from "antd";
import React, { useEffect, useRef, useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import StickyHeader from "../components/StickyHeader";
import { MapAddress } from "../components/MapAddress";
import WhyUsPage from "../components/WhyUs";
import { scrollIntoView, polyfill } from "seamless-scroll-polyfill";
import ContactHubSpots from "../components/ContactUs/ContactHubSpot";

export const checkRerouteLoggedUser = (store, router) => {
  if (typeof window !== "undefined") {
    router.push("/under_construction");
  }
};

export default function Home() {
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
        <div className={"relative top-0 height-top"} ref={topSectionRef}>
          {/* <div className={'absolute w-full top-0 flex flex-row'} style={{ justifyContent: 'space-between' }}>
                        <div className={'flex items-center'}>
                            <Image preview={false} className="cursor-pointer fixed w-14 md:w-20 top-4" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }} onClick={onClickLogo} />
                            <Image preview={false} className="relative h-14 md:h-20 w-auto left-12 md:left-16 top-2 md:top-4" src={'/assets/logo/text-only.png'} />
                        </div>
                        <div className={'choose-lang flex flex-row mr-6 md:mr-10 lg:mr-12 mt-8 z-30'}>
                            <Link href={'/'} locale="en">
                                <p className={`cursor-pointer font-medium ${i18n.language === 'en' && 'text-[#FE7519]'}`}>EN</p>
                            </Link>
                            <div className={'w-px h-5 mt-1 mx-2'} style={{ backgroundColor: '#818FA6' }} />
                            <Link href={'/'} locale="id">
                                <p className={`cursor-pointer font-medium ${i18n.language === 'id' && 'text-[#FE7519]'}`}>ID</p>
                            </Link>
                        </div>
                    </div> */}
          <div className={"relative px-4 sm:px-0 w-full sm:pl-12 h-full"}>
            <section className={"flex justify-start w-auto h-full"}>
              {/*<div className={'flex items-end justify-center w-32'}>*/}
              {/*<div className={'auto-rows-auto invisible ml-8 lg:ml-3 xl:ml-0 md:visible'}><p className={'w-max -rotate-180'} style={{ color: '#161D24', fontFamily: 'Montserrat', letterSpacing: '0.15rem', fontSize: '0.6rem', writingMode: 'vertical-lr', textOrientation: 'sideways' }}>SCROLL DOWN</p>*/}
              {/*    <Image preview={false} src={'/assets/scroll-down.svg'} />*/}
              {/*</div>*/}
              {/*</div>*/}
              <div className={"h-full md:min-h-screen lg:pl-8 flex flex-col justify-center"}>
                {/*<div className={'home-next-generation text-3xl sm:text-4xl md:text-5xl lg:text-5xl'}>*/}
                {/*    <span className={'mb-2'}><span className={''}>Trust-Centric Solution</span> For Identity Management  And Open Finance Platform</span>*/}
                {/*</div>*/}
                <div className={"w-auto w-tablet lg:w-auto xl:w-[48rem] home-next-generation-sub font-medium z-10"}>
                  <span className={"block leading-tight"}>
                    <h1 className={"text-[#05204D] font-bold block text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl mb-4"}>{t("Trust Centric Solution")}</h1>
                    <h2 className={"text-[#05204D] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[3.25rem]"}>{t("For Identity Management")}</h2>
                    {/*<br/> {t('And Open Finance Platform')}*/}
                  </span>
                  <div>
                    <p
                      className={"mt-8 text-left w-auto sm:w-[24rem] md:w-[36rem] lg:w-[36.rem] xl:w-[42rem] max-w-[22rem] sm:max-w-full text-sm md:text-xl xl:text-2xl tracking-tighter sm:tracking-normal font-normal normal-case"}
                      style={{ lineHeight: 1.75 }}
                    >
                      {t("Desc Top Page")}
                    </p>
                  </div>
                  <div>
                    <Button className={"text-white text-sm lg:text-base xl:text-lg border-[#FF6703] bg-[#FF6703] montserrat rounded-lg h-12 w-36 md:w-48"} onClick={() => aboutUsRef.current.scrollIntoView({ behavior: "smooth" })}>
                      <span id={'click-top-page-get-started'}>{t("Get Started")}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            <section className={"absolute top-[22rem] m-top md:top-0 right-10 md:-right-10 lg:-right-20 xl:-right-28 w-3/5 h-1/2 md:h-full mt-6 md:mt-0 mb-24 md:mb-0 hidden lg:inline"}>
              {product.map((it, index) => (
                <div key={index} className={it.className} onClick={() => handleClickProduct(it.productIndex)}>
                  <Image preview={false} src={`/assets/images/${it.image}`} alt={`${it.alt}`} className={"z-10 justify-center"} id={`click-top-page-product-${it.image}`}/>
                </div>
              ))}
            </section>
          </div>
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
        {/*<div className="space-mobile" />*/}
        <section>
          <AboutMePage sectionRef={aboutUsRef} />
        </section>
        <section className={"pl-0 lg:pl-20 mt-14 lg:mt-24"}>
          <Product onClickContact={() => contactUsRef.current.scrollIntoView({ behavior: "smooth" })} productRef={sectionProductRef} indexProduct={indexProduct} setIndexProduct={setIndex} />
        </section>

        <WhyUsPage />

        <UseCase sectionRef={useCasesRef} onClickContact={() => contactUsRef.current.scrollIntoView({ behavior: "smooth" })} />
        <Banner />
        <TrustedBy sectionRef={clientsRef} />
        <WeAimed />
        {/* <div className="h-[20vh]" /> */}
        <CertificationMembership sectionRef={membershipRef} />
        <div className="h-[10vh] sm:h-quarter" />
        <ContactHubSpots sectionRef={contactUsRef} />
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
