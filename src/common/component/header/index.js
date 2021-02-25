import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

export default class Header extends Component {
    render() {
        const { leftComponent, centerComponent, rightComponent, containerStyle } = this.props
        return (
            <View style={[styles.contain, { ...containerStyle }]}>
                <View style={{ flex: 1 }}>{leftComponent}</View>
                {centerComponent}
                <View style={{ flex: 1 }}>{rightComponent}</View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        height: 70,
        alignItems: "center",
        paddingTop: Android ? StatusBar.currentHeight + 10 : isIphoneX ? 44 + 10 : 24 + 10,
        paddingBottom: 20
    }
})