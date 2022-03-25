import { useRouter } from "next/router";
import { appConfig } from "../config/app";
import { isAuthUrl } from "../utils/checkUrl";
import { useStore } from "../components/StoreProvider";
import { Image } from "antd";
import React, { useState } from "react";
import { ParticlePage } from "../components/Particle";
import { DrawerSlide } from "../components/DrawerSlide";
import { Product } from "../components/Product";
import UseCase from "../components/UseCase";
import Footer from "../components/Footer";
import AboutMePage from "../components/AboutUs";
import Banner from "../components/Banner";
import TrustedBy from "../components/TrustedBy";
import WeAimed from "../components/We Aimed";
import { CertificationMembership } from "../components/CertificationMembership";
import ContactUs from "../components/ContactUs";
export const checkRerouteLoggedUser = (store, router) => {
  if (typeof window !== 'undefined') {
    router.push('/under_construction')
  }
}

export default function Home() {
  const router = useRouter();
  const store = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-orange transition ease transform duration-300`;
  const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-orange transition ease transform duration-300`;

  const menu = [
    {
      name: 'About Us.',
    }, {
      name: 'Products.',
    }, {
      name: 'Use Cases.',
    }, {
      name: 'For Developers.',
    }, {
      name: 'For Customers.',
    },
  ]

  // checkRerouteLoggedUser(store,router);


  return (
    <div className={'overflow-hidden'}>
      <div>
        <DrawerSlide menu={menu} isOpen={isOpen} />
        <div className={'fixed w-16 sm:w-20 h-20 transparent top-2/4 left-0 p-5'} style={{ zIndex: 10000 }}>
          <button
            className="flex flex-col w-full h-full justify-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`${genericHamburgerLine} self-start ${isOpen
              ? "w-full rotate-45 translate-y-3 opacity-100"
              : "w-3 sm:w-4 opacity-100"
              }`}
            />
            <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className={`${genericHamburgerLine} self-end ${isOpen
              ? "w-full -rotate-45 -translate-y-3 opacity-100"
              : "w-3 sm:w-4 opacity-100"
              }`}
            />
          </button>
        </div>
        <div className={'flex flex-row'} style={{ justifyContent: 'space-between' }}>
          <div>
            <Image preview={false} className="fixed w-14 top-4" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }} />
            <Image preview={false} className="relative h-14 left-14 mt-4" src={'/assets/logo/text-only.png'} />
          </div>
          <div className={'choose-lang flex flex-row mr-10 mt-8 md:mr-32 lg:mt-10'}>
            <p className={'cursor-pointer font-medium'}>EN</p>
            <div className={'w-px h-5 mt-1 mx-2'} style={{ backgroundColor: '#818FA6' }} />
            <p className={'cursor-pointer font-medium'}>ID</p>
          </div>
        </div>
        <div className={'grid grid-cols-2'}>
          <section className={'flex justify-start'}>
            <div className={'flex items-end justify-center w-32'}>
              <div className={'auto-rows-auto invisible ml-8 lg:ml-3 xl:ml-0 md:visible'}><p className={'w-max -rotate-180'} style={{ color: '#161D24', fontFamily: 'Montserrat', letterSpacing: '0.15rem', fontSize: '0.6rem', writingMode: 'vertical-lr', textOrientation: 'sideways' }}>SCROLL DOWN</p>
                <Image preview={false} src={'/assets/scroll-down.svg'} />
              </div>
            </div>
            <div className={'w-max pl-6 md:pl-5 lg:pl-5 xl:pl-0'}>
              <div className={'home-next-generation mt-30 text-5xl lg:text-6xl'}>
                <span>Next</span>
                <span>― Generation</span>
              </div>
              <div className={'home-next-generation-sub leading-tight text-3xl lg:text-4xl mt-5'}>
                <span>Digital biometric Identification system.</span>
              </div>
            </div>
          </section>
          <section className={'invisible md:visible'}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderStyle: 'solid',
              borderWidth: 8,
              borderColor: '#FE7519',
              boxShadow: '0px 12px 12px 9px #ff66001a',
              borderRadius: '50% / 50%',
              padding: 15,
            }}
              className={'w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center shadow-xl'}>
              <Image preview={false} src={'/assets/logo/trust-scan/trust-scan.png'} className={'z-10 justify-center'} />
            </div>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: 20,
              borderStyle: 'solid',
              borderWidth: 8,
              borderColor: '#FE7519',
              boxShadow: '0px 12px 12px 9px #ff66001a',
              borderRadius: '50% / 50%',
              marginTop: '-17%',
              marginLeft: '40%',
            }}
              className={'w-44 h-44 lg:w-52 lg:h-52 flex justify-center items-center shadow-xl'}>
              <Image preview={false} src={'/assets/logo/trust-connect/trust-connect.png'} className={'z-10 justify-center'} />
            </div>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: 15,
              borderStyle: 'solid',
              borderWidth: 8,
              borderColor: '#FE7519',
              boxShadow: '0px 12px 12px 9px #ff66001a',
              borderRadius: '50% / 50%',
              marginTop: '17%',
              marginLeft: '65%',
            }}
              className={'w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center shadow-xl'}>
              <Image preview={false} src={'/assets/logo/trust-live/trust-live.png'} className={'z-10 justify-center'} />
            </div>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: 25,
              borderStyle: 'solid',
              borderWidth: 8,
              borderColor: '#FE7519',
              boxShadow: '0px 12px 12px 9px #ff66001a',
              borderRadius: '50% / 50%',
              marginTop: '-10%',
              marginLeft: '7%',
            }}
              className={'w-44 h-44 lg:w-52 lg:h-52 flex justify-center items-center shadow-xl'}>
              <Image preview={false} src={'/assets/logo/trust-verify/trust-verify.png'} className={'z-10 justify-center'} />
            </div>
          </section>
        </div>
        <div>
          <ParticlePage
            dimention={{
              width: '50%',
              height: '100vh'
            }}
            numberValue={240}
            opacity={0.8}
            className={'home-plexus'}
          />
        </div>
        <section className={"AboutMe"}>
          <AboutMePage />
        </section>
        <section className={'pl-20 mt-52'}>
          <Product />
          <div>
          <ParticlePage
            dimention={{
              width: '50%',
              height: '100vh'
            }}
            numberValue={240}
            opacity={0.8}
            className={'home-plexus'}
          />
        </div>
        </section>
      </div>
      <div className="h-quarter" />
      <UseCase />
      <Banner />
      <TrustedBy />
      <WeAimed />
      <div className="h-quarter" />
      <CertificationMembership />
      <div className="h-quarter" />
      <ContactUs />
      <Footer />
    </div>
  )
}
