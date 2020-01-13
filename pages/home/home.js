// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: []
    },
    onLoad(options) {
        this.initAllData()
    },
    async initAllData() {
        const themeA = await Theme.getHomeLoactionA()
        const bannerB = await Banner.getHomeLoactionB()
        const grid = await Category.getGridCategory()
        this.setData({
            themeA: themeA[0],
            bannerB,
            grid
        })
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
})
