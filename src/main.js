import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import scroll from './scroll'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  scroll,
  render: h => h(App)
}).$mount('#app')
