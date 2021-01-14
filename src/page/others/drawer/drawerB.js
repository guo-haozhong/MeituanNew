import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class DrawerBScreen extends Component {
    static navigationOptions = {
        drawerLabel: '页面B'
    };
    render() {
        return (
            <View style={{}}>
                <View style={{margin:20}}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('MyModal')
                    }}>DrawerScreen</Text>
                </View>
                <View style={{margin:20}}>
                    <Text onPress={() => {
                        this.props.navigation.closeDrawer()
                    }}>返回</Text>
                </View>

            </View>
        );
    }
}