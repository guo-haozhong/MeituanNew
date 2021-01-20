import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors } from '../../../common/theme/color';
import screenUtils from '../../../common/utils/screenUtil';
import { Images } from '../../../image';
//插件库
import Swiper from 'react-native-swiper'
import { Image } from 'react-native-elements';
export function FourView(props) {
    const { data } = props
    return (
        <View style={styles.flexwrap}>
            {data.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => {

                        }}>
                        <View style={styles.commonItemView}>
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
                paddingHorizontal: 15,
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

                                        }}>
                                        <View style={styles.commonItemView}>
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
        backgroundColor: colors.theme,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent:'center',
        width: screenUtils.SCREEN_WIDTH,
        height: 80,
    },
    commonItemView: {
        width: (screenUtils.SCREEN_WIDTH - 30) / 4,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    defaultItemText: {
        paddingTop: 5,
        fontSize: 14,
        color: colors.textColor
    },
    defaultImage: {
        width: 25, height: 25
    },
    flexwrapCommonView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: screenUtils.SCREEN_WIDTH,
        marginTop: 15
    },
})