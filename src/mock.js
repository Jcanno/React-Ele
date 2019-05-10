import Mock from 'mockjs'
import { baseUrl } from '@/config'
import store1 from '@/assets/store/store1.jpg'
import store2 from '@/assets/store/store2.jpg'
import store3 from '@/assets/store/store3.jpg'
import store4 from '@/assets/store/store4.jpg'
import store5 from '@/assets/store/store5.jpg'
import store6 from '@/assets/store/store6.jpg'
import store7 from '@/assets/store/store7.jpg'
import store8 from '@/assets/store/store8.jpg'
import store9 from '@/assets/store/store9.jpg'

const Random = Mock.Random;
const tokens = [
  '0x8546846545411589', '0x3246846551254863', 
  '0x8984615648463482', '0x4684885313548655',
  '0x8787524386123231', '0x8798143213546631'
]

const storefees = [
  '免配送费', '配送费 ￥1', '配送费 ￥2', '配送费 ￥3', '配送费 ￥4'
]

const storetimes = [
  '20分钟', '30分钟', '35分钟', '38分钟', '40分钟', '32分钟'
]

const storecals = [
  '炒饭', '其他快餐', '盖浇饭', '焗饭', '炸鸡', '黄焖鸡米饭'
]

const storerates = [
  4.5, 5, 3.5, 3, 4, 2
]

const storenames = [
  'COCO厨房', '绝世炒饭', '今晚吃鸡', '德克士', '黄焖鸡米饭', '华莱士', '神户牛排饭', '无骨鱼饭', '王者炒饭'
]

const storeintros = [
  '我们的味道，大家来评定',
  '本店诚信经营，将优质食物送到顾客手中',
  '不一样的炸鸡，不一样的美味',
  '周年庆，特价公告',
  '欢迎光临小店，高峰期请提前下单，谢谢'
]

const storeimgs = [
  store1,
  store2,
  store3,
  store4,
  store5,
  store6,
  store7,
  store8,
  store9,
]

Random.extend({
  token: function() {
    return this.pick(tokens);
  },
  storefee: function() {
    return this.pick(storefees)
  },
  storetime: function() {
    return this.pick(storetimes)
  },
  storecal: function() {
    return this.pick(storecals)
  },
  storerate: function() {
    return this.pick(storerates)
  },
  storeintro: function() {
    return this.pick(storeintros)
  },
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
Mock.mock(`${baseUrl}stores`, (options) => {
  console.log(options);
  let res = [];
  for(let i = 0;i < 9;i++) {
    let obj = {
      id: i + 1,
      storename: storenames[i],
      storeimg: storeimgs[i],
      storerate: Random.storerate(),
      storefee: Random.storefee(),
      storetime: Random.storetime(),
      storecal: Random.storecal(),
      storeintro: Random.storeintro(),
    }
    res.push(obj);
  }
  return res
})


const addresses = [];
let addid = 0;

/**
 * 获取地址
 */
Mock.mock(`${baseUrl}addresses`, (options) => {
  console.log(addresses);
  
  return addresses
})

/**
 * 添加地址
 */
Mock.mock(`${baseUrl}address`, 'post', (options) => {
  const address = JSON.parse(options.body);
  
  
  addid += 1;
  address.id = addid;
  console.log(address);
  addresses.push(address);
})

/**
 * 修改地址
 */
Mock.mock(`${baseUrl}address`, 'put', (options) => {
  let address = JSON.parse(options.body);
  console.log(address);
  
  const id = address.id;
  for(let i of addresses) {
    console.log(i);
    
    if(i.id === id) {
      i = Object.assign(i, address);
    } 
  }
  console.log(addresses);
  
})

/**
 * 删除地址
 */
Mock.mock(`${baseUrl}address`, (options) => {
  const address = JSON.parse(options.body);
  addresses.filter(item => item.id !== address.id)
})