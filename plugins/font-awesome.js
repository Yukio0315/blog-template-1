import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLine
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes, faChevronDown)
library.add(faTwitter, faInstagram, faLine)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
