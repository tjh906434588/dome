'use strict'

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
      // disableHostCheck: true, // 内网穿透
    //   port: port,
      open: false,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        '/api': {
          target: 'http://192.168.10.169:82',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    }
  }
}
