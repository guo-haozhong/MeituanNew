import React, { Component } from 'react';
import { View, Text } from 'react-native';
export class MineScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '我的'),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Mine Screen</Text>
            </View>
        );
    }
}