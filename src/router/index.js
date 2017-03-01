import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' // 等同于 '../components/Hello'
import Button from '@/components/Button'

Vue.use(Router)

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/btn',
      name: 'Button',
      component: Button
    }
  ]
})
