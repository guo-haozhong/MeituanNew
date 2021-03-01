import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//TabBottom页面
import  HomeScreen  from '../page/home'
import  MessageScreen  from '../page/message'
import  GoodsScreen  from '../page/goods'
import  MineScreen  from '../page/mine'
//home
import  DetailScreen  from '../page/home/Detail/index'
import Login from '../page/login'
//其他页面
import { SwiperScreen } from '../page/others/swiper/SwiperScreen'
import { DrawerScreen } from '../page/others/drawer'
import { DrawerBScreen } from '../page/others/drawer/drawerB'

import { colors } from '../common/theme/color';
import { Images } from '../image';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Goods: {
        screen: GoodsScreen,
    },
    Message: {
        screen: MessageScreen,
    },
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
            return <Image source={icon} style={{ width: 24, height: 24 }} />
        },
    }),
    tabBarOptions: {
        initialRouteName: 'Home',
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
    }
});
const AppNavigator = createStackNavigator({
    Main: {
        screen: TabNavigator,
    },
    Login: {
        screen: Login
    },
    swiper: {
        screen: SwiperScreen,
    },
    Detail: {
        screen: DetailScreen
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});
//抽屉
const DrawerNavigator = createDrawerNavigator({
    Main: {
        screen: AppNavigator,
    },
    drawerA: {
        screen: DrawerScreen
    },
    drawerB: {
        screen: DrawerBScreen
    },
}, {
    order: ['Main', 'drawerA', 'drawerB'],//routeNames数组，用于定义抽屉项目的顺序
    initialRouteName: 'Main',
    drawerType: 'front',
    drawerLockMode: 'unlocked',//设置是否响应手势
    drawerWidth: 250, //抽屉的宽度
    drawerPosition: 'left', //选项是left或right。默认是left位置。
    useNativeAnimations: true, //启用原生动画。默认是true
    drawerBackgroundColor: colors.theme, //使用抽屉背景获取某种颜色。默认是white
    contentComponent: (props) => (<DrawerBScreen {...props} />)
});
export default AppContainer = createAppContainer(AppNavigator); //注意这里不要用const去导出 export default