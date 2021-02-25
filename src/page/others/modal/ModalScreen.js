import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from '../../../common/theme/color';
import { Images } from '../../../image';

export class ModalScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    render() {
        const { index } = this.state
        return (
            <View style={[{ width: SCREEN_WIDTH }]}>

            </View >
        );
    }
}