// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueResouce from "vue-resource"
// Vue.use(VueResouce)

import axios from "axios"
// Vue.use(axios)
axios.defaults.baseURL= "http://localhost:3001/users"
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
