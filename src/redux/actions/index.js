
import * as actionType from '../actionsTypes/index'

// 设置用户信息
export function setUserInfo(userInfo) {
    return {
        type: actionType.SET_USERINFO,
        state: userInfo
    }
}

// 清空用户信息
export function clearUserInfo() {
    return {
        type: actionType.CLEAR_USERINFO
    }
}
