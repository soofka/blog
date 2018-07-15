const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
console.log('distPath', distPath);

module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  devServer: {
    contentBase: distPath,
    proxy: {
      '/api': 'https://api.wheretheiss.at/v1/satellites/25544',
    },
  },
};
