import React, { Component } from 'react'
import { View } from 'react-native'

export default class Header extends Component {
    render() {
        const { leftComponent, centerComponent, rightComponent, containerStyle } = this.props
        return (
            <View style={[{ flexDirection: 'row',paddingVertical:10 }, { ...containerStyle }]}>
                <View style={{ flex: 1 }}>{leftComponent}</View>
                {centerComponent}
                <View style={{ flex: 1 }}>{rightComponent}</View>
            </View>
        )
    }
}
