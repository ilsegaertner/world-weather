const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  entry: "./extension/popup.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "popup.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./extension/popup.html",
      filename: "popup.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "extension/manifest.json", to: "manifest.json" },
        { from: "extension/main.js", to: "main.js" },
        { from: "extension/background.js", to: "background.js" },
        { from: "extension/icon-19.png", to: "icon-19.png" },
        { from: "extension/icon-38.png", to: "icon-38.png" },
        { from: "extension/icon-48.png", to: "icon-48.png" },
        { from: "extension/icon-96.png", to: "icon-96.png" },
        { from: "extension/logo.png", to: "logo.png" },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_KEY": JSON.stringify(process.env.REACT_APP_API_KEY),
      "process.env.REACT_APP_API_KEY_MAPS": JSON.stringify(process.env.REACT_APP_API_KEY_MAPS),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      process: require.resolve("process/browser"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
