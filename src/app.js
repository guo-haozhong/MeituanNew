import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//TabBottom页面
import { HomeScreen } from './page/home'
import { GoodsScreen } from './page/goods'
import { MessageScreen } from './page/message'
import { MineScreen } from './page/mine'
//其他页面
import { ModalScreen } from './page/others/modal/ModalScreen'

import {MyCustomTaBar} from './router/tabbar'
import { colors } from './common/theme/color';
import { Images } from './image';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Goods: {
        screen: GoodsScreen,
    },
    // Message: {
    //     screen: MessageScreen,
    // },
    Mine: {
        screen: MineScreen,
    }
}, {
    // tabBarComponent:(props)=>(
    //     <MyCustomTaBar {...props}/>
    // )
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let icon;
            if (routeName === 'Home') {
                icon = focused ? Images.tab.home_sel : Images.tab.home
            } else if (routeName === 'Goods') {
                icon = focused ? Images.tab.goods_sel : Images.tab.goods
            } else if (routeName === 'Message') {
                icon = focused ? Images.tab.message_sel : Images.tab.message
            } else if (routeName === 'Mine') {
                icon = focused ? Images.tab.mine_sel : Images.tab.mine
            }
            return <Image source={icon} />
        },
    }),
    tabBarOptions: {
        initialRouteName: 'Home',
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
    },

});
const AppNavigator = createStackNavigator({
    Main: {
        screen: TabNavigator,
    },
    MyModal: {
        screen: ModalScreen,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});
 
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
