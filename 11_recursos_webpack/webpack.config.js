const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { 
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared'
    },
    shared: 'lodash' 
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer:{
    historyApiFallback: true,
    hot: true
  },

  module:{
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },

  mode: 'development',

  plugins:[
    new HtmlWebpackPlugin({
      title: 'Recursos Webpack'
      
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    })
  ],

  optimization:{
    runtimeChunk: true
  }

 
}
