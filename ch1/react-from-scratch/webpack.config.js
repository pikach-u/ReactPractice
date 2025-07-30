const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { experiments } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    static: "./dist",
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js"],
    fallback: {
      util: false,
    },
  },
  experiments: {
    topLevelAwait: true,
  },
};
