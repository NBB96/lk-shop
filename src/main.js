import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入fastclick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}


//引入全局的样式
import './style/common.less'

//引入全局ui组件库
import './plugins/vant'

//引入rem
import '@/config/rem'

//引入全局过滤器
import './config/filters'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
