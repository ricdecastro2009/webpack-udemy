const path = require('path');

module.exports = {
  entry: './src/index.ts',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      }
    ]
  },
  
  
  
}