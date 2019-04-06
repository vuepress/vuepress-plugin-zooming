import Zooming from 'zooming'

/* global ZOOMING_SELECTOR */
/* global ZOOMING_OPTIONS */
/* global ZOOMING_DELAY */
const zOptions = JSON.parse(ZOOMING_OPTIONS)
const zSelector = ZOOMING_SELECTOR
const zDelay = Number(ZOOMING_DELAY)

export default class ZoomingPlugin {
  constructor () {
    this.instance = new Zooming(zOptions)
  }

  update (selector = zSelector) {
    if (typeof window === 'undefined') return
    this.instance.listen(selector)
  }

  updateDelay (selector, delay = zDelay) {
    setTimeout(() => this.update(selector), delay)
  }
}
