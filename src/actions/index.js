import {
  REQUEST_LOGIN
} from '../constants'

export const LoginAction = (data) => {
  return {
    type: REQUEST_LOGIN,
    payload: data
  }
}