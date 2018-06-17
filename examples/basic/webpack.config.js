const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './index.js',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};