const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/proj-html-vuejs',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './'
})

