// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style' // 自定义样式引用
import 'vue-impression/dist/styles/index' // 外部样式引用，导入的代码库中的样式

// 全局配置
// Vue 启动时阻止提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
