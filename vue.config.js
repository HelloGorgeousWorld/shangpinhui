module.exports = {
    // 关闭es-lint工具
    lintOnSave: false,
    devServer:{
        proxy:{
            '^/api': {
                target:'http://39.98.123.211'
            }
        }
    }
}