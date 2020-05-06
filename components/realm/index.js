// components/realm/index.js
import {FenceGroup} from "../modles/fence-group";
import {Judger} from "../modles/judger";
import {Spu} from "../../model/spu";
import {Cell} from "../modles/cell";

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
        this.processNoSpec(spu)
      }
      else {
        this.processHasSpec(spu)
      }
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
    processNoSpec(spu) {
      this.setData({
        noSpec: true
      })
      this.bindSkuData(spu.sku_list[0])
    },
    processHasSpec(spu) {
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
      this.bindTipData()
      this.bindFenceGroupData(fencesGroup)
    },
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,
        skuIntact: this.data.judger.isSkuInTact()
      })
    },
    bindSkuData(sku) {
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
        skuIntact: this.data.judger.isSkuInTact()
      })
    },

    bindTipData() {
      this.setData({
        skuIntact: this.data.judger.isSkuInTact(),
        currentValues: this.data.judger.getCurrentValues(),
        missingKeys: this.data.judger.getMissingKeys()
      })
    },

    bindFenceGroupData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences
      })
    },
    onCellTap(e) {
      const data = e.detail.cell
      const {x, y} = e.detail
      const cell = new Cell(data.spec)
<<<<<<< HEAD
      cell.status = data.status
=======
>>>>>>> 91387a58371655607c83689f059d2d82d5d5dace
      const judger = this.data.judger
      judger.judge(cell,x,y)
      const skuIntact = judger.isSkuInTact()
      if (skuIntact) {
        const currentSku = judger.getDeterminateSku()
        this.bindSkuData(currentSku)
      }
      this.bindTipData()
      this.bindFenceGroupData(judger.fenceGroup)
    }
  }
})
