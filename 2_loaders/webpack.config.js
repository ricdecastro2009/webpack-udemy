const path = require('path')

module.exports = {
  entry: './src/index.js',
  
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  mode:'development',

  module:{
    rules:[
      { // Reconhecendo CSS atraves do loader
        test:/\.css$/,
        use:[
          'style-loader', 'css-loader',
        ]
      },
      { // Reconhecendo imagens dos tipos png|jpg|jpeg atravez do loader file-loader.
        test:/\.(png|jpg|jpeg)$/,
        use:[
          'file-loader'
        ]
      },
      { // Reconhecendo imagens dos tipos png|jpg|jpeg atravez do loader file-loader.
        test:/\.scss$/,
        use:[
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      { // Reconhece arquivos.js excluindo a pasta node modules e bower usa o preset e o prlugin para reconhecer objects spreads
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env'],
            plugins:['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      { // Reconhecendo arquivos htmls.
        test:/\.html$/,
        use:'html-loader'
      },
      { // Reconhecendo arquivos do tipo txt.
        test:/\.txt$/,
        use:'raw-loader'
      },
    ]
  }

}