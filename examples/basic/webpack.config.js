const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './index.js',
  devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js'
  },
};