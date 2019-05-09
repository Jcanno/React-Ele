import {
  REQUEST_LOGIN,
  DELETE_TOKEN
} from '../constants'

export const LoginAction = (data, callback) => {
  return {
    type: REQUEST_LOGIN,
    payload: data,
    onSuccess: callback
  }
}

export const DeleteLoginAction = (callback) => {
  return {
    type: DELETE_TOKEN,
    onSuccess: callback
  }
}