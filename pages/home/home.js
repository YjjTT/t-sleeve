// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";
import {SpuPaging} from "../../model/spu-paging";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        bannerG: null,
        gridC: [],
        activityD: null,
        themeE: null,
        themeESpu: [],
        themeF: null,
        themeH: null,
        spuPaging: null,
        loadingType: 'loading'
    },
    async onLoad(options) {
        this.initAllData()
        this.initBottomSpuList()
    },
    async initBottomSpuList() {
        const paging = await SpuPaging.getLatestPaging()
        this.data.spuPaging = paging
        const data = await paging.getMoreData()
        if(!data){
            return
        }
        wx.lin.renderWaterFlow(data.items)
    },
    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()

        const themeA = await theme.getHomeLoactionA()
        const themeE = await theme.getHomeLoactionE()
        const themeF = await theme.getHomeLoactionF()
        const themeH = await theme.getHomeLoactionH()
        let themeESpu = []
        if(themeE.online){
            const data = await Theme.getHomeLocationESpu()
            if(data){
                themeESpu = data.spu_list.splice(0,8)
            }
        }

        const bannerB = await Banner.getHomeLoactionB()
        const bannerG = await Banner.getHomeLocationG()

        const gridC = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        this.setData({
            themeA,
            bannerB,
            bannerG,
            gridC,
            activityD,
            themeE,
            themeESpu,
            themeF,
            themeH
        })
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: async function () {
        const data = await this.data.spuPaging.getMoreData()
        if(!data){
            return
        }
        wx.lin.renderWaterFlow(data.items)
        if (!data.moreData){
            this.setData({
                loadingType: 'end'
            })
        }
    },
    onShareAppMessage: function () {
    }
})
