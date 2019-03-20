# vuepress-plugin-zooming

[![npm](https://img.shields.io/npm/v/vuepress-plugin-zooming.svg)](https://www.npmjs.com/package/vuepress-plugin-zooming)
[![GitHub](https://img.shields.io/github/license/meteorlxy/vuepress-plugin-zooming.svg)](https://github.com/meteorlxy/vuepress-plugin-zooming/blob/master/LICENSE)

Use [zooming](https://github.com/kingdido999/zooming) in VuePress.

This plugin will make your images zoomable in your VuePress site.

## Usage

Install via NPM:

```sh
npm install vuepress-plugin-zooming
```

Introduce in your VuePress config file:

```js
module.exports = {
  plugins: [
    'vuepress-plugin-zooming',
  ],
}
```

Set the config of this plugin:

> See the [docs of zooming](https://desmonding.me/zooming/docs/#/configuration?id=options) for all available options.

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-zooming', {
      // used to be called with `zooming.listen()`
      // default: '.content img'
      selector: '.my-wrapper .my-img',

      // used to be called with `new Zooming()`
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },

      // call `zooming.listen()` with delay after entering a page
      // default: 500
      delay: 1000,
    }],
  ],
}
```

## LICENSE

MIT
