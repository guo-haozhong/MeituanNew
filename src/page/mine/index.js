import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
//lib
import { Image, Header } from 'react-native-elements';
//file
import { colors } from '../../common/theme/color';
import { Images } from '../../image';
import { FourView, ColView } from '../home/component/HookView'
import { Layout } from './component/HookView'
const iconArr = [
    { icon: Images.mine.icon_h1, name: '收藏' },
    { icon: Images.mine.icon_h2, name: '评价' },
    { icon: Images.mine.icon_h3, name: '足迹' },
    { icon: Images.mine.icon_h4, name: '红包卡券' }
]
const iconArr1 = [
    { icon: Images.mine.icon_mine3, name: '我的订单' },
    { icon: Images.mine.icon_mine4, name: '待付款' },
    { icon: Images.mine.icon_mine5, name: '待使用' },
    { icon: Images.mine.icon_mine6, name: '待评价' },
    { icon: Images.mine.icon_mine7, name: '退款/售后' }
]
const iconArr2 = [
    { icon: Images.mine.icon_game1, name: '小美果园', desc: '0元领水果' },
    { icon: Images.mine.icon_game2, name: '红包签到', desc: '连签7天兑红包' },
    { icon: Images.mine.icon_game3, name: 'JJ斗地主', desc: '兑10元无门槛券' }
]

const iconArr3 = [
    { icon: Images.home.ic_home_1, name: '充值中心' },
    { icon: Images.mine.icon_tool2, name: '团长招募', isshowTip: true, tiptext: '赚钱' },
    { icon: Images.home.ic_home_1, name: '工资计算器' },
    { icon: Images.home.ic_home_1, name: '实时公交' },
    { icon: Images.home.ic_home_1, name: '电信营业厅' },
    { icon: Images.home.ic_home_1, name: '招聘/合作' },
    { icon: Images.home.ic_home_1, name: '发票助手' },
    { icon: Images.home.ic_home_1, name: '火车站大屏' },
    { icon: Images.home.ic_home_1, name: '垃圾分类' },
    { icon: Images.home.ic_home_1, name: '墨迹天气' },
    { icon: Images.home.ic_home_1, name: '企业服务' },
    { icon: Images.home.ic_home_1, name: '充电宝加盟' },
    { icon: Images.home.ic_home_1, name: '美团大学' }
]
export class MineScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '我的'),
        };
    };
    constructor(props) {
        super(props)
        this.state = {
            scrollY: new Animated.Value(0),
            tabColor: colors.bgColorfa,
            refreshing: false
        }
    }
    handleScroll = (e) => {
        let { y } = e.nativeEvent.contentOffset
        console.log('y==' + y);
    }
    render() {
        let intep = this.state.scrollY.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 1],
        })
        let intep1 = this.state.scrollY.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
        })
        return (
            <View style={styles.constain}>
                <HeaderWithName {...this.props} name={'hozan'} opacity={intep} />
                {/* <DefalutHeader {...this.props} opacity={intep1} /> */}
                <Animated.ScrollView
                    onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.state.scrollY, } }
                    }], { useNativeDriver: true, listener: this.handleScroll })}
                    scrollEventThrottle={1}
                    showsVerticalScrollIndicator={false}>
                    <UserView data={iconArr} />
                    <View style={{
                        backgroundColor: '#fff', marginHorizontal: 10, borderRadius: 10, top: -20
                    }}>
                        <ColView data={iconArr1} col={5} width={SCREEN_WIDTH - 40} isLimitheight={true} />
                    </View>
                    <ContentView1 />
                    <ContentView2 data={iconArr2} />
                    <ContentView3 data={iconArr3} />

                </Animated.ScrollView>
            </View>
        );
    }
}

//zIndex:999
function HeaderWithName(props) {
    return (
        <Animated.View>
            <Header
                statusBarProps={{ barStyle: 'dark-content', backgroundColor: colors.theme }}
                containerStyle={{
                    backgroundColor: colors.theme,
                    borderBottomColor: colors.theme
                }}
                leftComponent={<View />}
                centerComponent={
                    <Animated.View style={{ opacity: props.opacity }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>{props.name}</Text>
                    </Animated.View>}
                rightComponent={<View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={Images.mine.icon_mine1} style={[styles.img]} />
                    <Image source={Images.mine.icon_mine2} style={[styles.img, { marginLeft: 15, marginRight: 10 }]} />
                </View>} />
        </Animated.View>
    )
}

function UserView(props) {
    const { data } = props
    return (
        <View style={{ backgroundColor: colors.theme, height: 160 }}>
            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                <Image source={Images.mine.icon_head} style={{ width: 45, height: 45 }} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.text}>hozan</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={styles.viewbg}>
                            <Text style={styles.text_12}>信任分732</Text>
                        </View>
                        <View style={[styles.viewbg, { marginLeft: 10 }]}>
                            <Text style={styles.text_12}>成长值</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <FourView data={data} col={4} />
            </View>
        </View>
    )
}
//我的钱包
function ContentView1(props) {
    return (
        <Layout style={{ top: -10 }}>
            <View style={{ height: 160, }}>

            </View>
        </Layout>
    )
}
//游戏推荐
function ContentView2(props) {
    const { data } = props
    return (
        <View style={[colors.bg, { marginBottom: 10 }]}>
            <Text style={[styles.text_14, { marginVertical: 15, marginHorizontal: 10 }]}>互动签到</Text>
            <View style={styles.gameView}>
                {data.map((item, index) => {
                    return (
                        <View key={index}
                            style={{
                                width: (SCREEN_WIDTH - 40) / 2,
                                flexDirection: "row",
                                marginBottom: 10,
                                marginHorizontal: 10
                            }}
                        >
                            <View style={{ flex: 1 }}>
                                <Text style={[colors.textStyle333, { fontWeight: 'bold' }]}>{item.name}</Text>
                                <Text style={{ color: 'red', fontSize: 10, paddingTop: 5 }}>{item.desc}{'>'}</Text>
                            </View>
                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Image source={item.icon}
                                    style={{ width: 30, height: 30 }} />
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
//应用
function ContentView3(props) {
    const { data } = props
    return (
        <Layout style={{ marginBottom: 20 }}>
            <Text style={[styles.text_14, { marginVertical: 15, marginHorizontal: 10 }]}>推荐工具</Text>
            <ColView data={data} col={4} width={SCREEN_WIDTH - 40} isLimitheight={false} />
            <View style={{ height: 20 }}></View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    constain: {
        flex: 1,
        backgroundColor: colors.bgColorfa
    },
    text: {
        fontSize: 16,
        color: colors.textColor333,
        fontWeight: "bold"
    },
    text_14: {
        fontSize: 14,
        color: colors.textColor333,
        fontWeight: "bold"
    },
    text_12: {
        fontSize: 12,
        color: '#8c640c',
    },
    img: {
        width: 20, height: 20
    },
    viewbg: {
        backgroundColor: '#efc416',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 15
    },
    gameView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH
    }
})