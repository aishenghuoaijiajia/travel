import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from  'fastclick'
import  './assets/styles/border.css'
import  './assets/styles/reset.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
