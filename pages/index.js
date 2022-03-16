import { useRouter } from "next/router";
import { appConfig } from "../config/app";
import { isAuthUrl } from "../utils/checkUrl";
import { useStore } from "../components/StoreProvider";
import { Image } from "antd";
import React, { useState } from "react";
import { ParticlePage } from "../components/Particle";
import { DrawerSlide } from "../components/DrawerSlide";

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
    <div style={{ padding: 16 }}>
      <DrawerSlide menu={menu} isOpen={isOpen} />
      <div className={'fixed w-20 h-20 transparent top-2/4 left-0 p-5'} style={{ zIndex: 10000 }}>
        <button
          className="flex flex-col w-full h-full justify-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${genericHamburgerLine} self-start ${isOpen
              ? "w-full rotate-45 translate-y-3 opacity-100"
              : "w-4 opacity-100"
            }`}
          />
          <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div className={`${genericHamburgerLine} self-end ${isOpen
              ? "w-full -rotate-45 -translate-y-3 opacity-100"
              : "w-4 opacity-100"
            }`}
          />
        </button>
      </div>
      <div className={'flex flex-row'} style={{ justifyContent: 'space-between' }}>
        <div>
          <Image preview={false} className="fixed w-14 top-4" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }} />
          <Image preview={false} className="relative h-14 left-14" src={'/assets/logo/text-only.png'} />
        </div>
        <div className={'choose-lang flex flex-row mr-32 mt-10'}>
          <p className={'cursor-pointer'}>EN</p>
          <div className={'w-px h-5 mt-1 mx-2'} style={{ backgroundColor: '#818FA6' }} />
          <p className={'cursor-pointer'}>ID</p>
        </div>
      </div>
      <div className={'flex flex-row'}>
        <section className={'pl-20'}>
          <div className={'home-next-generation mt-30'}>
            <span>Next</span>
            <span className={'-mt-8'}>― Generation</span>
          </div>
          <div className={'home-next-generation-sub'}>
            <span>Digital biometric</span>
            <span style={{ marginTop: -20 }}>Identification system</span>
          </div>
        </section>
        <section>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 15,
            borderStyle: 'solid',
            borderWidth: 8,
            borderColor: '#FE6601',
            borderRadius: '50% / 50%',
            width: 130,
            height: 130
          }}>
            <Image preview={false} src={'/assets/logo/trust-scan/trust-scan.png'} className={'z-10 mt-2'} />
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 20,
            borderStyle: 'solid',
            borderWidth: 8,
            borderColor: '#FE6601',
            borderRadius: '50% / 50%',
            width: 180,
            height: 180,
            marginTop: '-50%',
            marginLeft: '150%'
          }}>
            <Image preview={false} src={'/assets/logo/trust-connect/trust-connect.png'} className={'z-10 mt-2'} />
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 15,
            borderStyle: 'solid',
            borderWidth: 8,
            borderColor: '#FE6601',
            borderRadius: '50% / 50%',
            width: 130,
            height: 130,
            marginTop: '100%',
            marginLeft: '250%'
          }}>
            <Image preview={false} src={'/assets/logo/trust-live/trust-live.png'} className={'z-10 mt-1'} />
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 25,
            borderStyle: 'solid',
            borderWidth: 8,
            borderColor: '#FE6601',
            borderRadius: '50% / 50%',
            width: 180,
            height: 180,
            marginTop: '-20%',
            marginLeft: '50%'
          }}>
            <Image preview={false} src={'/assets/logo/trust-verify/trust-verify.png'} className={'z-10 ml-1'} />
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
    </div>
  )
}
