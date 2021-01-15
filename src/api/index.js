import request from '../api/axios'
/**
 * post 请求
 * @url  url [请求链接]
 * @params  params [参数]
 * @params  fn [回调函数]
 * @return Promise<AxiosResponse<any>>
 */
export function post(url, params, fn  = function() {}) {
  console.log(" axios post >>>>>>>>>> url: ", url);
  return request.post(url, params, fn);
}
/**
 * get 请求
 * @url  url [请求链接]
 * @params  params  [参数]
 * @params  fn [回调函数]
 * @return Promise<AxiosResponse<any>>
 */
export function get(url, params, fn = function() {}) {
  console.log(" axios get >>>>>>>>>> url: ", url);
  return request.get(url, params, fn);
}
