// vue.config.js
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // https://vapperjs.org/troubleshooting.html#vue-server-render-throws-an-error
  publicPath: '/',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: isProd,
    sourceMap: false
  },
  outputDir: 'dist',  // 输出文件目录
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://8002.frp.wanghuiwen.com/',
        // target: 'https://wanghuiwen.com/game/api/',
        ws: true,
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
