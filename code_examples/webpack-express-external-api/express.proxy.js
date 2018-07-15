const path = require('path');
const webpack = require('webpack');
const express = require('express');
const httpProxy = require('http-proxy');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const apiProxy = httpProxy.createProxyServer();
const devMiddleware = new webpackDevMiddleware(webpack());

app.use(devMiddleware);
app.get('/api', (request, response) => {
  apiProxy.web(req, res, { target: 'https://api.wheretheiss.at/v1/satellites/25544' });
});

const indexPath = path.join(__dirname, 'dist/index.html');

app.use(express.static(indexPath));
app.use((request, response) => {
  devMiddleware.fileSystem.readFile(indexPath, (error, file) => {
    if (error) {
      response.status(404).send(error.toString());
    } else {
      response.status(200).send(file.toString());
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
