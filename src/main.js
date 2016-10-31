import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'

Vue.use(Vuex)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})



