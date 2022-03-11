# Настройка webpack

## Releases

### Pre release

Сделай форк и клон данного репозитория.

Внимательно ознакомься с описанием челленджа и только потом приступай к разработке.

Просмотри файлы `index.html`, `index.js` и `styles.css`. Сейчас эти файлы не подключены друг к другу, поэтому запустить и проверить их работу не получится. Поэтому вместо запуска прочитай код файлов и подумай – какие действия они выполняют? Что мы увидим в браузере когда их запустим?

### Release 0: установка webpack

Установи в зависимости разработчика библиотеки `webpack` и `webpack-cli`.

### Release 1: настройка webpack

Сам по себе webpack умеет лишь объединять JavaScript-файлы в один общий файл, который называют _бандлом_.

В нашем проекте помимо JavaScript-файла есть также HTML и CSS. Эти типы файлов по умолчанию не поддерживаются webpack'ом и для них нужно производить ручную настройку.

Создай файл `webpack.config.js`, из которого будет экспортироваться объект настроек.

Узнать о предназначении каждой из настроек и увидеть примеры можно в разделе [configuration](https://webpack.js.org/configuration/) на официальном сайте webpack.

[**context**](https://webpack.js.org/configuration/entry-context/#context): укажи папку `src` в качестве папки с исходниками проекта.

[**entry**](https://webpack.js.org/configuration/entry-context/#naming): укажи, что файл `index.js` является точкой входа в наше приложение.

[**mode**](https://webpack.js.org/configuration/mode/): добавь в настройки информацию о том, что нужно собирать бандл для режима разработки.

[**output**](https://webpack.js.org/configuration/output/#outputfilename): в качестве директории для выходных файлов укажи `dist`. Также необходимо указать название файла, чтобы оно содержало в имени исходное название и случайный хеш.

Выполни в проекте команду `npx webpack` и изучи ответ webpack'а.

### Release 2: установка плагинов

#### HTML Plugin

Как говорилось ранее webpack не умеет работать с файлами помимо JavaScript. Для расширения функционала в настройки webpack добавляют плагины.

Установки в проект плагин [HtmlWebpackPlugin](https://www.google.com/search?q=html+webpack+plugin). Настрой его так, чтобы в качестве шаблона по умолчанию он брал файл `index.html` из папки `src`.

#### Clean Plugin

Установи в проект также [плагин для очистки мусора](https://www.google.com/search?q=clean+webpack+plugin).

### Release 3: лоадеры

В нашем проекте присутствуют не только HTML- и JavaScript-файлы, но и CSS.

Для включения поддержки неизвестных webpack'у типов файлов используют [лоадеры](https://webpack.js.org/loaders/).

Настрой для нашего проекта лоадеры `css-loader` и `style-loader`.

Еще раз выполни команду `npx webpack`. Изучи ответ, а также содержимое директории `dist`. Попробуй запустить файл `index.html` в браузере.

### Release 4: best practices

Прежде чем выгрузить проект на проверку добавь в него ESLint и Prettier. Сделай необходимые настройки. Проверь проект на наличие ошибок и предупреждений от ESLint. Исправь ошибки, если найдутся.

Добавь в файл `.gitignore` файлы и папки для исключения (если их там не хватает).

Выгрузи проект и делай пул реквест.
