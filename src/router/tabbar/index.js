import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { colors } from '../../common/theme/color';
import { Images } from '../../image';
export class MyCustomTaBar extends Component {

    render() {
        // console.log(JSON.stringify(this.props));
        const { state } = this.props.navigation
        state.routes.forEach((e, index) => {
            if (state.index == index) {
                e.focused = true
            } else {
                e.focused = false
            }
        });
        return (
            <ImageBackground style={{ width: SCREEN_WIDTH, height: 56 }}
                source={Images.tab.foot}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    {
                        state.routes.length > 0 && state.routes.map((item, index) => {
                            return <Item {...this.props} key={index}
                                routeName={item.routeName} focused={item.focused} />
                        })
                    }
                </View>
            </ImageBackground>
        );
    }
}
const Item = class extends Component {
    getIcon = () => {
        const { routeName, focused } = this.props;
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
        return icon
    }
    getName = () => {
        const { routeName, focused } = this.props;
        let name;
        if (routeName === 'Home') {
            name = '首页'
        } else if (routeName === 'Goods') {
            name = '好货'
        } else if (routeName === 'Message') {
            name = '消息'
        } else if (routeName === 'Mine') {
            name = '我的'
        }
        return name
    }
    gotoRoute = (routeName) => {
        this.props.navigation.navigate(routeName)
    }
    render() {
        const { routeName, focused } = this.props;
        if (routeName == 'Goods') {
            return (<TouchableWithoutFeedback
                onPress={() => { this.gotoRoute(routeName) }}
                style={{
                    // flex: 1,
                    height:100,
                    width: SCREEN_WIDTH / 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top:-30, 
                    // backgroundColor: 'red' 
                }}>
                <View style={{ bottom: 10,}}>
                    <View style={{
                        width: 50, height: 50, borderRadius: 25,
                        backgroundColor: colors.theme
                    }}></View>
                    {/* <Image source={this.getIcon()} style={{ width: 40, height: 40 }} /> */}
                </View>
                <View>
                    <Text style={focused ? styles.activeTintColor : styles.inactiveTintColor}>{this.getName()}</Text>
                </View>
            </TouchableWithoutFeedback>)
        }
        return (
            <TouchableOpacity
                onPress={() => { this.gotoRoute(routeName) }}
                style={{
                    flex: 1,
                    width: SCREEN_WIDTH / 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image source={this.getIcon()} style={{ width: 20, height: 20 }} />
                <Text style={focused ? styles.activeTintColor : styles.inactiveTintColor}>{this.getName()}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    activeTintColor: {
        color: colors.activeTintColor,
        fontSize: 12,
    },
    inactiveTintColor: {
        color: colors.inactiveTintColor,
        fontSize: 12
    }
});