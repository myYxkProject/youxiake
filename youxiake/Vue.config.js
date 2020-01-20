
const path = require('path')

// 起别名的时候用
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports={
    // 起别名
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('api',resolve('./src/api'))
        .set('assets',resolve('./src/assets'))
        .set('components',resolve('./src/components'))
        .set('router',resolve('./src/router'))
        .set('store',resolve('./src/store'))
        .set('utils',resolve('./src/utils'))
        .set('views',resolve('./src/views'))           
        .set('style',resolve('./src/style'))           

    }
}