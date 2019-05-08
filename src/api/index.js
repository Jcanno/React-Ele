import axios from '@/axios'

/** 
 * 登录
*/
export const login = () => {
    return axios.request({
        url: `login`,
        method: 'post',
        data: {
          name: 'aaa',
          pass: 'bbb'
        }
    })
}