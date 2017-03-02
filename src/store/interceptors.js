import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default (store) => {
  // JSON对象参数化
  Vue.http.options.emulateJSON = true

  // 自定义请求头
  Vue.http.headers.common['token'] = '' + Date.now()

  Vue.http.interceptors.push((request, next) => {
    // 请求前的处理逻辑
    //
    // 增加公共参数
    request.params.body = JSON.stringify(request.params.body)
    request.params = {...request.params, platCode: 'H5', appName: 'paidaojia', appVersion: '3.8.0'}

    store.commit('loading', true) // loading true
    next((response) => {
      // 请求后的处理逻辑
      store.commit('loading', false) // loading false
      return response
    })
  })
}
