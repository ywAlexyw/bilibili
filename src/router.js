import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/views/index')
const video = () => import('@/views/video')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/s',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'video',
      component: video
    }
  ]
})
