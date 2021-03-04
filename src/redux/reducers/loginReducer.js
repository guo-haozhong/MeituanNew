import * as type from '../actionsTypes/index'

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