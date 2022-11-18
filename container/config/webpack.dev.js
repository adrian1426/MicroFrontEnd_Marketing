const { merge } = require("webpack-merge");
const HhmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    }
  },
  plugins: [
    new HhmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

module.exports = merge(commonConfig, devConfig);