import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View,Text } from 'react-native'
class Login extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>{JSON.stringify(this.props.nav)}</Text>
                <Text>{JSON.stringify(this.props.login)}</Text>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    login:state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
