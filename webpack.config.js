const path = require("path");

const appDirectory = path.resolve(__dirname);
module.exports = {
  mode: "development",
  entry: "./index.jsx",
  output: {
    path: path.resolve(appDirectory, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          // anything that needs to be compiled to ES5
          path.resolve(appDirectory)
        ],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false,
            presets: ["module:metro-react-native-babel-preset"],
            plugins: [
              // needed to support async/await
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "react-native-svg$": "svgs"
    },
    extensions: [".js", "jsx"]
  }
};
