import ZoomingPlugin from './ZoomingPlugin'

export default {
  watch: {
    '$page.path' () {
      if (this.$vuepress.zooming === 'undefined') return
      this.$vuepress.zooming.updateDelay()
    },
  },

  mounted () {
    this.$vuepress.zooming = new ZoomingPlugin()
    this.$vuepress.zooming.updateDelay()
  },
}
