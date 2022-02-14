import {makeAutoObservable, runInAction} from "mobx";
import superagent from "superagent";

const targetForm = 'https://script.google.com/macros/s/AKfycbwlcg4r6KYvuJc24Bgd0thQgnXSMK-0R7xTksWk5RbT5SQpKCw2vm-xaKdO6jAnk3OF/exec';

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

    sendContactUs(formData){
        return superagent.post(targetForm).send(formData).type('form').then(res=>{
            console.log('success');
            return res
        })
    }
}
