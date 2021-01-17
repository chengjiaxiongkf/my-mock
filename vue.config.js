const path = require('path');//引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
  outputDir: 'dist',//打包后的目录名称
  assetsDir: 'static',//静态资源目录名称
  productionSourceMap: false,  //去掉打包的时候生成的map文件
  lintOnSave: true,
  filenameHashing: false,
  devServer: {
    // sockHost: 'http://47.92.237.225:1111/',
    // disableHostCheck: true,
    // host: '0.0.0.0',  //不清楚主机和目的网络
    // port: 1111, // 源地址端口，自行修改
    // disableHostCheck: true,
    // hotOnly: false,
    // useLocalIp: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9010", // target host
        ws: true, // proxy websockets
        changeOrigin: true, // 开启代理
        pathRewrite: {
          "^/api": "" // rewrite path
        }
      }
    },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, // 改成false 的 在打包之前 要改回true
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
  }
};
