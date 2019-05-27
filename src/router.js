import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/city.vue'
import Details from './views/details/details.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
