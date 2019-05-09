import Mock from 'mockjs'
import { baseUrl } from '@/config'

const Random = Mock.Random;
const tokens = [
  '0x8546846545411589', '0x3246846551254863', 
  '0x8984615648463482', '0x4684885313548655',
  '0x8787524386123231', '0x8798143213546631'
]


Random.extend({
  token: function() {
    return this.pick(tokens);
  }
})


function checkToken(token) {
  if(tokens.some(item => item === token)){
    return true
  }else {
    return false
  }
}

/**
 * 登录接口
 * 默认用户名 admin 密码 admin
 */
Mock.mock(`${baseUrl}login`, 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  
  if(username === 'admin' && password === 'admin') {
    return {
      token: Random.token(),
      status: 201
    }
  }else {
    return {
      token: '',
      status: 400
    }
  }
})

/**
 * 获取商店接口
 */
Mock.mock(`${baseUrl}stores`, () => {
  return {
    aaa: 'ssss'
  }
})