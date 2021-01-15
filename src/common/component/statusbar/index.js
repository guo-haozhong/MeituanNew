import React, { Component } from 'react';
import { StatusBar } from 'react-native';
export class StatusBarCommon extends Component {
    render() {
        const { barStyle, backgroundColor } = this.props
        return (
            <StatusBar barStyle={barStyle} backgroundColor={backgroundColor?backgroundColor:'transparent'} />
        );
    }
}