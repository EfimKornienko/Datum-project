import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLayers from 'vuelayers'
import { store } from './store'
import { Map } from 'vuelayers'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'vuelayers/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLayers)
Vue.use(Map)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
