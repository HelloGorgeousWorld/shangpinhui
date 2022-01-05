import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 配置api路径和超时时间
const requests = axios.create({
    baseURL:"/api",
    timeout:5000
})
// 请求拦截器和响应拦截器
requests.interceptors.request.use((config)=>{
    nProgress.start();
    return config
})
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data
},(error)=>{
    console.log(error)
})

export default requests