import HttpRequest from "./base";
import {api} from '../api'
//可以根据接口类型新建多个文件

export const getDetail = (params, callback) => {
    HttpRequest.post({
        url: api.detail.getDetail,
        params,
        callback
    })
}

export const getUserInfo = (params, callback) => {
    HttpRequest.get({
        url: api.user.getUserInfo,
        params,
        callback
    })
}

//上传图片
export const uploadImage=(fileArr,callback)=>{
    HttpRequest.uploadImage({
        url:'/api/upload',
        fileArr,
        callback
    })
}