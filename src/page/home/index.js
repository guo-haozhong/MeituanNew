import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Animated, Dimensions, StatusBar,
    RefreshControl, FlatList
} from 'react-native';
//file
import { StatusBarCommon } from '../../common/component/statusbar'
import { colors } from '../../common/theme/color';
import { HomeHeader } from './component'
import { Images } from '../../image';
import { FourView, SwiperView } from './component/HookView'
import { FirstRoute } from './component/tabview/FirstRoute'
import { SecondRoute } from './component/tabview/SecondRoute'
import { ThirdRoute } from './component/tabview/ThirdRoute'
import StickyHeader from '../../common/component/stickyheader'
//lib
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

//constant
const initialLayout = { width: Dimensions.get('window').width };
export class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: '猜你喜欢' },
                { key: 'second', title: '今日特价' },
                { key: 'third', title: '发现好店' }
            ],
            scrollY: new Animated.Value(0),
            tabColor: colors.bgColorfa,
            refreshing: false
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '首页'),
            headerStyle: {
                // backgroundColor: colors.theme,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                // fontWeight: 'bold',
            },
        };
    };
    handleScroll = (e) => {
        let { y } = e.nativeEvent.contentOffset
        // console.log('y==' + y);
        const { tabColor } = this.state
        if (y >= 310) {
            if (tabColor == colors.bgColorfa) {
                this.setState({ tabColor: '#fff' })
            }
        } else {
            if (tabColor == '#fff') {
                this.setState({ tabColor: colors.bgColorfa })
            }
        }
    }
    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 2000)
    }
    render() {
        let iconAppArr = [
            { icon: Images.home.ic_home_1, name: '外卖' },
            { icon: Images.home.ic_home_2, name: '美食' },
            { icon: Images.home.ic_home_3, name: '咖啡' },
            { icon: Images.home.ic_home_4, name: '休闲' },
            { icon: Images.home.ic_home_5, name: '甜品' },
            { icon: Images.home.ic_home_6, name: '西餐' },
            { icon: Images.home.ic_home_7, name: '优选' },
            { icon: Images.home.ic_home_8, name: '旅游' },
            { icon: Images.home.ic_home_9, name: '买药' },
            { icon: Images.home.ic_home_10, name: '团好货' }
        ]
        iconAppArr = iconAppArr.concat(iconAppArr).concat(iconAppArr)
        let pageArr = []
        for (let i = 0; i < iconAppArr.length; i += 15) {
            pageArr.push(iconAppArr.slice(i, i + 15))
        }

        const iconArr = [
            { icon: Images.home.ic_scan_black, name: '扫一扫' },
            { icon: Images.home.ic_fk_black, name: '付款码' },
            { icon: Images.home.ic_recharge, name: '充值' },
            { icon: Images.home.ic_chuxing, name: '出行' }
        ]

        const { index, routes, tabColor, refreshing } = this.state
        const renderScene = SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute
        });
        return (
            <View style={styles.container}>
                {/* <StatusBarCommon barStyle={"dark-content"} backgroundColor={colors.theme} /> */}
                <HomeHeader />
                <Animated.FlatList
                    style={{ backgroundColor: colors.theme, flex: 1 }}
                    data={[]}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={colors.refreshColor} />
                    }
                    onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.state.scrollY, } }
                    }], { useNativeDriver: true, listener: this.handleScroll })
                    }
                    scrollEventThrottle={1}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ backgroundColor: colors.bgColorfa }}>
                            <View style={{
                                backgroundColor: colors.theme,
                                width: SCREEN_WIDTH
                            }}>
                                <FourView data={iconArr} col={4} />
                            </View>
                            <SwiperView data={pageArr} />
                            <Animated.View style={{
                                flex: 1,
                                width: SCREEN_WIDTH,
                            }}>
                                <TabView
                                    style={{}}
                                    navigationState={{ index, routes }}
                                    swipeEnabled={true}
                                    renderScene={renderScene}
                                    renderTabBar={(props) =>
                                        <StickyHeader
                                            stickyHeaderY={310} // 滑动到多少悬浮
                                            stickyScrollY={this.state.scrollY} >
                                            <View style={{ flexDirection: "row", backgroundColor: tabColor }}>
                                                <TabBar {...props}
                                                    tabStyle={{ width: (SCREEN_WIDTH) / 3 }}
                                                    indicatorStyle={styles.indicatorStyle}
                                                    style={{ backgroundColor: 'transparent', justifyContent: 'center', flex: 1 }}
                                                    renderLabel={({ route, focused, }) => (
                                                        <View style={{ width: (SCREEN_WIDTH) / 3, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={focused ? styles.focusedText : styles.unFocusedText}>{route.title}</Text>
                                                        </View>
                                                    )}
                                                />
                                            </View>
                                        </StickyHeader>
                                    }
                                    onIndexChange={(index) => { this.setState({ index }) }}
                                    initialLayout={initialLayout}
                                />
                            </Animated.View>
                        </View>} >
                </Animated.FlatList>
            </View>
        );
    }
}
// const androidH = StatusBar.currentHeight + 44
// const PALL_SCROLLVIEW_HEIGHT = screenUtils.Android ? androidH : screenUtils.isIphoneX ? 84 : 64
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColorfa
    },
    indicatorStyle: {
        backgroundColor: colors.theme,
        width: 40,
        height: 3,
        borderRadius: 1.5,
        marginLeft: (SCREEN_WIDTH / 3 - 40) / 2
    },
    focusedText: {
        color: colors.activeTintColor,
        fontSize: 14,
        fontWeight: 'bold'
    },
    unFocusedText: {
        color: colors.textColor,
        fontSize: 14,
    },

})