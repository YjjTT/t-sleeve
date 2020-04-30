class Matrix {
    m
    constructor(matrix) {
        this.m = matrix
    }
    get rowsNum() {
        return this.m.length
    }
    get colsNum () {
        return this.m[0].length
    }
    transpose() {
        const desArr = []
        for (let j=0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i=0; i<this.rowsNum;i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }
}
export {
    Matrix
}
