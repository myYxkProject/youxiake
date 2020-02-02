import axios from 'utils/axios.js';
import { getItem } from 'utils/webStorage.js';
import { resolve } from 'url';
import { reject } from 'q';

// // 登录
export const UserLogin = (userName,passWord)=>{
    return new Promise((resolve,reject)=>{
        let url = '/myData/v1/admin/user/login'
        axios.post(url,{userName,passWord})
        .then((res)=>{
            console.log(res)
            if(res.data.err==0){
                resolve(res)
            }else{
                reject(res)
            }
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

// 登录
// export const UserLogin = (userName, passWord) => {
//     return new Promise((resolve, reject) => {
//         let url = '/myData/v1/admin/user/login'
//         axios.post(url, { userName, passWord })
//             .then((res) => {
//                 console.log('res', res)
//                 if (res.err == 0) {
//                     resolve(res)
//                 } else {
//                     reject(res)
//                 }
//             })
//             .catch((err) => {
//                 reject(err)
//             })
//     })
// }

// 登录
// export const UserLogin = async (userName, passWord) => {

//     let url = '/myData/v1/admin/user/login'
//     let result = await axios.post(url, { userName, passWord })


//     // console.log(result)
//     if(result.err == 0){
//         return result
//     }else{
//         throw result
//     }
// }

// 登出
// export const UserLogout = async () => {
//     let url = '/hehe/v1/admin/user/logout'
//     let uid = getItem('uid') || ''
//     let result = await axios.post(url, { uid })
//     if (result.err == 0){
//         return result
//     }else{
//         // throw 抛出错误
//         throw result
//     }
// }
