var webpack = require('webpack');
module.exports = {
  entry: './js/main.js',
  output: {
    path: './dist',
    filename: 'base.bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass'}
    ],
  }
}