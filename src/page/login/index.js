import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import * as actions from '../../redux/actions/LoginAction'
class Login extends Component {
    componentWillUnmount() {
        // this.props.loginOut()
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.props.status}</Text>
                <Text>{JSON.stringify(this.props.user)}</Text>
                <Button title={'登录'} onPress={() => {
                    // alert('login')
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
