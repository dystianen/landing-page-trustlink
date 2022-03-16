import {useRouter} from "next/router";
import {appConfig} from "../config/app";
import {isAuthUrl} from "../utils/checkUrl";
import {useStore} from "../components/StoreProvider";
import {Image} from "antd";
import React, {useState} from "react";
import {ParticlePage} from "../components/Particle";
import {DrawerSlide} from "../components/DrawerSlide";

export const checkRerouteLoggedUser = (store, router)=>{
  if(typeof window !== 'undefined') {
    router.push('/under_construction')
  }
}

export default function Home() {
  const router = useRouter();
  const store = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-4 my-1 rounded-full bg-orange transition ease transform duration-300`;
    const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-orange transition ease transform duration-300`;

    const menu = [
        {
            name: 'About Us.',
        },{
            name: 'Products.',
        },{
            name: 'Use Cases.',
        },{
            name: 'For Developers.',
        },{
            name: 'For Customers.',
        },
    ]

  // checkRerouteLoggedUser(store,router);


  return (
      <div style={{padding: 16}}>
          <DrawerSlide menu={menu} isOpen={isOpen} />
          <div className={'fixed w-20 h-20 transparent top-2/4 left-0 p-5'} style={{zIndex: 10000}}>
              <button
                  className="flex flex-col w-full h-full justify-center group"
                  onClick={() => setIsOpen(!isOpen)}
              >
                  <div className={`${genericHamburgerLine} self-start ${
                      isOpen
                          ? "w-full rotate-45 translate-y-3 opacity-100"
                          : "opacity-100"
                    }`}
                  />
                  <div className={`${genericHamburgerLine2} ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div className={`${genericHamburgerLine} self-end ${
                      isOpen
                          ? "w-full -rotate-45 -translate-y-3 opacity-100"
                          : "opacity-100"
                    }`}
                  />
              </button>
          </div>
        <div>
          <Image preview={false} className="fixed w-14 top-4" src={'/assets/logo/icon-only.png'} style={{zIndex: 10000}}/>
          <Image preview={false} className="relative h-14 left-14" src={'/assets/logo/text-only.png'}/>
        </div>
        <section className={'pl-20'}>
          <div className={'home-next-generation mt-30'}>
              <span>Next</span>
              <span>― Generation</span>
          </div>
            <div className={'home-next-generation-sub'}>
              <span>Digital biometric</span>
              <span style={{marginTop:-20}}>Identification system</span>
            </div>
        </section>
          <div>
              <ParticlePage
                dimention={{
                    width: '50%',
                    height:'100vh'
                }}
                numberValue={240}
                opacity={0.8}
                className={'home-plexus'}
              />
          </div>
      </div>
  )
}
