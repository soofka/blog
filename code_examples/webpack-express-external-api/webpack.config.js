const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
console.log('distPath', distPath);

module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  mode: 'development',
  devServer: {
    index: 'index.html',
    contentBase: distPath,
    port: 3000,
    proxy: [{
      context: ['/api'],
      target: 'https://jsonplaceholder.typicode.com/posts/1',
      secure: false,
      // bypass: function(req, res, proxyOptions) {
      //   console.log('just bypassing', req.url);
      //   return 'lol';
      // },
    }],
  },
};
