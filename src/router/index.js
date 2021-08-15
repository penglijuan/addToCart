import Vue from 'vue'
import VueRouter from 'vue-router'
import addToCart from '../views/addToCart'
import animate from '../views/animate'
import listAnimate from '../views/listAnimate'
import componetAnimate from '../views/componetAnimate'
import params from '../views/params'
Vue.use(VueRouter)

const routes = [
  {
    path: '/addToCart',
    component: addToCart
  },
  {
    path: '/animate',
    component: animate
  },
  {
    path: '/listAnimate',
    component: listAnimate
  },
  {
    path: '/componetAnimate',
    component: componetAnimate
  },
  {
    path: '/params/:id', // 把后面的参数解析成id=
    component: params
  }
]

const router = new VueRouter({
  routes
})

export default router
