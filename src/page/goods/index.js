import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Animated, Dimensions, StatusBar,
    RefreshControl, FlatList
} from 'react-native';
//file
import { colors } from '../../common/theme/color';
import { GoodHeader } from './component'
import { Images } from '../../image';
import StickyHeader from '../../common/component/stickyheader'
import { ListView } from './tabview/ListView'
import { ScrollViewList } from './component/HookView'
//lib
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

//constant
const initialLayout = { width: Dimensions.get('window').width };
export class GoodsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '省钱好货'),
        };
    };
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [],
            scenes: null,
            scrollY: new Animated.Value(0),
            tabColor: colors.bgColorfa,
            refreshing: false
        }
    }
    componentDidMount() {
        const initRoutes = [
            { key: 'one', title: '好货热卖', cost: '全国包邮' },
            { key: 'two', title: '美食', cost: '6.8' },
            { key: 'three', title: '酒店', cost: '68.8' },
            { key: 'four', title: '玩乐', cost: '18.8' },
            { key: 'five', title: '变美', cost: '66.8' }
        ]
        let combinescene = {}
        initRoutes.forEach(e => {
            combinescene[e.key] = ListView
        });
        this.setState({
            routes: initRoutes,
            scenes: combinescene
        })
    }
    handleScroll = (e) => {
        let { y } = e.nativeEvent.contentOffset
        // console.log('y==' + y);
        const { tabColor } = this.state
        if (y >= 215) {
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
        }, 3000)
    }
    render() {
        const { index, routes, scenes, tabColor, refreshing } = this.state
        // console.log(scenes);
        return (
            <View style={styles.container}>
                <GoodHeader />
                <Animated.FlatList
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
                        <View>
                            <View style={{ height: 100, backgroundColor: colors.theme }}></View>
                            <ScrollViewList {...this.props} />

                            <Animated.View style={{
                                flex: 1,
                                width: SCREEN_WIDTH,
                                top: -90
                            }}>
                                {scenes && <TabView
                                    navigationState={{ index, routes }}
                                    swipeEnabled={true}
                                    renderScene={SceneMap(scenes)}
                                    renderTabBar={(props) =>
                                        <StickyHeader
                                            stickyHeaderY={215} // 滑动到多少悬浮
                                            stickyScrollY={this.state.scrollY}>
                                            <View style={{ flexDirection: "row", backgroundColor: tabColor }}>
                                                <TabBar {...props}
                                                    scrollEnabled={true} //设置可拖动
                                                    pressColor={'gray'}
                                                    tabStyle={{ width: (SCREEN_WIDTH) / 4, height: 54 }}
                                                    // indicatorStyle={styles.indicatorStyle}
                                                    style={{ backgroundColor: 'transparent', flex: 1 }}
                                                    renderLabel={({ route, focused }) => (
                                                        <View style={{ width: SCREEN_WIDTH / 4, alignItems: 'center', justifyContent: 'center', height: 54, }}>
                                                            <Text style={focused ? styles.focusedText : styles.unFocusedText}>{route.title}</Text>
                                                            {focused ? (<View style={styles.indicatorView}>
                                                                <Text style={styles.text333}>{route.cost != '全国包邮' ? '¥' + route.cost + '起' : route.cost}</Text>
                                                            </View>) : <View style={{ alignItems: 'center' }}>
                                                                    {route.cost == '全国包邮' ? (<Text style={styles.textred}>{route.cost}</Text>) : (
                                                                        <Text style={styles.textred}>¥{route.cost}
                                                                            <Text style={styles.text333}>起</Text>
                                                                        </Text>
                                                                    )}
                                                                </View>}
                                                        </View>
                                                    )}
                                                    renderIndicator={(props) => {
                                                        return (
                                                            <View />
                                                        )
                                                    }}
                                                />
                                            </View>
                                        </StickyHeader>
                                    }
                                    onIndexChange={(index) => { this.setState({ index }) }}
                                    initialLayout={initialLayout}
                                />}
                            </Animated.View>
                        </View>} >
                </Animated.FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColorfa
    },
    indicatorStyle: {
        backgroundColor: colors.theme,
        width: 30,
        height: 3,
        borderRadius: 1.5,
        marginLeft: (SCREEN_WIDTH / 4 - 30) / 2
    },
    focusedText: {
        color: colors.textColor333,
        fontSize: 18,
        fontWeight: 'bold'
    },
    unFocusedText: {
        color: colors.textColor333,
        fontSize: 16,
        // fontWeight: 'bold'
    },
    indicatorView: {
        backgroundColor: colors.theme,
        paddingHorizontal: 4,
        borderRadius: 8
    },
    text333: { color: '#333', fontSize: 10 },
    textred: { color: 'red', fontSize: 10 }
})