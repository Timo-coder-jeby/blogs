import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';
const service = {}
//console.log(process.env);
Message.closeAll()
// process.env.NODE_ENV == 'development' ? axios.defaults.baseURL = serverConfig.apiUrl : axios.defaults.baseURL = serverConfig.baseUrl

service.get = function (url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
      Message.error(`请求出错: ${err.message || err.msg}`)
    })
  })
}
service.post =  function (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
        Message.error(`请求出错: ${err.message || err.msg}`)
      })
  });
}
export default service
