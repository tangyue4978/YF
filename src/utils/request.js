import axios from 'axios'
// import { getToken } from '@/utils/auth'
import {
    Message
} from 'element-ui'
const BASE_URL = process.env.VUE_APP_BASE_API //接口路径   测试环境、
    // const BASE_URL = 'http://8002.frp.wanghuiwen.com/' //接口路径   生产环境、
    // 创建axios
const service = axios.create({
        baseURL: BASE_URL,
        timeout: 20000, // request timeout
        // headers: { "content-type": "application/x-www-form-urlencoded" }
    })
    // Oauth目录除了logout方法其他都不需要传token
service.interceptors.request.use(
    config => {
        if (sessionStorage.getItem("token")) {
            config.headers['Authorization'] = "Bearer " + sessionStorage.getItem("token");
            // config.headers['operator-admin-id'] = localStorage.getItem("operator_admin_id")||localStorage.getItem("operator_id");
            // config.headers['admin_id'] = localStorage.getItem("admin_id")
        }
        console.log(config.data)

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// axios 数据返回
service.interceptors.response.use(
    // 接口请求成功
    response => {
      console.log(response)
      return response
        // const res = response.data,
        //     { code, message, data } = res
        //     // code == 200 成功 code == 0 失败
        // if (code == 200) {
        //     return res
        // } else {
        //     Message({
        //         message: message,
        //         type: 'error'
        //     })
        //     return Promise.reject(new Error(message || 'Error'))
        // }
    },

    // 网络请求失败
    error => {
        console.log(error.response)
        Message({
            message: error.response.data.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
