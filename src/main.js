import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import VuetifyMessage from 'vuetify-message';
import Axios from 'axios'
import router from "@/router";
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
//
// Vue.use(VuetifyMessage, {
//   timeout: 1000,
//   property: '$message',
// });
// import qs from 'qs'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'


new Vue({
  vuetify,
  router,

  render: h => h(App)
}).$mount('#app')
