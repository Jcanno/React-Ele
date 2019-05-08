import {
  REQUEST_LOGIN
} from '../constants'

export const LoginAction = (data, callback) => {
  return {
    type: REQUEST_LOGIN,
    payload: data,
    onSuccess: callback
  }
}