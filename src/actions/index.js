import {
  REQUEST_LOGIN,
  DELETE_TOKEN,
  GET_STORES
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