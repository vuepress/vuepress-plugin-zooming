const path = require('path')

module.exports = ({
  selector = '.content img',
  options = {},
  delay = 500,
}) => ({
  name: 'vuepress-plugin-zooming',

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),

  define: {
    ZOOMING_SELECTOR: selector,
    ZOOMING_OPTIONS: JSON.stringify(options),
    ZOOMING_DELAY: delay,
  },
})
