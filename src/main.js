import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store.js'
import router from '@/router.js'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/styles/index.scss'

library.add(faEdit, faTrashAlt, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
