import * as actionType from '../actionsTypes/index'
import { XStorage } from 'react-native-easy-app'
import { AsyncStorage } from 'react-native'
import { LoginInfo } from '../../redux/reducers/loginReducer'

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
                XStorage.initStorage(LoginInfo, AsyncStorage, () => {
                    LoginInfo.status = "登陆成功"
                    LoginInfo.isLogin = true
                    LoginInfo.user = JSON.stringify({
                        name, psw
                    })
                });
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