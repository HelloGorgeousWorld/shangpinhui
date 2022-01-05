import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import { reqCategoryList } from '@/api'
import store from '@/store'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
reqCategoryList()
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
