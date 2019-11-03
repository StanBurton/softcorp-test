var path = require("path");

module.exports = {
  entry: "./public/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(path.join(__dirname, '/public/'), "dist"),
  }
};
