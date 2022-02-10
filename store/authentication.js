import {makeAutoObservable, runInAction} from "mobx";

export class AuthenticationStore {
    isLoggedIn = false;
    isLoginLoading = false;
    ctx;
    token='';

    constructor(ctx) {
        makeAutoObservable(this);
        this.ctx = ctx;
    }

    async login({username, password}) {
        // runInAction(() => {
        //     this.isLoginLoading = true;
        // });
        // console.log("prepare")
        // try {
        //     const result = await authenticationRepository.api.login({username, password});
        //     TokenUtil.setAccessToken(result.body.token);
        //     TokenUtil.persistToken();
        //     TokenUtil.setColorTheme(result.body.color_theme);
        //     TokenUtil.persistColorToken();
        //     this.setToken(result.body.token);
        //     runInAction(() => {
        //         this.isLoginLoading = false;
        //         this.isLoggedIn = true;
        //     });
        //     return result;
        // } catch (e) {
        //     runInAction(() => {
        //         this.isLoginLoading = false;
        //     });
        //     throw e;
        // }
    }

    setIsLogin(val){
        this.isLoggedIn = val;
    }

    setToken(token){
        this.token = token;
    }

    logout() {
        // TokenUtil.clearAccessToken();
        // TokenUtil.persistToken();
        // TokenUtil.clearColorTheme();
        // TokenUtil.persistColorToken();
        // this.isLoggedIn = false;
    }
}
