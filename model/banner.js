import {Http} from "../utils/http";

class Banner {
    static loactionB = 'b-1'
    static async getHomeLoactionB() {
        return await Http.request({
            url: `/banner/name/${Banner.loactionB}`
        })
    }
}
export {
    Banner
}