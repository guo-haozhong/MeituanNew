import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList,
    TouchableOpacity, Image
} from 'react-native';
import { colors } from '../../../../common/theme/color';
import screenUtils from '../../../../common/utils/screenUtil';
import { Images } from '../../../../image';

export function GridList(props) {
    // console.log(props.route);
    const [data, setdata] = useState([])
    useEffect(() => {
        //effect
        let initData = []
        for (let i = 0; i < 10; i++) {
            initData.push({
                id: props.route.key + '-' + i,
                describe: "这是商品描述",
                title: "这是标题",
                price: 12
            })
        }
        setdata(initData)
        return () => {
            //cleanup
        }
    }, [])
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.likeItem} key={item.id}>
                <Image source={Images.home.icon_banner1} style={styles.likeImg} />
                <Text style={styles.likeDesc} numberOfLines={1}>{item.describe}</Text>
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.likeTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.likePrice}>￥{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            listKey={props.route.key}
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={renderItem}
            numColumns={2}
        />
    )
}
const styles = StyleSheet.create({
    contain: {
        width: screenUtils.SCREEN_WIDTH,
        alignItems: 'center',
        backgroundColor: colors.bgColorfa,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10
    },
    likeItem: {
        width: screenUtils.SCREEN_WIDTH / 2 - 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    likeImg: {
        width: screenUtils.SCREEN_WIDTH / 2 - 20,
        height: screenUtils.SCREEN_WIDTH / 2 - 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
        // backgroundColor: '#f4f4f4'
    },
    likeDesc: {
        backgroundColor: '#F1ECE2',
        color: '#9F8A60',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 5,
        paddingRight: 5,
    },
    likeTitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
        marginBottom: 4,
    },
    likePrice: {
        fontSize: 14,
        color: '#b4282d',
    }
})