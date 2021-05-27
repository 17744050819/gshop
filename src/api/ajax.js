import axios from 'axios';
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        let promise;
    
        if(type === 'GET'){
            //拆分字符串拼接到url后
            let dataStr = '';//数据拼接
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' +data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            //发送post请求
            promise = axios.post(url,data)
        }
        promise.then(resolve=>{
            resolve(resolve.data)
        }).catch(err=>{
            reject(err)
        })
    })
    
}