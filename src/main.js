import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/css/animations.css'
import '@/assets/css/global.css'
import '@/assets/css/fonts.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPalette,
  faBrain,
  faLandmark,
  faGraduationCap,
    faHourglass,
    faPaintBrush,
    faBook,
    faCartShopping,
    faGlobe,
    faAnkh,
    faP,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPalette, faBrain, faLandmark, faGraduationCap, faHourglass, faPaintBrush, faBook, faCartShopping, faGlobe, faAnkh, faP, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
