import * as type from '../actionsTypes/index'
import { XStorage } from 'react-native-easy-app'
import { AsyncStorage } from 'react-native'

export const LoginInfo = {
    status: "未登录",
    isLogin: false,
    user: {},
};
export const login = function (state = LoginInfo, action) {
    switch (action.type) {
        case type.LOGINING:

            return {
                ...state,
                status: "登录中",
                isLogin: false,
            };
        case type.LOGIN_SUCCESS:
            XStorage.initStorage(LoginInfo, AsyncStorage, () => {
                LoginInfo.status = "登陆成功"
                LoginInfo.isLogin = true
                LoginInfo.user = JSON.stringify(action.state)
            });
            return {
                ...state,
                status: "登陆成功",
                isLogin: true,
                user: action.state
            };
        case type.LOGIN_ERROR:
            return {
                ...state,
                status: "登录失败",
                isLogin: false
            };
        case type.LOGOUT:
            return {
                ...state,
                status: "未登录",
                isLogin: false,
                user: {}
            };
        default:
            return state;
    }
}