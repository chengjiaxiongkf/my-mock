import {post} from "../index"
const urls = {
  login:'/login'
}
export const login = (param) => {
  return post(urls.login,param);
}
