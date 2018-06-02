const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const getBuilderConfig = require('../../builder/getConfig');

module.exports = (environment = 'dev') => {
  const config = getBuilderConfig(environment);
  const compiler = webpack(config);

  const devMiddleware = new webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    silent: false,
    noInfo: false,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      reasons: true,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: true,
      publicPath: false,
    },
  });

  const app = express();
  const hotMiddleware = new webpackHotMiddleware(compiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  const indexPath = `${path.resolve('dist')}${config.output.publicPath}index.html`;

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
};
