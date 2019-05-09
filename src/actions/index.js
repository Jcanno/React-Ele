import {
  REQUEST_LOGIN,
  DELETE_TOKEN,
  GET_STORES,
  GET_ADDRESSES,
  POST_ADDRESSES,
  DELETE_ADDRESSES
} from '../constants'


/**
 * 登录action
 */
export const PostLoginAction = (data, callback) => {
  return {
    type: REQUEST_LOGIN,
    payload: data,
    onSuccess: callback
  }
}

/**
 * 删除登录action
 */
export const DeleteLoginAction = (callback) => {
  return {
    type: DELETE_TOKEN,
    onSuccess: callback
  }
}

/**
 * 获取商店action
 */
export const GetStoresAction = (callback) => {
  return {
    type: GET_STORES,
    onSuccess: callback
  }
}

/**
 * 获取地址action
 */
export const GetAddressesAction = () => {
  return {
    type: GET_ADDRESSES,
  }
}

/**
 * 添加地址action
 */
export const PostAddressesAction = (data) => {
  return {
    type: POST_ADDRESSES,
    payload: data
  }
}

/**
 * 删除地址action
 */
export const DeleteAddressesAction = (id) => {
  return {
    type: DELETE_ADDRESSES,
    payload: id
  }
}