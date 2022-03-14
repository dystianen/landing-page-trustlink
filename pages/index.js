import {useRouter} from "next/router";
import {appConfig} from "../config/app";
import {isAuthUrl} from "../utils/checkUrl";
import {useStore} from "../components/StoreProvider";
import {Image} from "antd";
import React from "react";
import {ParticlePage} from "../components/Particle";

export const checkRerouteLoggedUser = (store, router)=>{
  if(typeof window !== 'undefined') {
    router.push('/under_construction')
  }
}

export default function Home() {
  const router = useRouter();
  const store = useStore();

  // checkRerouteLoggedUser(store,router);


  return (
      <div style={{padding: 16}}>
        <div>
          <Image preview={false} className="fixed w-14 top-4" src={'/assets/logo/icon-only.png'}/>
          <Image preview={false} className="relative h-14 left-14" src={'/assets/logo/text-only.png'}/>
        </div>
        <section className={'pl-14'}>
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
