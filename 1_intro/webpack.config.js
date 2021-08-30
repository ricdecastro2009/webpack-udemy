const path = require('path');

module.exports = {
  /* Entrada onde as dependencias do projeto são declaradas por default são do tipo js os demais 
  tipos são reconhecidos via loaders */
  entry: './src/test.js', 
  
  // É a saída do empacotamento webpack
  output: 
  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}