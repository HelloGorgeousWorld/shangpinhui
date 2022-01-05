// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 配置路由
export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta:{
                show: true
            }
        },
        {
            name: "search",
            path: '/search/:keywords?',
            component: Search,
            meta:{
                show: true
            },
            // props: {a:1,b:2}
            props:($route) => 
                ({
                    keywords: $route.params.keywords,
                    k: $route.query.k
                })
            
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
})