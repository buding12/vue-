const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8888,
     host:'localhost'  //设置主机地址
  },
  // 关闭eslint
  lintOnSave:false
})
