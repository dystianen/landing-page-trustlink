import {makeAutoObservable, runInAction} from "mobx";
import superagent from "superagent";
import {http} from "../utils/http";

const targetForm = 'https://script.google.com/macros/s/AKfycbwlcg4r6KYvuJc24Bgd0thQgnXSMK-0R7xTksWk5RbT5SQpKCw2vm-xaKdO6jAnk3OF/exec';
const targetNewsletter = 'https://script.google.com/macros/s/AKfycbylaxKQwmz42BX0-cuHu1DTlUF85IUVlrf6vLG3DMXtGUV1QvGVJhCbkZDuIuL0Z4ZE7g/exec';

export class ContactUsStore {
    isLoggedIn = false;
    isLoginLoading = false;
    ctx;
    token='';

    constructor(ctx) {
        makeAutoObservable(this);
        this.ctx = ctx;
    }


    sendContactUs(formData){
        return superagent.post(targetForm).send(formData).type('form').then(res=>{
            console.log('success');
            http.post('/v1/contact_us').send(formData).then(res=>{
                console.log('success send email')
            }).catch(err=>{
                console.log('failed sen email')
            })
            return res
        })

    }

    sendNewsletter(formData){
        return superagent.post(targetNewsletter).send(formData).type('form').then(res=>{
            return res
        })
    }
}
