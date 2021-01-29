import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//TabBottom页面
import { HomeScreen } from './page/home'
import { MessageScreen } from './page/message'
import { GoodsScreen } from './page/goods'
import { MineScreen } from './page/mine'
//其他页面
import { ModalScreen } from './page/others/modal/ModalScreen'
import { DrawerScreen } from './page/others/drawer'
import { DrawerBScreen } from './page/others/drawer/drawerB'
//自定义TabBar
import { MyCustomTaBar } from './router/tabbar'
import { colors } from './common/theme/color';
import { Images } from './image';
import { StatusBar } from 'react-native';

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
            return <Image source={icon} style={{width:24,height:24}}/>
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
    MyModal: {
        screen: ModalScreen,
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});

const DrawerNavigator = createDrawerNavigator({
    Main: {
        screen: AppNavigator,
    },
    drawerA: {
        screen:DrawerScreen
    },
    drawerB: {
        screen:DrawerBScreen
    },
}, {
    order: [ 'Main','drawerA', 'drawerB'],//routeNames数组，用于定义抽屉项目的顺序
    initialRouteName: 'Main',
    drawerType:'front',
    drawerLockMode: 'unlocked',//设置是否响应手势
    drawerWidth: 250, //抽屉的宽度
    drawerPosition: 'left', //选项是left或right。默认是left位置。
    useNativeAnimations: true, //启用原生动画。默认是true。
    drawerBackgroundColor: colors.theme, //使用抽屉背景获取某种颜色。默认是white
    contentComponent:(props)=>(<DrawerBScreen {...props}/>)
});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component {
    componentDidMount(){
        StatusBar.setBackgroundColor(colors.theme)
        StatusBar.setBarStyle('dark-content')
    }
    render() {
        return <AppContainer />;
    }
}
