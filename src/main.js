import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fastclick from  'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import  'styles/border.css'
import  'styles/reset.css'
import  'styles/iconfont.css'
import axios from 'axios'

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
