import axios from 'axios'

import {businessStatusCode, httpStatusCode} from './statusCode'

/**
 * 创建axios对象
 * @param fn 扩展回调
 */
const createAxios = (fn) => {
  // 创建axios实例
  const service = axios.create({
    baseURL: '/api', // api的base_url
    timeout: 30000 // 请求超时时间
  })
  service.interceptors.request.use(config => {
    //在第一次ajax请求时，设置csrfToken，csrfToken最初生成在cookie中，转移到页面内存中时会清除此cookie
    if (!window.csrfToken) { //页面设置token
      if (document.cookie.indexOf('x-csrf-token') >= 0) {
        let cookies = document.cookie.split('; ')
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].split('=')
          if (cookie[0] === 'x-csrf-token' && cookie[1]) {
            window.csrfToken = cookie[1]
            let date = new Date()
            date.setTime(date.getTime() - 10000)
            document.cookie = cookie[0] + '=; expire=' + date.toGMTString()
            break
          }
        }
      }
    } else { //请求附带token
      config.headers['x-csrf-token'] = window.csrfToken
    }
    return config
  }, error => {
    return Promise.reject(error)
  })
  // respone 返回 拦截器
  service.interceptors.response.use(
    (response) => {
      // console.log(" axios response 拦截器 >>>>>>>>> ", response); // for debug
      fn() // 回调 用于后期自定义扩展
      if (response.data.returnCode !== 0) {  //TODO  拦截编码定义
        // 业务状态判断
        businessStatusCode(response.data)
      }
      return response
    },
    (error) => {
      // console.log(" axios 网络异常 error >>>>>>>>> ", error.response); // for debug
      fn() // 回调 用于后期自定义扩展
      if (!error.response) {
        return Promise.reject(error)
      }
      // 网络状态处理
      httpStatusCode(error.response)
      // return Promise.reject(error);
    }
  )
  return service
}

/**
 * Post请求
 * @param url 【链接】
 * @param params【参数】
 * @param fn【回调】
 */
const requestPost = (url, params, fn) => {
  const axiosObj = createAxios(fn)
  return axiosObj.post(url, params)
}
/**
 * get请求
 * @param url 【链接】
 * @param params【参数】
 * @param fn【回调】
 */
const requestGet = (url, params, fn) => {
  const axiosObj = createAxios(fn)
  // console.log(`requestGet >>>>>>>>>> ${params}`);
  return axiosObj.get(url, {params: {...params}})
}
export default {
  get: requestGet,
  post: requestPost
}
