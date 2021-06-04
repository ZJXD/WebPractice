/**
 * 对 Axios 的封装请求
 */

import axios from 'axios'

const BASE_API = 'localhost:9999'

const request = axios.create({
  baseURL: BASE_API, // 配置请求地址
  timeout: 1000 * 50, // 请求超时时间
  withCredentials: true // 表示跨域请求时是否需要使用凭证
})

// request 拦截器
request.interceptors.request.use(
  config => {
    // 对请求做一些全局配置
    config.headers[''] = ''
    return config
  },
  error => {
    console.log('请求出错：', error)
    Promise.reject(error)
  }
)

// response 拦截器
request.interceptors.response.use(
  response => {
    // 这里可以对 response 做全局的拦截处理
    const resData = response.data
    if (resData.code === 1) {
      return resData
    } else {
      return Promise.reject(resData)
    }
  },
  error => {
    console.log('返回异常：', error)
    return Promise.reject(error)
  }
)

// axios 取消请求
const source = axios.CancelToken.source()
axios.post('url', {
  name: '',
  address: ''
}, {
  cancelToken: source.token
})

// 取消操作
source.cancel('参数，可选')

export default request

