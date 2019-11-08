const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RemoveDataTestPlugin = require('./plugins/RemoveDataTestPlugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'release'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({     // 把脚本插入到 index.html
      template: './index.html'
    }), 
    new RemoveDataTestPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, './release'), // 根目录
    open: true, // 自动打开浏览器
    port: 9000
  }
}
