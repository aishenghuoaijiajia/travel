import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from  'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import  'styles/border.css'
import  'styles/reset.css'
import  'styles/iconfont.css'
import axios from 'axios'


Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
