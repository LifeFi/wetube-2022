// 예전 JS 만 사용 가능
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  mode: "development",
  watch: true /* 소스가 바뀔떄마다 webpack을 자동으로 실행시킴 */,
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
    clean: true /* webpack 재실행 전에 폴더/파일 삭제*/,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        /* ▼ 로더는 역순으로 실행됨. 순서 반드시 지킬 것. */
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
