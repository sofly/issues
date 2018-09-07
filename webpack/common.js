const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH_SRC = path.join(__dirname, '../src');
const PATH_DIST = path.join(__dirname, '../dist');
const PATH_SRC_INDEX = path.join(PATH_SRC, './index.jsx');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === DEVELOPMENT;

exports.PATH_SRC = PATH_SRC;
exports.PATH_DIST = PATH_DIST;

exports.PRODUCTION = PRODUCTION;
exports.DEVELOPMENT = DEVELOPMENT;

const extractSass = new ExtractTextPlugin({
  filename: '[name].[md5:contenthash:hex:20].css',
  disable: IS_DEV,
  allChunks: true,
});

exports.CONFIG = {
  context: path.resolve(__dirname, PATH_SRC),
  entry: ['babel-polyfill', PATH_SRC_INDEX],
  output: {
    path: PATH_DIST,
  },
  resolve: {
    modules: [PATH_SRC, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [PATH_SRC],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|.css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: true,
                sourceMap: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot|png|jpg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
        },
      },
    ],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, PATH_SRC, 'index.html'),
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        collapseInlineTagWhitespace: true,
      },
    }),
  ],
};
