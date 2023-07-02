const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8090,
    proxy: {
      '^/dev': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      }
    }
  }
})
