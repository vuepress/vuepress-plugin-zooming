import Zooming from 'zooming'

/* global ZOOMING_SELECTOR */
/* global ZOOMING_OPTIONS */
/* global ZOOMING_DELAY */
const zOptions = JSON.parse(ZOOMING_OPTIONS)
const zSelector = ZOOMING_SELECTOR
const zDelay = Number(ZOOMING_DELAY)

export default {
  watch: {
    '$page.path' () {
      if (typeof window === 'undefined') return
      this.$vuepress.zooming.updateDelay()
    },
  },

  mounted () {
    const zooming = new Zooming(zOptions)
    const update = (selector = zSelector) => {
      if (typeof window === 'undefined') return
      zooming.listen(selector)
    }

    this.$vuepress.zooming = zooming
    this.$vuepress.zooming.update = update
    this.$vuepress.zooming.updateDelay = (selector, delay = zDelay) => {
      setTimeout(() => update(selector), delay)
    }
    this.$vuepress.zooming.updateDelay()
  },
}
