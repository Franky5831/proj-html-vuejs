const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  base: '/proj-html-vuejs',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './'
})

