import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import { connect } from 'react-redux'

class DetailScreen extends Component {
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Text>{'数据'+JSON.stringify(this.props.login)}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.login,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
