import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import TSLintWebpackPlugin from 'tslint-webpack-plugin';
import StyleLintWebpackPlugin from 'stylelint-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

import { blogConfig } from 'common/constants';

export const getWebpackConfig = (environment = 'dev', mode = null) => {
  const devEnv = environment === 'dev';
  const audit = mode === 'audit';

  return {
    entry: getEntry(),
    output: getOutput(),
    resolve: getResolve(),
    module: getModule(devEnv),
    plugins: getPlugins(devEnv, audit),
    stats: getStats(),
    mode: getMode(devEnv),
  };
};

const getEntry = () => {
  const main = [
    './src/blog/index.tsx'
  ];

  const vendor =  [
    'axios',
    'babel-polyfill',
    'react',
    'react-dom',
    'react-router-dom',
  ];

  return {
    main,
    vendor,
  };
};

const getOutput = () => {
  return {
    filename: 'scripts/[name].[hash].js',
    chunkFilename: 'scripts/[name].[hash].js',
    path: path.resolve('dist'),
    publicPath: '/',
  };
};

const getResolve = () => ({
  modules: [
    'src',
    'node_modules'
  ],
  extensions: [
    '.ts',
    '.tsx',
    '.js'
  ]
});

const getModule = (devEnv) => {
  let typeScriptLoaders = [];

  if (!devEnv) {
    typeScriptLoaders.push('babel-loader');
  }

  typeScriptLoaders.push(
    {
      loader: 'awesome-typescript-loader',
      query: {
        configFileName: 'tsconfig.json',
        silent: true
      }
    },
  );

  const styleLoaders = [
    'css-loader',
  ];

  const fontLoaders = [{
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]?[hash]',
    },
  }];

  const imageLoaders = [{
    loader: 'file-loader',
    options: {
      name: 'images/[name].[ext]?[hash]',
    },
  }];

  return {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: typeScriptLoaders,
      },
      {
        test: /\.css$/,
        use: styleLoaders,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: fontLoaders,
      }, {
        test: /\.(gif|ico|jpe?g|png|svg)$/,
        loaders: imageLoaders,
      },
    ],
  };
};

const getPlugins = (devEnv, audit) => {
  let staticStyles = [
    '/styles/normalize.css',
    '/scripts/highlight/styles/dracula.css',
    'https://fonts.googleapis.com/css?family=Raleway',
  ];
  let staticScripts = [
    '/scripts/highlight/highlight.pack.js',
  ];

  if (!devEnv) {
    staticScripts.push(
      '/sw.js',
      '/scripts/disqus.js',
      '/scripts/googleAnalytics.js',
    );
  }

  let plugins = [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(devEnv ? 'development' : 'production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './assets/', to: './' },
      { from: './content/static/', to: './' },
      { from: './content/generated/', to: './' },
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      mobile: true,
      template: './src/index.ejs',
      favicon: './assets/favicon.png',
      title: blogConfig.title,
      meta: blogConfig.meta,
      icons: blogConfig.icons.map((icon) => ({
        rel: 'icon',
        sizes: `${icon.width}x${icon.height}`,
        type: `image/${icon.url.substr(icon.url.lastIndexOf('.') + 1)}`,
        href: icon.url,
      })),
      links: staticStyles,
      scripts: staticScripts,
      minify: devEnv ? false : {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
      },
    }),
  ];

  if (devEnv) {
    plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new TSLintWebpackPlugin({
        files: ['./src/**/*.{ts,tsx}'],
        config: './tslintconfig.json',
      }),
      new StyleLintWebpackPlugin(({
        files: ['./src/**/*'],
        configFile: './.stylelintrc',
      })),
    );
  } else {
    plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: `soofka-pl-${new Date().getTime()}`,
        filename: 'sw.js',
        minify: !devEnv,
        stripPrefix: 'dist',
        staticFileGlobs: [
          'dist/**.*',
          'dist/styles/**/*',
          'dist/scripts/**/*',
        ],
        staticFileGlobsIgnorePatterns: [
          /\.gz$/,
          /sw.js$/,
        ],
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new ImageminWebpackPlugin({
        test: /\.(gif|ico|jpe?g|png|svg)$/,
      }),
    );
  }

  if (audit) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../stats/report.html'
      })
    );
  }

  return plugins;
};

const getStats = () => ({
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
});

const getMode = (devEnv) => devEnv ? 'development' : 'production';
