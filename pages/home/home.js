// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        gridC: [],
        activityD: null,
        themeE: null,
        themeESpu: []
    },
    onLoad(options) {
        this.initAllData()
    },
    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()

        const themeA = await theme.getHomeLoactionA()
        const themeE = await theme.getHomeLoactionE()
        let themeESpu = []
        if(themeE.online){
            const data = await Theme.getHomeLocationESpu()
            if(data){
                themeESpu = data.spu_list.splice(0,8)
            }
        }

        const bannerB = await Banner.getHomeLoactionB()
        const gridC = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        this.setData({
            themeA,
            bannerB,
            gridC,
            activityD,
            themeE,
            themeESpu
        })
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
})
