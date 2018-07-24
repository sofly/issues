const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const { PATH_DIST, DEVELOPMENT, CONFIG } = require('./common');

const PORT = 3000;
const HOST = process.env.HOST || '0.0.0.0';

module.exports = webpackMerge(CONFIG, {
  mode: DEVELOPMENT,
  output: {
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: PORT,
    compress: true,
    host: HOST,
    contentBase: PATH_DIST,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: `http://${HOST}:${PORT}`,
    }),
  ],
});
