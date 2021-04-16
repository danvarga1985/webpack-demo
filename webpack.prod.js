const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Provides the CleanWebpack plugin
const common = require("./webpack.common"); // Provides the contents of "webpack.common.js"
const { merge }  = require("webpack-merge"); // Provides the "webpack merge plugin"

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
});