
const path = require('path')

// 起别名的时候用
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 服务器代理（解决跨域问题）
    devServer: {
        proxy: {
            '/yxk': {
                // 请求的目录路径
                target: 'https://m.youxiake.com',
                //  允许改变请求源
                changeOrigin: true,
                // 重写路径
                pathRewrite: {
                    '^/yxk': ''
                }
            }
        }
    },
    // 起别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('api', resolve('./src/api'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .set('router', resolve('./src/router'))
            .set('store', resolve('./src/store'))
            .set('utils', resolve('./src/utils'))
            .set('views', resolve('./src/views'))
            .set('style', resolve('./src/style'))

    }
}