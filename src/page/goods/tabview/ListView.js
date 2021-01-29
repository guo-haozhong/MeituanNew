import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    FlatList, TouchableWithoutFeedback
} from 'react-native';
import { colors } from '../../../common/theme/color';
import { Image } from 'react-native-elements'
import { Images } from '../../../image';

export function ListView(props) {
    // console.log('ListView=='+JSON.stringify(props.route));
    const [data, setdata] = useState([])
    useEffect(() => {
        //effect
        const initData = [
            { icon: Images.home.icon_banner1, title: '【美团专供】鲜橙~天天吃水果！', desc: '七天无理由退换货', cost: '9.8', count: '8.9万' },
            { icon: Images.home.icon_banner2, title: '【美团专供】香蕉~天天吃水果！', desc: '七天无理由退换货', cost: '9.8', count: '8.9万' },
            { icon: Images.home.icon_banner3, title: '【美团专供】百事可乐~百事可乐~百事可乐~百事可乐~！', desc: '七天无理由退换货', cost: '9.8', count: '8.9万' },
            { icon: Images.home.icon_banner4, title: '【美团专供】樱桃~樱桃~樱桃~樱桃~樱桃~樱桃~樱桃~', desc: '七天无理由退换货', cost: '9.8', count: '8.9万' }
        ]
        setdata(initData.concat(initData))
        return () => {
            //cleanup
        }
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback key={index}>
                <View style={styles.item}>
                    <View style={{  }}>
                        <Image source={item.icon} style={styles.img} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal:10 }}>
                        <Text numberOfLines={2} style={{ color: '#333', fontSize: 14, fontWeight: 'bold' }}>{item.title}</Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={styles.text666}>{item.desc}</Text>
                            <Text style={styles.textred}>¥
                                <Text style={{fontSize:16}}> {item.cost}
                                    <Text style={styles.text666}>{'  '}已抢{item.count}件</Text>
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <FlatList
            listKey={props.route.key+''}
            data={data}
            keyExtractor={(item, index) => index+''}
            renderItem={renderItem}
        />
    )
}
const styles = StyleSheet.create({
    contain: {
        backgroundColor: colors.bgColorfa,
    },
    item: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10
    },
    img: {
        width: 160,
        height: 160,
        borderRadius: 5
    },
    text666: {
        color: '#666', fontSize: 12
    },
    textred:{
        color: 'red', fontSize: 12
    }
})