import React, { Component } from 'react';
import { StatusBar, BackHandler, ToastAndroid } from 'react-native';
import { Provider, connect } from 'react-redux'
import store from './redux/index'
import AppContainer from './router/index'
import { NavigationActions } from 'react-navigation';
import {createReduxContainer} from 'react-navigation-redux-helpers'

const AppWithRedux=createReduxContainer(AppContainer,'root')
const mapStateToProps = (state) => ({
    state: state.nav,
  });
const AppWithNavigationState = connect(mapStateToProps)(AppWithRedux)
export default class App extends Component {
    constructor(props) {
        super(props)
        this.lastBackPressed = null
    }

    componentDidMount() {
        //设置沉浸式StatusBar
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setTranslucent(true)
        StatusBar.setBarStyle('dark-content')

        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        // alert(JSON.stringify(store.getState()))
        if (store.getState().nav.index !== 0) {
            store.dispatch(NavigationActions.back());
            return true
        }

        //退出应用
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }

        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;

    };
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

  