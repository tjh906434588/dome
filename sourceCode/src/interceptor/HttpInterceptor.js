import axios from 'axios'
import {Toast} from "vant";
import router from '@/router'

// 默认请求响应超时时间
axios.defaults.timeout = 1000 * 60
// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true

// HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    // 设置请求格式
    // config.headers["Content-Type"] = "application/json";
    if(localStorage.getItem("token")){
      config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("token")
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// HTTPresponse拦截
axios.interceptors.response.use(
  data => {
    if(data.data.code === 1011006 || data.data.code === 1011004){
      Toast(data.data.message)
      localStorage.removeItem("token")
      router.push('/')
    }
    return data.data
  },
  error => {
    console.log(error)
    console.log("报错")
    // if (error.response.status === 401) {
    //   return Promise.reject(error.response.data)
    // } else {
    //   return Promise.reject(error.response.data.message)
    // }
  }
)

export default axios
