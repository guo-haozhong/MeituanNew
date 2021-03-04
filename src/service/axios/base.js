import { Platform } from 'react-native'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

const HOST = 'https://www.fastmock.site/mock/1c3e3c916c27499421b8a4ff15449a51/test'
const UploadHOST = 'https://www.uploadfile.com'
const Method = ['GET', 'POST', 'PUT', 'DELETE']
const Content_Type = ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded']
const timeout = 30000 //超时设置

const defaultConfig = {
    baseURL: HOST,
    timeout: timeout,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'User-Agent': Platform.OS === 'android' ? 'Android' : 'IOS'
    }
}

class BaseRequest {
    constructor() {
        this.AxiosInstance = axios.create(defaultConfig)
        // Add a request interceptor
        this.AxiosInstance.interceptors.request.use(function (config) {
            // Do something before request is sent
            const token = ''//从store获取token
            if (token) {
                //如果已经登录，把token加到headers
                Object.assign(config.headers, {
                    Authorization: `Bearer ${token}`,
                })
            }
            return config;
        }, function (error) {
            //toast network error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.AxiosInstance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data

            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // toast network error
            return Promise.reject(error);
        });
    }

    async post(url, params, toast = true) {
        const response = await this.AxiosInstance.post(url, params)
        //判断返回的code去toast
        console.log(JSON.stringify(response))
        return response.data ? response.data : response
    }

    async get(url, params, toast = true) {
        const response = await this.AxiosInstance.get(url, params)
        //do something when response data
        console.log(JSON.stringify(response))
        return response.data ? response.data : response
    }

}

export default new BaseRequest()