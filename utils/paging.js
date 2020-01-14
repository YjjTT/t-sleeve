class Paging {
    // 不关心细节
    // 需要下一页数据,是否能给
    // 需要保持状态->实例化 new Paging()

    start
    count
    url
    locker = false

    constructor(url, count=10,start=0) {
        this.start = start
        this.count = count
        this.url = url
    }
    getMoreData() {
        // 生成器 Generator next...

    }
    // 获取数据锁
    _getLocker() {
        if(this.locker){
            return false
        }
        this.locker = true
        return true
    }
    // 释放数据锁
    _releaseLocker() {
        this.locker = false
    }
}