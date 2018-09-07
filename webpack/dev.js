const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const { PATH_SRC, PATH_DIST, DEVELOPMENT, CONFIG } = require('./common');

const PORT = 3000;
const HOST = process.env.HOST || '0.0.0.0';

module.exports = webpackMerge(CONFIG, {
  mode: DEVELOPMENT,
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [PATH_SRC],
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: PORT,
    host: HOST,
    compress: true,
    contentBase: PATH_DIST,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new OpenBrowserPlugin({
      url: `http://${HOST}:${PORT}`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
