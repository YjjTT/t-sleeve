// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null
    },
    onLoad(options) {
        this.initAllData()
    },
    async initAllData() {
        const themeA = await Theme.getHomeLoactionA()
        const bannerB = await Banner.getHomeLoactionB()
        this.setData({
            themeA: themeA[0],
            bannerB
        })
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
})
