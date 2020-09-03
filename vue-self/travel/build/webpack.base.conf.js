'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// 取别名的方法 传递src标识根目录下的src
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*
console.log('a',path.resolve(__dirname) == path.join(__dirname));
console.log('b',path.join(__dirname));
*/
console.log(path.join(__dirname, '..', 'src')); // E:\HuangWenbogit clone\huangwenbo_firse\vue-self\travel\src
console.log(path.join(__dirname, 'src')); // E:\HuangWenbogit clone\huangwenbo_firse\vue-self\travel\build\src
module.exports = {
  // entry配置项的根目录  path.resolve(__dirname, '../') 结果为travel
  context: path.resolve(__dirname, '../'),
  // entry采用对象语法，便于扩展
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    /*
    *  config.build.assetsRoot -> path.resolve(__dirname, '../dist')
    *  path.resolve(__dirname, '../dist') -> travel/dist(会在travel下生成一个dist)
    *  path.resolve(__dirname,'dist') -> 会在build下生成一个dist
    */
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
