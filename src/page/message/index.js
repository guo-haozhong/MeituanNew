import React, { Component } from 'react';
import { View, Text } from 'react-native';
export class MessageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}