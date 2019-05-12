import {
  REQUEST_LOGIN,
  DELETE_TOKEN,
  GET_STORES,
  GET_ADDRESSES,
  POST_ADDRESSES,
  PUT_ADDRESSES,
  DELETE_ADDRESSES,
  SAVE_STORES,
  GET_STOREDETAIL,
  SAVE_STOREDETAIL,
  CLEAR_STOREDETAIL
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
 * 当前商店详情action
 */
export const SaveStoreAction = (data) => {
  return {
    type: SAVE_STORES,
    payload: data
  }
}

/**
 * 当前菜单详情action
 */
export const GetStoreDetailAction = (data) => {
  return {
    type: GET_STOREDETAIL,
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
 * 添加地址action
 */
export const PutAddressesAction = (data) => {
  return {
    type: PUT_ADDRESSES,
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

/**
 * 保存商品加入购物车action
 */
export const SaveStoreDetailAction = (data) => {
  return {
    type: SAVE_STOREDETAIL,
    payload: data
  }
}


/**
 * 清空购物车action
 */
export const ClearStoreDetailAction = () => {
  return {
    type: CLEAR_STOREDETAIL,
  }
}
