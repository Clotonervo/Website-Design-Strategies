// vue.config.js
// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: 'http://260.samhopkins.info:8080',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://260.samhopkins.info:3500',
            },
        },
    }
}