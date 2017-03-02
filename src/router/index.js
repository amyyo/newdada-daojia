import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' // 等同于 '../components/Hello'
import Button from '@/components/Button'
import Home from '@/views/HomeView'
import SearchView from '@/views/SearchView'
import CounterView from '@/views/CounterView'
import SquareView from '@/views/SquareView'

Vue.use(Router)

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/counter',
      name: 'CounterView',
      component: CounterView
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/square',
      name: 'SquareView',
      component: SquareView
    },
    {
      path: '/hello',
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
