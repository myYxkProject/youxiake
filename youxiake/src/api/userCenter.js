// 引入axios
import axios from 'utils/axios.js'



// 获取在线客服数据
export const getOnLineKeFu = () => {
    return new Promise((resolve,reject)=>{
        // 数据接口
        let url = '/yxk/usercenter/onlinekefu'
        axios.get(url)
        .then((data)=>{
            // console.log(data)
            resolve(data.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


// 获取userrecommends数据
export const getUserRecommends=()=>{
    return new Promise((resolve,reject)=>{
        let url = '/yxk/api/lines/userrecommends'
        axios.get(url)
        .then((data)=>{
            resolve(data.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}