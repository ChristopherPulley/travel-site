const path = require("path"); // integrated node package
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js", // starting file
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"), // where bundled.js goes
  },
  mode: "development",
  watch: true, // tell webpack to rebundle on save
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};
