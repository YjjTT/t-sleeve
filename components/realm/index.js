// components/realm/index.js
import {FenceGroup} from "../modles/fence-group";

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
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
