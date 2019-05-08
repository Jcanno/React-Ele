import Mock from 'mockjs'
import { baseUrl } from '@/config'

const Random = Mock.Random;
const token = [
  '0x8546846545411589', '0x3246846551254863', 
  '0x8984615648463482', '0x4684885313548655',
  '0x8787524386123231', '0x8798143213546631'
]


Random.extend({
  token: function() {
    return this.pick(token);
  }
})



Mock.mock(`${baseUrl}login`, 'post', (options) => {
  const { username, password } = options.body;

  console.log(options);
  return {
    token: Random.token()
  }
})