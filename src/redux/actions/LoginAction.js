
import * as actionType from '../actionsTypes/index'

export function login(name, psw) {
    // console.log(name, psw);
    return dispatch => {
        //登录中
        dispatch(logining())
        fetch('https://www.baidu.com/', 'get')
            .then(res => {
                dispatch(loginSuccess({
                    name, psw
                }))
            })
            .catch(e => {
                dispatch(loginFail())
            })
    }
}
export function logining() {
    return {
        type: actionType.LOGINING
    }
}

export function loginSuccess(userInfo) {
    return {
        type: actionType.LOGIN_SUCCESS,
        state: userInfo
    }
}

export function loginFail() {
    return {
        type: actionType.LOGIN_ERROR
    }
}

export function loginOut() {
    return {
        type: actionType.LOGOUT
    }
}