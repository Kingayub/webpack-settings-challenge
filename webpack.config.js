const HtmlWebpackPlugin = require("html-webpack-plugin"); // плагин для подключения пакетов HTML;
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // плагин для очистки мусора;
const path = require("path"); // путь до директории которую мы указываем;

module.exports = {
  context: path.resolve(__dirname, "src"), // указываем  папку src в качестве папки с исходниками проекта.

  entry: "./index.js", // указываем файл, который будет точкой входа в нашем приложении.

  mode: "development", // собираем бандл в режиме разраба.

  output: {
    path: path.resolve(__dirname, "dist"), // создаем папку  и в качестве директории для выходных файлов указываем `dist`.

    filename: "[name].bundle.js", // создаем файл внутри этой папки, и указываем название файла, чтобы оно содержало в имени исходное название и случайный хеш.
  },

  plugins: [
    // подключаем плагины
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname, "src"),
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    // подключаем лоадеры
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

// УСТАНОВКА WEBPACK: (npm i -D webpack webpack-cli);

// УСТАНОВКА ПЛАГИНОВ:
// плагин для подключения пакетов HTML [HtmlWebpackPlugin] - (npm i -D html-webpack-plugin);
// плагин для очистки мусора [CleanWebpackPlugin] - (npm i -D clean-webpack-plugin);

// ЛОАДЕРЫ:
// Установка лоадеров [css-loader и style-loader] - (npm i css-loader style-loader -D);
