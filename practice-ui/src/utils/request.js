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

const arr100 = [
  {
    code: '440000',
    name: '广东省'
  },
  {
    code: '450000',
    name: '广西壮族自治区'
  },
  {
    code: '460000',
    name: '海南省'
  },
  {
    code: '500000',
    name: '重庆市'
  },
  {
    code: '510000',
    name: '四川省'
  },
  {
    code: '520000',
    name: '贵州省'
  },
  {
    code: '530000',
    name: '云南省'
  },
  {
    code: '540000',
    name: '西藏自治区'
  },
  {
    code: '430000',
    name: '湖南省'
  },
  {
    code: '640000',
    name: '宁夏回族自治区'
  },
  {
    code: '650000',
    name: '新疆维吾尔自治区'
  },
  {
    code: '610000',
    name: '陕西省'
  },
  {
    code: '620000',
    name: '甘肃省'
  },
  {
    code: '630000',
    name: '青海省'
  },
  {
    code: '150000',
    name: '内蒙古自治区'
  },
  {
    code: '210000',
    name: '辽宁省'
  },
  {
    code: '220000',
    name: '吉林省'
  },
  {
    code: '230000',
    name: '黑龙江省'
  },
  {
    code: '310000',
    name: '上海市'
  },
  {
    code: '320000',
    name: '江苏省'
  },
  {
    code: '330000',
    name: '浙江省'
  },
  {
    code: '340000',
    name: '安徽省'
  },
  {
    code: '350000',
    name: '福建省'
  },
  {
    code: '100000',
    name: '中国'
  },
  {
    code: '110000',
    name: '北京市'
  },
  {
    code: '120000',
    name: '天津市'
  },
  {
    code: '130000',
    name: '河北省'
  },
  {
    code: '140000',
    name: '山西省'
  },
  {
    code: '410000',
    name: '河南省'
  },
  {
    code: '420000',
    name: '湖北省'
  },
  {
    code: '360000',
    name: '江西省'
  },
  {
    code: '370000',
    name: '山东省'
  },
  {
    code: '710000',
    name: '台湾省'
  },
  {
    code: '810000',
    name: '香港特别行政区'
  },
  {
    code: '820000',
    name: '澳门特别行政区'
  }
]

console.log(arr100.findIndex(item => item.code === '330000'))

