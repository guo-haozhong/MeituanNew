import React, { Component } from 'react'
import { FlatList, Animated } from 'react-native'
export default class index extends Component {
    constructor(props) {
        this.showAnimation = false
        this.animated = new Animated.Value(0)
        this.animation = () => this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
    }
    _onScroll(event) {
        let y = event.nativeEvent.contentOffset.y;
        if (y > pxToDp(300)) {
            this.setState({
                showNavBar: true
            }, () => {
                if (!this.showAnimation && this.animated._value != 1) {
                    this.showAnimation = true;
                    Animated.timing(this.animated, {
                        toValue: 1,
                        duration: 0.25 * 1000,
                        easing: Easing.linear
                    }).start(() => {
                        this.showAnimation = false
                    })
                }
            })

        } else {
            this.setState({
                showNavBar: false
            }, () => {
                if (!this.showAnimation && this.animated._value != 0) {
                    this.showAnimation = true;
                    Animated.timing(this.animated, {
                        toValue: 0,
                        duration: 0.25 * 1000,
                        easing: Easing.linear
                    }).start(() => {
                        this.showAnimation = false
                    })
                }
            })
        }
    }
    _renderNavbar() {
        return (
            <TouchableWithoutFeedback onPress={() => null}>
                <Animated.View style={[navbarStyles.container, {
                    opacity: this.animation(),
                }]}>

                    <View style={navbarStyles.container}>
                        <ImageBackground style={navbarStyles.bgSchoolCard} source={Images.home.card_top_bg_another}>
                            <View style={navbarStyles.schoolInfo}>
                                <ImageView
                                    default
                                    circular={true}
                                    width={pxToDp(60)}
                                    height={pxToDp(60)}
                                    source={isJRHX ? { uri: this.state.schoolInfo.icon } : Images.home.head_xdxy} />
                                <View
                                    style={{
                                        justifyContent: 'space-evenly',
                                        alignItems: 'flex-start',
                                        marginLeft: pxToDp(21),
                                    }}>
                                    <Text style={navbarStyles.schoolName}
                                        numberOfLines={1}>{this.props.userInfo.customName}</Text>

                                    <Text style={{
                                        color: '#FFFFFF',
                                        fontSize: pxToDp(22)
                                    }}> {Moment().format('dddd') + ''} {this.state.weeklyTimesInfo ? '第' + this.state.weeklyTimesInfo + '周' : ''}</Text>
                                </View>

                            </View>

                            <GirdView
                                row={1}
                                column={this.state.coreApps.length > 4 ? 4 : this.state.coreApps.length}
                                width={pxToDp(340)}
                                data={this.state.coreApps}
                                onClick={(item) => this.rnOnClick(item)}
                                viewStyle={{
                                    backgroundColor: '#00000000'
                                }}
                                renderTemplate={(item) =>
                                    <View style={navbarStyles.girdStyle}>
                                        <Image source={{ uri: item.icon }} style={navbarStyles.imgStyle} />
                                    </View>
                                }
                            />
                        </ImageBackground>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>

        )
    }
    _renderHeader() {
        return (
            <View>
                {this._renderSchoolInfo()}
            </View>
        )
    }
    _renderSchoolInfo() {
        return (
            <View style={schoolInfoStyles.container}>
                <ImageBackground style={iOS ? schoolInfoStyles.bgSchoolCard : schoolInfoStyles.bgSchoolCardAndroid}
                    source={Images.home.card_top_bg_xdxy}>
                    <View style={schoolInfoStyles.head}>
                        <ImageView
                            viewStyle={{ marginLeft: pxToDp(44) }}
                            default
                            circular={true}
                            width={pxToDp(78)}
                            height={pxToDp(78)}
                            source={isJRHX ? { uri: this.state.schoolInfo.icon } : Images.home.head_xdxy} />
                        <View
                            style={{ justifyContent: 'space-evenly', alignItems: 'flex-start', marginLeft: pxToDp(21), }}>
                            <Text style={schoolInfoStyles.schoolName}
                                numberOfLines={1}>{this.props.userInfo.customName}</Text>

                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: pxToDp(24)
                            }}> {Moment().format('dddd') + ''} {this.state.weeklyTimesInfo ? '第' + this.state.weeklyTimesInfo + '周' : ''}</Text>
                        </View>
                    </View>
                    <GridView
                        width={SCREEN_WIDTH}
                        column={this.state.coreApps.length > 4 ? 4 : this.state.coreApps.length}
                        viewStyle={{ backgroundColor: '#00000000' }}
                        ref={'gridViewCore'}
                        renderTemplate={(item, index) => {
                            return this._renderCoreAppItem('gridViewCore', item, index)
                        }}
                        data={this.state.coreApps.slice(0, 4)} />
                </ImageBackground>
                <View style={schoolInfoStyles.subStyle}>
                    <GirdView
                        all
                        width={pxToDp(670)}
                        column={this.state.subApps.length > 4 ? 4 : this.state.subApps.length}
                        viewStyle={{ backgroundColor: '#00000000', justifyContent: 'space-around' }}
                        ref={'gridViewSub'}
                        itemRefPrefix={'itemSub'}
                        data={this.props.recentlySubApps.slice(0, 4)}
                      />
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.state.showNavBar ? this._renderNavbar() : false}
                <FlatList
                    onScroll={this._onScroll}
                    ref={(flatList) => this._flatList = flatList}
                    data={this.state.dataArray}
                    onEndReachedThreshold={0.000001}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={this._renderHeader()}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => this._renderItemView(item)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        marginTop: iOS ? 0 : 0 - StatusBar.currentHeight,
    },

    schoolInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: isIphoneX ? pxToDp(92) + pxToDp(30) : pxToDp(92),
        marginLeft: pxToDp(20),
    },

    schoolName: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: pxToDp(44),
        marginLeft: pxToDp(32),
        // ios圆角和阴影
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: pxToDp(6),
        shadowOffset: { width: 2, height: 2 },
    },

    //应用位item
    girdStyle: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        width: pxToDp(328),
        height: pxToDp(180),
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingLeft: pxToDp(20),
        marginBottom: pxToDp(10),

        borderRadius: pxToDp(8),
        elevation: 3,            // ios圆角和阴影
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: pxToDp(6),
        shadowOffset: { width: 2, height: 2 },
    },
    titleText: {
        width: pxToDp(156),
        fontSize: pxToDp(30),
        color: '#222222',
        paddingTop: pxToDp(26),
    },
    contentText: {
        width: pxToDp(192),
        fontSize: pxToDp(24),
        color: '#999999',
        paddingTop: pxToDp(15),
    },
    itemStyle: {
        backgroundColor: '#FBFBFB',
        flexDirection: 'row',
        width: BG_SIZE_WIDTH,
        height: pxToDp(180),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: pxToDp(40),
    },
    campusContentNoImg: {
        lineHeight: pxToDp(45),
        width: pxToDp(664),
        fontSize: pxToDp(30),
        color: '#444444',
    },
    campusContent: {
        lineHeight: pxToDp(45),
        width: pxToDp(453),
        fontSize: pxToDp(30),
        color: '#444444',
    },
    campusTitle: {
        marginTop: pxToDp(20),
        fontSize: pxToDp(24),
        color: '#999999',
    },
    footerView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: pxToDp(100),
    },
    footerText: {
        fontSize: pxToDp(28),
        color: Theme.content_color
    },
    popStyle: {
        height: pxToDp(48),
        width: pxToDp(48),
        position: 'absolute',
        top: 0,
        right: 0
    },
});

