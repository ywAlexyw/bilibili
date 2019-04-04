import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/views/index')
const video = () => import('@/views/video')
const search = () => import('@/views/search')
const donghua = () => import('@/views/donghua')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/a',
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
      path: '/',
      name: 'donghua',
      component: donghua
      // children: [
      //   {
      //     path: '', component:
      //   }
      // ]
    }
  ]
})
