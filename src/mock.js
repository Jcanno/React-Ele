import Mock from 'mockjs'
import { baseUrl } from '@/config'

Mock.mock(`${baseUrl}login`, 'post', (options) => {
  console.log(options);
  return {
    token: 'abc'
  }
})