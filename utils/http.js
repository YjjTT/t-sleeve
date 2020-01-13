import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appKey: config.appKey,
                clientKey: config.clientkey
            }
        })
        return res.data
    }
}

// 异步调用方式
// 1.callback 2.promise 3.async await
export {
    Http
}