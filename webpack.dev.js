const path = require("path");
const common = require("./webpack.common"); // Provides the contents of "webpack.common.js"
const { merge }  = require("webpack-merge"); // Provides the "webpack merge plugin"

// Refactor this into a function "merge", with the parameter "common" (the common config file, see above)
// This function merges whatever is in common with whatever is in this file.
module.exports = merge(common, {
    // development won't minify the code
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
      },
    
});