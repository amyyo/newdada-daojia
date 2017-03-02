import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import interceptors from './interceptors'

Vue.use(Vuex)

// 状态树
const state = {
  msg: 'Welcome to your Vue.js app!',
  count: 0,
  number: 0,
  books: [],
  isLoading: false
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

//  增加 http 拦截器
interceptors(store)

if (module.hot) {
  module.hot.accept([
    './mutations',
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