// 导航相关样式
const navbarStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10000,
        paddingBottom: pxToDp(18),
        paddingTop: iOS ? 0 : StatusBar.currentHeight,
        width: SCREEN_WIDTH,
        height: isIphoneX ? pxToDp(200) + 24 : pxToDp(200),
    },
    icon: {
        width: pxToDp(44),
        height: pxToDp(44),
        color: "white",
    },
    schoolInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    schoolName: {
        color: '#FFFFFF',
        fontSize: pxToDp(36),
        paddingBottom: pxToDp(5),
    },
    bgSchoolCard: {
        width: SCREEN_WIDTH,
        height: isIphoneX ? pxToDp(175) + 24 : pxToDp(175),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: pxToDp(42),
        paddingBottom: pxToDp(25)
    },
    //卡片上边3个图片
    imgStyle: {
        width: pxToDp(44),
        height: pxToDp(44),
    },
    girdStyle: {
        flexDirection: 'row',
        width: pxToDp(44),
        height: pxToDp(44),
        justifyContent: 'flex-end',
    },
});
// 背景图宽度
const BG_SIZE_WIDTH = SCREEN_WIDTH
// 背景图高度
const BG_SIZE_HEIGHT = pxToDp(580)

const schoolInfoStyles = StyleSheet.create({
    container: {
        width: BG_SIZE_WIDTH,
        height: BG_SIZE_HEIGHT,
    },
    schoolInfo: {
        marginTop: isIphoneX ? pxToDp(92) + pxToDp(30) : pxToDp(92),
        height: pxToDp(60),
    },
    schoolName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: pxToDp(40),
        paddingBottom: pxToDp(9)
    },
    //整个校园卡浮层View
    bgSchoolCard: {
        justifyContent: 'flex-start',
        width: SCREEN_WIDTH,
        height: pxToDp(497),
        borderRadius: pxToDp(16),
    },
    bgSchoolCardAndroid: {
        justifyContent: 'flex-start',
        width: SCREEN_WIDTH,
        height: pxToDp(497),
        marginTop: pxToDp(40),
        borderRadius: pxToDp(16),
    },
    //充值、扫一扫、付款码View
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: pxToDp(70),
    },
    itemStyleIOSExamine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: pxToDp(70),
    },
    //卡片下边3个item文字
    textStyle: {
        fontSize: pxToDp(28),
        color: '#FFFFFF',
        marginTop: pxToDp(17),
    },
    textClassStyle: {
        fontSize: pxToDp(24),
        color: '#222222',
        marginTop: pxToDp(10),
    },
    //卡片下边3个图片
    imgStyle: {
        width: pxToDp(60),
        height: pxToDp(60),
    },
    //卡片下边3个item
    cardItemView: {
        alignItems: 'center',
        padding: pxToDp(20),
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: isIphoneX ? pxToDp(92) + pxToDp(30) : pxToDp(92),
        marginBottom: pxToDp(45),
    },
    subStyle: {
        width: pxToDp(670),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: iOS ? pxToDp(420) : pxToDp(445),
        left: pxToDp(40),
        borderRadius: pxToDp(16),
        //borderRadius: pxToDp(8),
        elevation: 3,            // ios圆角和阴影
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: pxToDp(6),
        shadowOffset: { width: 2, height: 2 },
    },
    itemView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: pxToDp(20)
    },
    itemText: {
        lineHeight: pxToDp(32),
        paddingTop: pxToDp(6),
        fontSize: Theme.tag_fontSize,
        color: '#222222'
    },

});