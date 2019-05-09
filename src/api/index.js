import axios from '@/axios'

/** 
 * 登录
*/
export const login = (data) => {
  return axios.request({
    url: `login`,
    method: 'post',
    data
  })
}

/** 
 * 获取商店
*/
export const stores = () => {
  return axios.request({
    url: `stores`
  })
}

/** 
 * 获取地址
*/
export const addresses = () => {
  return axios.request({
    url: `addresses`
  })
}

/** 
 * 添加地址
*/
export const postaddress = (data) => {
  return axios.request({
    url: `address`,
    data,
    method: 'post'
  })
}

/** 
 * 删除地址
*/
export const deleteaddress = (data) => {
  return axios.request({
    url: `address`,
    data,
    method: 'delete'
  })
}