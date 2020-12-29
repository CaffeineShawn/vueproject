const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
//引入热模块替换
const webpack = require('webpack')
const devConfig = {
  mode: 'development',
  devServer:{
    contentBase:'./dist',
    open:true,
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'inline-source-map'
  }

  module.exports = merge(baseConfig, devConfig)