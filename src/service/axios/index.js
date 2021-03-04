import HttpRequest from './base'
import {api} from '../api'

export const getDetail = async (params) => {
    const res = await HttpRequest.post(api.detail.getDetail, params)
    return res
}

export const getUserInfo = async (params) => {
    const res = await HttpRequest.get(api.user.getUserInfo, params)
    return res
}