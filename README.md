# vuepress-plugin-zooming

[![npm](https://img.shields.io/npm/v/vuepress-plugin-zooming.svg)](https://www.npmjs.com/package/vuepress-plugin-zooming)
[![GitHub](https://img.shields.io/github/license/vuepress/vuepress-plugin-zooming.svg)](https://github.com/vuepress/vuepress-plugin-zooming/blob/master/LICENSE)

Use [zooming](https://github.com/kingdido999/zooming) in VuePress.

This plugin will make your images zoomable in your VuePress site.

## Usage

### Basic

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

### Advanced

Update zoomable images manually in your components:

```js
// SomeComponent.vue
export default {
  methods: {
    updateImages () {
      // do something to update images in this page
      this.$nextTick(() => {
        // update zooming immediately
        this.$vuepress.zooming.update() // with default selector
        this.$vuepress.zooming.update('.new-images') // with custom selector

        // update zooming with delay
        this.$vuepress.zooming.updateDelay() // with default selector and delay
        this.$vuepress.zooming.updateDelay('.new-images') // with custom selector and default delay
        this.$vuepress.zooming.updateDelay('.new-images', 1000) // with custom selector and delay
      })
    },
  },
}
```

Get the `Zooming` instance directly in your components:

> See the [docs of zooming](https://desmonding.me/zooming/docs/#/api-reference) for all available methods.

```js
// SomeComponent.vue
export default {
  methods: {
    openImages () {
      // get the Zooming instance
      const zooming = this.$vuepress.zooming.instance

      // call the methods
      zooming.open(img)
    },
  },
}
```

## LICENSE

MIT &copy; [@meteorlxy](https://github.com/meteorlxy) & [VuePress Community](https://github.com/vuepress)
