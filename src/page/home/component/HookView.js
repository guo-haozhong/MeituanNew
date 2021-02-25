import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors } from '../../../common/theme/color';
import { Images } from '../../../image';
//插件库
import Swiper from 'react-native-swiper'
import { Image } from 'react-native-elements';

export function ColView(props) {
    const { data, col, width, isLimitheight, height = 80 } = props
    return (
        <View style={[styles.flexwrap, isLimitheight ? { height } : {}]}>
            {data.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => {

                        }}>
                        <View style={[styles.commonItemView, { width: width / col }]}>
                            {item.isshowTip && <View style={styles.tipView}>
                                <Text style={{ color: '#fff', fontSize: 10 }}>{item.tiptext}</Text>
                            </View>}
                            <Image source={item.icon} style={styles.defaultImage} />
                            <Text style={styles.defaultItemText} numberOfLines={1}>{item.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
    )
}
export function FourView(props) {
    const { data, col } = props
    return (
        <View style={[styles.flexwrap, { height: 80 }]}>
            {data.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => {

                        }}>
                        <View style={[styles.commonItemView, { width: (SCREEN_WIDTH - 20) / col }]}>
                            <Image source={item.icon} style={styles.defaultImage} />
                            <Text style={styles.defaultItemText} numberOfLines={1}>{item.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
    )
}
export function SwiperView(props) {
    const { data } = props
    return (
        <Swiper
            style={{
                height: 230,
                backgroundColor: colors.bgColorfa,
                paddingHorizontal: 10,
            }}
            paginationStyle={{ bottom: 5 }}
            loop={false}
            dotStyle={{ backgroundColor: colors.dotunsel }}
            activeDotStyle={{ backgroundColor: colors.theme }}>
            {
                data.map((arrData, index) => {
                    return (
                        <View key={index} style={styles.flexwrapCommonView}>
                            {arrData.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => {
                                            props.navigation.navigate('swiper')
                                        }}>
                                        <View style={[styles.commonItemView, { width: (SCREEN_WIDTH - 20) / 5 }]}>
                                            <Image source={item.icon} style={{ width: 30, height: 30 }} />
                                            <Text style={styles.defaultItemText} numberOfLines={1}>{item.name}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                    )
                })
            }
        </Swiper>
    )
}
const styles = StyleSheet.create({
    flexwrap: {
        // backgroundColor: colors.theme,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH,
    },
    commonItemView: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    defaultItemText: {
        paddingTop: 5,
        fontSize: 14,
        color: colors.textColor333
    },
    defaultImage: {
        width: 25, height: 25
    },
    flexwrapCommonView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        marginTop: 15
    },
    tipView: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 16, width: 28,
        borderRadius: 8,
        position: 'absolute',
        top: -5,
        left: 45,


    }
})