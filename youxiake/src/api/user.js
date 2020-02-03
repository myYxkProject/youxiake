import axios from 'utils/axios.js';
import { getItem } from 'utils/webStorage.js';
import { resolve } from 'url';
import { reject } from 'q';

// // 登录
export const UserLogin = (userName, passWord) => {
    return new Promise((resolve, reject) => {
        let url = '/myData/v1/admin/user/login'
        axios.post(url, { userName, passWord })
            .then((res) => {
                console.log(res)
                if (res.data.err == 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// 登出
export const UserLogout = async () => {
    let url = '/myData/v1/admin/user/logout'
    let uid = getItem('uid') || ''
    let token = getItem('token') || ''
    console.log(uid, token)
    let result = await axios.post(url, { uid, token })
    if (result.data.err == 0) {
        return result
    } else {
        // throw 抛出错误
        throw result
    }
}

// 获取登录用户信息
export const getUser = async () => {
    let url = '/myData/v1/admin/root/list'
    let uid = getItem('uid') || ''
    let token = getItem('token')
    let result = await axios.post(url, { uid, token })
    // console.log(result)
    if(result.data.err == 0){
        return result
    }else{
        throw result
    }
}
