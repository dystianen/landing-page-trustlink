import {useEffect} from "react";
import {useRouter} from "next/router";
import {useStore} from "../components/StoreProvider";
import {isAuthUrl} from "../utils/checkUrl";

export function useAuthenticatedPage() {
    // const router = useRouter();
    const store = useStore();

    useEffect(() => {
        store.ui.colorSetting()
    }, []);

    if (typeof window === 'undefined') {
        return;
    }

    const isChoosePageScreen = window.location.href.includes('/choose_app');
    const isLoginPage = window.location.href.includes('/login');
    const isNwp = store.applications.isNWP;

    if(!isNwp && store.authentication.isLoggedIn && !isChoosePageScreen){
        window.location.href="/choose_app"
    }

    if(store.authentication.isLoggedIn && isAuthUrl(window)) {
        if(!isChoosePageScreen){
            window.location.href='/choose_app';
        }
    } else if(!store.authentication.isLoggedIn){
        if(!isLoginPage){
            window.location.href='/login';
        }
    }
}

export function useUnauthenticatedPage() {
    const router = useRouter();
    const store = useStore();

    useEffect(() => {
        store.ui.colorSetting()
    }, []);

    if (typeof window === 'undefined') {

    }

    // if (store.authentication.isLoggedIn) {
    //     router.push('/dashboard');
    // }

}
