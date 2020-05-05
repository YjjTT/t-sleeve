// components/realm/index.js
import {FenceGroup} from "../modles/fence-group";
import {Judger} from "../modles/judger";
import {Spu} from "../../model/spu";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },
  observers: {
    'spu': function (spu) {
      if (!spu) {
        return
      }
      if (Spu.isNoSpec(spu)) {
        this.setData({
          noSpec: true
        })
        this.bindSkuData(spu.sku_list[0])
      }
      const fencesGroup = new FenceGroup(spu)
      fencesGroup.initFences()
      const judger = new Judger(fencesGroup)
      this.data.judger = judger

      const defaultSku = fencesGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
      }
      else {
        this.bindSpuData()
      }
      this.bindInitData(fencesGroup)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    judger: Object,
    previewImg: String,
    title: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price
      })
    },
    bindSkuData(sku) {
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock
      })
    },
    bindInitData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences
      })
    },

    onCellTap(e) {
      const {cell, x, y} = e.detail
      const judger = this.data.judger
      judger.judge(cell,x,y)
      this.setData({
        fences: judger.fenceGroup.fences
      })
    }
  }
})
