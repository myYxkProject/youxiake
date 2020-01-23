// 引入axios
import axios from 'utils/axios.js'



// 获取banner数据
export const getHomeData = () => {
    return new Promise((resolve, reject) => {
        // 数据接口
        let url = '/banner/api/index/part?sitecode=5&city_id=5&refreshCount=83'
        axios.get(url)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

