import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { colors } from './common/theme/color';
import {AppContainer} from './router/index'
export default class App extends Component {
    componentDidMount(){
        //设置沉浸式StatusBar
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setTranslucent(true)
        StatusBar.setBarStyle('dark-content')
    }
    render() {
        return <AppContainer />;
    }
}
