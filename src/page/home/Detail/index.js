import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import { connect } from 'react-redux'

class DetailScreen extends Component {
    componentWillUnmount() {
        
    }
    componentDidMount() {
      
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                <Text>1234</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})

const mapStateToProps = (state) => ({
    login: state.login,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
