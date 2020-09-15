const path = require("path"); // integrated node package

module.exports = {
  entry: "./app/assets/scripts/App.js", // starting file
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"), // where bundled.js goes
  },
  mode: "development",
  watch: true, // tell webpack to rebundle on save
};
