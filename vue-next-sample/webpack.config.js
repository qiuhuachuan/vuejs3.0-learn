// module.exports = {};

// 增加智能类型提示的小技巧，配置完成后将下一行注释掉即可
// import webpack from "webpack";

const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  optimization: {
    usedExports: true,
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // loader是从后往前采用的
      }
    ]
  },
  devServer: {
    hot: true // 开启HMR热更新，同时需要将webpack模块导入，并在插件处调用new webpack.HotModuleReplacementPlugin()
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
