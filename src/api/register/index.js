import {post} from "../index"
const urls = {
  register:'/login'
}
export const register = (param) => {
  return post(urls.register,param);
}
