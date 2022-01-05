import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './Home'
import search from './Search'
export default new Vuex.Store({
    // 模块化开发
    modules:{
        home,
        search
    }
})