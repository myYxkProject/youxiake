// 存值
export const setItem = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
}

// 取值
export const getItem = (key)=>{
    return JSON.parse(localStorage.getItem(key))
}

// 清除
export const clear=()=>{
    localStorage.clear()
}

// 删除
export const removeItem=(key)=>{
    localStorage.removeItem(key)
}