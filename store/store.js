import {enableStaticRendering} from 'mobx-react-lite';
import {TokenUtil} from "../utils/token";
import {AuthenticationStore} from "./authentication";
import {ContactUsStore} from "./contact_us";
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

let store;

export class Store {
    authentication = new AuthenticationStore(this);
    contact_us = new ContactUsStore(this);

    constructor() {
        TokenUtil.loadToken();
        if(TokenUtil.accessToken) {
            this.authentication.isLoggedIn = true;
            this.authentication.setToken(TokenUtil.accessToken)
        }
    }

    hydrate = (data) => {
        if (!data) {

        }
    }
}
