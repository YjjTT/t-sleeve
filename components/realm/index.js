// components/realm/index.js
import {FenceGroup} from "../modles/fence-group";
import {Judger} from "../modles/judger";

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
      const fencesGroup = new FenceGroup(spu)
      fencesGroup.initFences()
      const judger = new Judger(fencesGroup)
      this.data.judger = judger
      this.bindInitData(fencesGroup)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    judger: Object
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
