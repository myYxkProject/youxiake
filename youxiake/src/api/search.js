// 引入axios
import axios from 'utils/axios.js';


// 获取search页面数据
export const getSearchData = () => {
    return new Promise((resolve, reject) => {
        let url = '/yxk/api/search/hot'
        axios.get(url)
            .then((data) => {
                resolve(data.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
