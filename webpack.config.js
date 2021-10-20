const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const dependencies = require("./package.json").dependencies;

module.exports = {
  mode: 'development',
  entry: path.resolve("src/index.ts"),
  output: {
    filename: "index.js",
      path: path.resolve("dist"),
      globalObject: "this",
    libraryTarget: 'amd'
  },
  resolve: {
    alias: {
      src: path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    port: 8080,
    },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
      new ModuleFederationPlugin({
          name: "RecentWorksDropDown",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
              "./RecentWorksDropDown": "./src/components/RecentWorksDropDown",
          },
          shared: [
              {
                  react: {
                      eager: true,
                      singleton: true,
                      requiredVersion: false
                  }
              },
              {
                  "react-dom": {
                      eager: true,
                      singleton: true,
                      requiredVersion: false
                  },
              },
          ]
      }),
  ],
};
