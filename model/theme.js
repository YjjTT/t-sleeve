// 业务对象
// theme banner spu sku address user

import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: '/theme/by/names',
            data: {
                names
            }
        })
    }

    async getHomeLoactionA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }

    async getHomeLoactionE() {
        return this.themes.find(t => t.name === Theme.locationE)
    }

    // 一次性数据 加 static
    // 需要等待代码执行,处理后续结果,才加await
    // async 强制保证返回promise,如果是return 1,需要加async,如果本身返回promise,则不需要加async

    static getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static getThemeSpuByName(name) {
        return Http.request({
            url: `/theme/name/${name}/with_spu`
        })
        // 不包含任何实例属性
    }
}

export {
    Theme
}