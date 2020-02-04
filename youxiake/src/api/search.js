// 引入axios
import axios from 'utils/axios.js';


// 获取search页面数据
export const getSearchData = (num = 1) => {
    return new Promise((resolve, reject) => {
        let url = `/yxk/api/search/hot?page=${num}`
        axios.get(url)
            .then((data) => {
                resolve(data.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
