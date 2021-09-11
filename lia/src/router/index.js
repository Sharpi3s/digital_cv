import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anna from '../views/Anna.vue'
import Sanne from '../views/Sanne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anna',
    name: 'Anna',
    component: Anna
  },
  {
    path: '/sanne',
    name: 'Sanne',
    component: Sanne
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
