/* jshint esversion: 6 */
import axios from 'axios';
class HttpRequest {
  constructor (baseURL) {
    this.baseUrl = baseURL
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }
    };
    return config;
  }
  distroy (url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      // if (getToken()) {
      //   config.headers.Authorization = getToken(); // 设置验证头
      // }
      return config;
    }, error => {
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {  
      if (res.status !== 200 && res.status !== 201 && res.status !== 202 && res.status !== 204) {

      }
      return Promise.resolve(res.data)
    },error => {
      // if (error.response.status === 401) {
      //   Cookies.remove(TOKEN_KEY);
      //   window.location.href = window.location.pathname + '#/login';
      //   Notice.error({
      //     title:'',
      //     desc:'未登录，或登录失效，请重新登录'
      //   });
      // } else {
      //   if (!!error.response.data.message) {
      //       Notice.error({
      //         title:'',
      //         desc:error.response.data.message,
      //         duration: 5
      //       });
      //     }
      // }
      return Promise.reject(error);
    });
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
