const path = require("path");
module.exports = {
    // development won't minify the code
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
    },
}