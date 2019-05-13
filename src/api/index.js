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
 * 获取商品详情
*/
export const storeDetails = () => {
  return axios.request({
    url: `storeDetail`
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
 * 添加地址
*/
export const putaddress = (data) => {
  return axios.request({
    url: `address`,
    data,
    method: 'put'
  })
}

/** 
 * 删除地址
*/
export const deleteaddress = (id) => {
  return axios.request({
    url: `address/${id}`,
    method: 'delete'
  })
}

/** 
 * 添加订单
*/
export const postorder = (data) => {
  return axios.request({
    url: `order`,
    method: 'post',
    data
  })
}

/** 
 * 获取订单
*/
export const getorders = () => {
  return axios.request({
    url: `orders`,
  })
}