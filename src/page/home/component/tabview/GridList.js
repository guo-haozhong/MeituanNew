import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList, TouchableWithoutFeedback
} from 'react-native';
import { colors } from '../../../../common/theme/color';
import { Images } from '../../../../image';

import { Image } from 'react-native-elements'

export function GridList(props) {
    // console.log(props.route);
    const [data, setdata] = useState([])
    useEffect(() => {
        //effect
        const initData = [
            { describe: "入选天河区水果店热卖榜", title: "鲜橙【水果店】", score: 4.7, count: 4356, icon: Images.home.icon_banner1 },
            { describe: "入选天河区水果店热卖榜", title: "香蕉【水果店】", score: 4.8, count: 1494, icon: Images.home.icon_banner2 },
            { describe: "赞，总体评价很不错", title: "百事可乐~百事可乐~百事可乐~百事可乐~百事可乐~", count: 2001, score: 4.5, icon: Images.home.icon_banner3 },
            { describe: "入选天河区水果店热卖榜", title: "樱桃【水果店】", score: 4.6, count: 666, icon: Images.home.icon_banner4 }
        ]

        setdata(initData.concat(initData))
        return () => {
            //cleanup
        }
    }, [])
    const arr = ['29减6', '新客减1', '7.8折起']
    const renderItem = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback key={index}>
                <View style={styles.likeItem}>
                    <Image source={item.icon} style={styles.likeImg} />
                    <Text style={styles.likeTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.likeDesc} numberOfLines={1}>{item.describe}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={styles.likeScore}>{item.score}分 | </Text>
                        <Text style={styles.likeScore}>月售{item.count}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:5,marginVertical:10}}>
                        {
                            arr.map((item, index) => {
                                return (
                                    <View key={index} style={styles.itembg}>
                                        <Text style={styles.text}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <FlatList
            listKey={props.route.key}
            data={data}
            keyExtractor={(item, index) => index + ''}
            renderItem={renderItem}
            numColumns={2}
        />
    )
}
const styles = StyleSheet.create({
    contain: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        backgroundColor: colors.bgColorfa,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10
    },
    likeItem: {
        width: SCREEN_WIDTH / 2 - 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    likeImg: {
        width: SCREEN_WIDTH / 2 - 20,
        height: SCREEN_WIDTH / 2 - 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    likeTitle: {
        fontSize: 14,
        color: colors.textColor333,
        fontWeight: 'bold',
        padding: 10
    },
    likeDesc: {
        fontSize: 11,
        color: colors.textColor666,
        paddingHorizontal: 10,
        paddingBottom: 2
    },
    likeScore: {
        fontSize: 11,
        color: colors.textColor999,
    },
    itembg:{
        backgroundColor:'#fefff3',
        borderColor:'#e5e5e5',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:4,
        marginLeft:5
    },
    text:{
        color:'#dea263',
        fontSize:10
    }
})