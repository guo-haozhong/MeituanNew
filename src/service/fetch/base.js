const HOST = 'https://www.fastmock.site/mock/1c3e3c916c27499421b8a4ff15449a51/test'
const UploadHOST = 'https://www.uploadfile.com'
const Method = ['GET', 'POST', 'PUT', 'DELETE']
const Content_Type = ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded']
const timeout = 30000 //超时设置

class BaseRequest {
    constructor(options) {

    }

    post(options) {
        const url = options.url
        const params = options.params
        const callback = options.callback

        let ContentType = Content_Type[0]//Content-Type
        let body = ''

        if (options.showloading) {
            //显示loading加载
        }

        //如果有传ContentType
        if (options.Content_Type) {
            ContentType = options.Content_Type
        }
        //接口使用 formdata
        let formData = new FormData();
        const keys = Object.keys(params)
        keys.forEach((key) => {
            formData.append(key, params[key])
        })
        //接口使用 json
        let paramsJson = JSON.stringify(params)

        if (ContentType == Content_Type[0]) {
            body = paramsJson
        } else if (ContentType == Content_Type[1]) {
            body = formData
        }

        let headers = {
            'Content-Type': ContentType,
            'Authorization': 'Bearer token'
        }
        let requrl = HOST + url
        console.log('开始请求：\n' + 'url=' + requrl + '\n请求params=' + JSON.stringify(params));
        this._fetch(fetch(requrl, {
            method: Method[1],
            headers: headers,
            body: body
        }), timeout)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject(response)
                }
            })
            .then((responseData) => {
                console.log('接口返回数据：' + JSON.stringify(responseData));
                callback && callback(responseData)
            })
            .catch((error) => {
                if (error == 'timeOut') {
                    callback && callback({ result: false, msg: '网络请求超时，请稍后再试' })
                } else {
                    callback && callback({ result: false, msg: '网络异常，请稍后再试' })
                }
            })
    }

    // 为网络请求添加超时设置
    _fetch = (fetch, timeOut) => {
        return Promise.race([
            fetch,
            new Promise((resolve, reject) => {
                setTimeout(() => reject('timeOut'), timeOut);
            })
        ])
    }

    get(options) {
        let url = options.url
        const params = options.params
        const callback = options.callback

        let ContentType = Content_Type[0]//Content-Type

        if (options.showloading) {
            //显示loading加载
        }

        let headers = {
            'Content-Type': ContentType,
            'Authorization': 'Bearer token'
        }

        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }

        console.log('开始请求：\n' + HOST + url);
        this._fetch(fetch(HOST + url, {
            method: Method[0],
            headers: headers
        }), timeout)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject(response)
                }
            })
            .then((responseData) => {
                console.log('接口返回数据：' + JSON.stringify(responseData));
                callback && callback(responseData)
            })
            .catch((error) => {
                if (error == 'timeOut') {
                    callback && callback({ result: false, msg: '网络请求超时，请稍后再试' })
                } else {
                    callback && callback({ result: false, msg: '网络异常，请稍后再试' })
                }
            })
    }

    uploadImage(options) {
        const url = UploadHOST + options.url
        const params = options.params
        const callback = options.callback

        const fileArr = params.fileArr
        let formData = new FormData()
        fileArr.forEach(item => {
            formData.append('file', item)
        })

        const headers = {
            'Authorization': 'Bearer token',
            'Content-Type': 'multipart/form-data;charset=utf-8'
        }

        this._fetch(fetch(url, {
            method: Method[1],
            headers: headers
        }), timeout)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('httpError')
                }
            })
            .then((responseData) => {
                console.log('[ 上传图片 ]接口返回参数：' + JSON.stringify(responseData))
                callback && callback(responseData)
            })
            .catch((error) => {
                console.log('[ 上传图片 ]接口返回参数：' + error)
                if (error == 'timeOut') {
                    callback && callback({ result: false, msg: '网络请求超时，请稍后再试' })
                } else {
                    callback && callback({ result: false, msg: '网络异常，请稍后再试' })
                }
            })
    }

}

export default HttpRequest = new BaseRequest({})