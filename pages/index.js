import {useRouter} from "next/router";
import {appConfig} from "../config/app";
import {isAuthUrl} from "../utils/checkUrl";
import {useStore} from "../components/StoreProvider";

export const checkRerouteLoggedUser = (store, router)=>{
  if(typeof window !== 'undefined') {
    router.push('/under_construction')
  }
}

export default function Home() {
  const router = useRouter();
  const store = useStore();

  checkRerouteLoggedUser(store,router);


  return (
      <div></div>
  )
}
