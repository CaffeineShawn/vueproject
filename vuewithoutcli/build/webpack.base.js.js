// 使用node的path模块
const path = require('path')

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//引入 自动生成Html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean-webpack-plugin(提取出 CleanWebpackPlugin 的构造函数)
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 打包的入口
  entry: './src/main.js',
  // 打包的出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', '/dist')
  },
  // 打包规则
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.(jpg|jpeg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.styl(us)?$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }

    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new CleanWebpackPlugin()
    ],

    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    },


  }