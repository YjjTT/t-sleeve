import {Http} from "../utils/http";

class Banner {
    static loactionB = 'b-1'
    static locationG = 'b-2'
    static async getHomeLoactionB() {
        return await Http.request({
            url: `/banner/name/${Banner.loactionB}`
        })
    }
    static async getHomeLocationG() {
        return await Http.request({
            url: `/banner/name/${Banner.locationG}`
        })
    }
}
export {
    Banner
}