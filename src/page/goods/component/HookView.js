import React, { useState, useEffect } from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    ImageBackground
} from 'react-native';
import { colors } from '../../../common/theme/color';
import { Images } from '../../../image';
//插件库
import Swiper from 'react-native-swiper'
import { Image } from 'react-native-elements';

export function ScrollViewList(props) {
    const [data, setdata] = useState([])
    useEffect(() => {
        //effect
        let initData = []
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                initData.push({
                    icon: Images.home.icon_banner2,
                    title: '山东青瓜约250±50g',
                    price: '0.99',
                    count: '2万件'
                })
            } else {
                initData.push({
                    icon: Images.home.icon_banner3,
                    title: '广府皇粮宫廷贡米5kg',
                    price: '22.9',
                    count: '5331件'
                })
            }
        }
        setdata(initData)
        return () => {
            //cleanup
        }
    }, [])
    const Item = ({ item }) => {
        return (
            <View style={styles.itemroot}>
                <ImageBackground
                    source={item.icon}
                    style={styles.img} imageStyle={{ borderRadius: 5 }}>
                    <View style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <View style={styles.pricebg}>
                            <Text style={[colors.textStyleWhite, { marginLeft: 5 }]}>￥{item.price}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View>
                    <Text style={{ color: colors.textColor, fontSize: 12, fontWeight: 'bold', marginVertical: 5 }} numberOfLines={2}>{item.title}</Text>
                    <Text style={{ color: colors.textColor666, fontSize: 10 }} numberOfLines={1}>已售{item.count}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.contain}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.radiusView}>
                        <Text style={{ fontSize: 14, color: '#fff' }}>美团</Text>
                        <Text style={{ fontSize: 14, color: colors.theme }}>优选</Text>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 12, color: '#333' }}>门店距您1.3km·次日自提</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <Text style={{ fontSize: 12, color: '#333' }}>更多爆品</Text>
                    <Image source={Images.good.ic_arrow_right} style={{ width: 12, height: 12 }} />
                </View>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{
                    flexDirection: "row", flex: 1,
                    alignItems: 'center', height: 175,
                    marginRight: 15
                }}>
                    {
                        data.map((item, index) => {
                            return (
                                <Item key={index} item={item} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        top: -90,
        backgroundColor: '#fff',
        width: SCREEN_WIDTH - 30,
        left: 15,
        height: 205,
        borderRadius: 8
    },
    radiusView: {
        flexDirection: "row",
        backgroundColor: "#000000",
        padding: 5,
        paddingRight: 8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 14
    },
    itemroot: {
        alignItems: "center",
        width: (SCREEN_WIDTH - 40) / 4,
        marginLeft: 15,
        height: 170,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    img: {
        width: SCREEN_WIDTH / 4,
        height: SCREEN_WIDTH / 4,
    },
    pricebg: {
        backgroundColor: 'red',
        height: 20,
        width: '100%',
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})