import Vue from 'vue'
import VueRouter from 'vue-router'
import AddMovie from '../views/AddMovie.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'AddMovie',
    component: AddMovie
  },
  {
    path: '/pickMovie',
    name: 'PickMovie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PickMovie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
