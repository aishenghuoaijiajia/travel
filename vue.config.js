
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    baseUrl: './',
    runtimeCompiler: true,
    // 配置路径别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', //对应自己的接口
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
}