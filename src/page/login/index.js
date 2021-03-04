import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button,AsyncStorage } from 'react-native'
import * as actions from '../../redux/actions/LoginAction'
import {LoginInfo} from '../../redux/reducers/loginReducer'
import { XStorage } from 'react-native-easy-app'
class Login extends Component {
    componentDidMount(){
        XStorage.initStorage(LoginInfo, AsyncStorage, () => {
            alert(JSON.stringify(LoginInfo))
        });
    }
    componentWillUnmount() {
        // this.props.loginOut()
        XStorage.initStorage(LoginInfo, AsyncStorage, () => {
            LoginInfo.isLogin=false
            LoginInfo.status='未登录'
            LoginInfo.user={}
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.props.status}</Text>
                <Text>{JSON.stringify(this.props.user)}</Text>
                <Button title={'登录'} onPress={() => {
                    this.props.login('hozan', '123')
                }} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    // nav: state.nav,
    status: state.login.status,
    user: state.login.user
})

const mapDispatchToProps = dispatch => ({
    login: (name, psd) => dispatch(actions.login(name, psd)),
    loginOut: () => dispatch(actions.loginOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
