import {Http} from "../utils/http";

class Spu {
    static async getLatest() {
        Http.request({
            url: ``
        })
    }
    // 分页
    //1. 一条数据都没有
    //2. 最后一页,还有没有更多的数据
    //3. 累加 100 1-20, 21-40, ..., setData 重新渲染页面
    //4. 非分页数据: a. 正在加载 loading b. 数据为空
    //5. 分页数据: a. 正在加载 b.加载完成 c.没有更多数据
    //6. 上滑页面触底 加载 避免用户重复发送请求 redis 数据锁
    // 防抖 截流: 1.button 点击完禁用 2.验证码倒计时 3.模态loading 4.数据锁
    //7.start count 封装
    // a.类为核心 b.函数为核心, ES6 class 使得JS和其他主流语言有了相同的思维方式 OO
}
export {
    Spu
}