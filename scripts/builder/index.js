const webpack = require('webpack');
const getConfig = require('./getConfig');

module.exports = (environment = 'dev', mode = null) => {
  const config = getConfig(environment, mode);

  webpack(config, (err, stats) => {
    if (err) {
      throw err;
    }
    console.log(stats.toString());
  })
};
