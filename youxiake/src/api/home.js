// 引入axios
import axios from 'utils/axios.js'



// 获取banner数据
export const getHomeData = () => {
    return new Promise((resolve, reject) => {
        // 数据接口
        let url = '/yxk/api/index/part?sitecode=5&city_id=5&refreshCount=83'
        axios.get(url)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// 获取首页瀑布流数据
export const getFlowRecommend = (type=1,page=1) => {
    return new Promise((resolve, reject) => {
        let url = `/yxk/api/index/flowrecommend?sitecode=5&city_id=5&type=${type}&page=${page}`
       axios.get(url)
       .then((data)=>{
           resolve(data)
       })
       .catch((err)=>{
           reject(err)
       })
    })
}