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

import storeDetail1 from '@/assets/storeDetail/storeDetail1.jpg'
import storeDetail2 from '@/assets/storeDetail/storeDetail2.jpg'
import storeDetail3 from '@/assets/storeDetail/storeDetail3.jpg'
import storeDetail4 from '@/assets/storeDetail/storeDetail4.jpg'
import storeDetail5 from '@/assets/storeDetail/storeDetail5.jpg'
import storeDetail6 from '@/assets/storeDetail/storeDetail6.jpg'
import storeDetail7 from '@/assets/storeDetail/storeDetail7.jpg'
import storeDetail8 from '@/assets/storeDetail/storeDetail8.jpg'
import storeDetail9 from '@/assets/storeDetail/storeDetail9.jpg'
import storeDetail10 from '@/assets/storeDetail/storeDetail10.jpg'

const Random = Mock.Random;
const tokens = [
  '0x8546846545411589', '0x3246846551254863', 
  '0x8984615648463482', '0x4684885313548655',
  '0x8787524386123231', '0x8798143213546631'
]

const storefees = [
  0, 1, 2, 3, 4
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
  store1, store2, store3, store4, store5, store6, store7, store8, store9,
]

const menuimgs = [
  storeDetail1, storeDetail2, storeDetail3, storeDetail4, storeDetail5, storeDetail6, storeDetail7, storeDetail8, storeDetail9, storeDetail10
]

const menunames = [
  '梅菜炒饭', '广式腊肠炒饭', '生炒牛肉炒饭', '土豆肉丝木桶饭', '蜜汁烤肉拌饭',
  '美味稻香肉', '伏地魔（超级鸡车）', '炒粉干', '蛋炒饭', '蜜汁叉烧脆皮鸡饭'
]

const menuintros = [
  '主要原料: 墨鱼, 蛤蜊',
  '1全翅2鸡腿2中翅4鸡块 主要原料: 鸡肉',
  '鸡翅包饭一个 主要原料: 鸡翅',
  '口水鸡 主要原料: 黄瓜, 鸡肉',
  '主要原料: 五花肉',
  '食材明细   豆干  肉丝   主要原料: 豆干, 猪肉',
  '食材明细 烤肉 土豆丝 黄瓜丝 主要原料: 鸡肉',
  '水果茶可以做去冰货值是少冰',
  '米饭，鲜蔬，雪菜，萝卜干，卤猪肉',
  '米饭，鲜蔬，雪菜，萝卜干，猪大排'
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
  menuimg: function() {
    return this.pick(menuimgs)
  },
  menuname: function() {
    return this.pick(menunames)
  },
  menuintro: function() {
    return this.pick(menuintros)
  }
})


// function checkToken(token) {
//   if(tokens.some(item => item === token)){
//     return true
//   }else {
//     return false
//   }
// }

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


let addresses = [];
let addid = 0;

/**
 * 获取地址
 */
Mock.mock(`${baseUrl}addresses`, (options) => {
  return addresses
})

/**
 * 添加地址
 */
Mock.mock(`${baseUrl}address`, 'post', (options) => {
  const address = JSON.parse(options.body);
  addid += 1;
  address.id = addid;
  addresses.push(address);
})

/**
 * 修改地址
 */
Mock.mock(`${baseUrl}address`, 'put', (options) => {
  let address = JSON.parse(options.body);
  const id = address.id;
  for(let i of addresses) {
    if(i.id === id) {
      i = Object.assign(i, address);
    } 
  }
})

/**
 * 删除地址
 */
Mock.mock( /http:\/\/localhost:3000\/address\/\d+/, 'delete', (options) => {
  const url = options.url;
  const id = parseInt(url.substring(url.lastIndexOf('/') + 1)); 
  for(let i = 0;i < addresses.length;i++) {
    if(addresses[i].id === id) {
      addresses.splice(i, 1);
    }
  }

})

/**
 * 获取菜单商品
 */
Mock.mock( `${baseUrl}storeDetail`, () => {
  let res = [];
  let num = Random.natural(1, 10);
  for(let i = 0;i < num;i++) {
    let obj = {
      id: i + 1,
      menuname: menunames[i],
      menuimg: menuimgs[i],
      menurate: Random.storerate(),
      menucount: Random.natural(1, 1000),
      menuprice: Random.natural(10, 40),
      menuintro: Random.menuintro(),
    }
    res.push(obj);
  }
  return res
})


let orders = [];
let orderid = 0;

/**
 * 添加订单
 */
Mock.mock(`${baseUrl}order`, 'post', (options) => {
  let order = JSON.parse(options.body);
  orderid += 1;
  order.id = orderid;
  orders.push(order);
})

/**
 * 获取订单
 */
Mock.mock(`${baseUrl}orders`, () => {
  return orders;
})