module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9010", // target host
        ws: true, // proxy websockets
        changeOrigin: true, // 开启代理
        pathRewrite: {
          "^/api": "" // rewrite path
        }
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, // 改成false 的 在打包之前 要改回true
  css: {
    extract: false,// 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false,// 开启 CSS source maps?
    loaderOptions: {

    },// css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
};
