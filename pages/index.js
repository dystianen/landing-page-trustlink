import {useRouter} from "next/router";
import {appConfig} from "../config/app";
import {isAuthUrl} from "../utils/checkUrl";
import {useStore} from "../components/StoreProvider";
import {Image} from "antd";
import React from "react";

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
      </div>
  )
}
