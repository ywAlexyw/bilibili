import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/views/index')
const video = () => import('@/views/video')
const search = () => import('@/views/search')
const channels = () => import('@/views/channels')
const rank = () => import('@/views/rank.vue')
const other = () => import('@/views/other.vue')
const login = () => import('@/views/login.vue')
const user = () => import('@/views/user.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/channels/:id',
      name: 'channels',
      component: channels
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
