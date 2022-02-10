import superagent from "superagent";
import superagentIntercept from 'superagent-intercept';
import {appConfig} from "../config/app";
import {TokenUtil} from "./token";
import {attachSuperagentLogger} from "./http_logger";

let AuthIntercept = superagentIntercept((err, res) => {
    if (res && res.status === 401) {
        TokenUtil.clearAccessToken();
        TokenUtil.persistToken();
        TokenUtil.persistColorToken();
        window.location.href = "/login";
    }
});

export const http = {
    fetcher: async (url) => {
        let req = superagent.get(appConfig.apiUrl + url)
            .use(AuthIntercept)
            .use(attachSuperagentLogger);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }

        const resp = await req;

        // if(resp.body.results) {
        //     return resp.body.results;
        // }
        return resp.body;
    },
    get: (url, opts = {}) => {
        let req = superagent.get(appConfig.apiUrl + url)
            .use(AuthIntercept)
            .use(attachSuperagentLogger);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }
        return req;
    },
    post: (url, opts) => {
        let req = superagent.post(appConfig.apiUrl + url)
            .use(AuthIntercept)
            .use(attachSuperagentLogger);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }
        return req;
    },
    put: (url, opts) => {
        let req = superagent.put(appConfig.apiUrl + url)
            .use(AuthIntercept)
            .use(attachSuperagentLogger);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }
        return req;
    },
    del: (url, opts) => {
        let req = superagent.del(appConfig.apiUrl + url)
            .use(AuthIntercept)
            .use(attachSuperagentLogger);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }
        return req;
    },
    upload: (url, file) => {
        console.log(appConfig, "appconfig")
        let req = superagent
            .post(appConfig.imageApiUrl + url)
            .use(AuthIntercept)
            .attach('file', file);
        if (TokenUtil.accessToken) {
            req = req.set('Authorization', 'Bearer ' + TokenUtil.accessToken);
        }

        return req;
    },
    uploadAntd: (args) => {
        const file = args.file;
        const request = http.upload(file)
            .use(AuthIntercept);

        request
            .on('progress', event => {
                args.onProgress(event);
            })
            .then(it => {
                args.onSuccess(it);
            }).catch(err => {
            args.onError(err);
        });

        return request;
    }
};
