const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { PRODUCTION, CONFIG } = require('./common.js');

module.exports = webpackMerge(CONFIG, {
  mode: PRODUCTION,

  output: {
    filename: '[name].[chunkhash].js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
});
