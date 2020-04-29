import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList = []
    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }
    // initFences() {
    //     const matrix = this._createMatrix(this.skuList)
    //     const fences = []
    //     let currentJ = -1
    //
    //     matrix.forEach((element,i,j)=>{
    //         if (currentJ !== j) {
    //             // 开启一个新列, 创建一个新的Fence
    //             currentJ = j
    //             fences[currentJ] = this._createFence(element)
    //         }
    //         fences[currentJ].pushValueTitle(element.value)
    //     })
    //     console.log(fences)
    //     return fences
    // }

    // _createFence(element) {
    //     const fence = new Fence(element)
    //     return fence
    // }
    initFences () {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        AT.forEach(r => {
            const fence = new Fence(r)
            fence.init()
            fences.push(fence)
        })
        console.log(fences)
        return fences
    }
    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku=>{
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

}
export {
    FenceGroup
}
