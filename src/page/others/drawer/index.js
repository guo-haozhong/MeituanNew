import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class DrawerScreen extends Component {
    static navigationOptions = {
        drawerLabel: '页面1'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => {
                    // this.props.navigation.goBack()
                    this.props.navigation.openDrawer()
                }}>DrawerScreen</Text>
            </View>
        );
    }
}