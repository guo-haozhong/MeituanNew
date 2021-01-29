import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBarCommon } from '../../../common/component/statusbar'
import { colors } from '../../../common/theme/color';
import { Button, Image, SearchBar, Tooltip } from 'react-native-elements';
import { Images } from '../../../image';
import Header from '../../../common/component/header'
//首页-头部
const HomeHeader = class extends Component {
    render() {
        return (
            <Header
                containerStyle={{ backgroundColor: colors.theme }}
                leftComponent={<LeftComponent />}
                centerComponent={<CenterComponent />}
                rightComponent={<RightComponent />}
            />
        )
    }
}
function LeftComponent() {
    return (
        <View style={[styles.flexStyle, { marginLeft: 5 }]}>
            <Text style={{color:colors.textColor333,fontSize:14,fontWeight:"bold"}}>广州</Text>
            <Image source={Images.home.ic_arrow_down}
                style={{ width: 14, height: 8, marginLeft: 5 }} />
        </View>
    )
}
function CenterComponent() {
    const [search, setSearch] = useState('')
    return (
        <SearchBar
            placeholder="多喝汤"
            containerStyle={{
                backgroundColor: 'transparent',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                padding: 0,
                flex: 2
            }}
            inputContainerStyle={{
                backgroundColor: '#fff',
                height: 30,
                width: '100%',
            }}
            inputStyle={{
                fontSize: 12,
                padding: 0,
                margin: 0,
                left: -10
            }}
            onChangeText={() => { setSearch(search) }}
            value={search}
        />
    )
}
//this.tooltipRef = React.createRef();//v17 新写法
function RightComponent() {
    const tooltipRef = useRef(null);
    const arr = [
        {
            name: "扫一扫",
            icon: Images.home.ic_scan_white,
            isline: true
        },
        {
            name: "付款码",
            icon: Images.home.ic_fk_white,
            isline: false
        }
    ]

    return (
        <View style={styles.flexStyle}>
            <Image source={Images.home.ic_yuyin}
                style={{ width: 25, height: 25, marginRight:10 }} />
            <Tooltip
                ref={tooltipRef}
                backgroundColor={colors.gray}
                containerStyle={{ borderRadius: 5, height: 100 }}
                overlayColor={'transparent'}
                toggleOnPress={true}
                popover={
                    <View style={{ backgroundColor: colors.gray, flex: 1, width: 120, height: 100 }}>
                        {
                            arr.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={{ flex: 1, flexDirection: 'column' }} key={index}
                                        onPress={() => {
                                            alert(item.name)
                                            tooltipRef && tooltipRef.current.toggleTooltip();
                                        }}>
                                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', width: 120 }}>
                                            <Image source={item.icon} style={{ width: 20, height: 20 }} />
                                            <Text style={[styles.text_white, { marginLeft: 10 }]}>{item.name}</Text>
                                        </View>
                                        {item.isline ? (<View style={styles.line_white}></View>) : null}
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                }>
                <Image source={Images.home.ic_add}
                    style={{ width: 24, height: 24 }} />
            </Tooltip>

        </View>
    )
}
export {
    HomeHeader
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_white: {
        color: '#fff',
        fontSize: 14
    },
    line_white: {
        backgroundColor: "#e0e0e0",
        height: 0.5,
        marginHorizontal: 20
    }
})