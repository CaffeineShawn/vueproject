// 使用node的path模块
const path = require('path')

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 打包的入口
  entry: './src/main.js',
  // 打包的出口
  output: {
  	filename: 'bundle.js',
  	path: path.resolve(__dirname, 'dist')
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
  }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
    ],
    resolve: {
    	alias: {
    		'vue': 'vue/dist/vue.js'
    	}
    },
  }