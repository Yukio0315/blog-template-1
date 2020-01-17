import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 481,
    tablet: 769,
    desktop: Infinity
  },
  defaultBreakpoint: 'sm'
})
