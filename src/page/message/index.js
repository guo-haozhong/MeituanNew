import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { StatusBarCommon } from '../../common/component/statusbar'
import { colors } from '../../common/theme/color';
import { Image } from 'react-native-elements';
import { Images } from '../../image';
import Header from '../../common/component/header'
export default class MessageScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '消息'),
        };
    };
    render() {
        return (
            <View style={styles.contain}>
                <Header
                    containerStyle={{
                        backgroundColor: colors.theme
                    }}
                    leftComponent={<View />}
                    centerComponent={
                        <View>
                            <Text style={{
                                color: colors.textColor, fontSize: 18,
                                fontWeight: 'bold'
                            }}>消息</Text>
                        </View>}
                    rightComponent={<View style={{
                        flex: 1, marginRight: 15,
                        alignItems: 'flex-end', justifyContent: 'center'
                    }}>
                        <Text>清除未读</Text>
                    </View>} />
                <ListView {...this.props} />
            </View>
        );
    }
}
function ListView(props) {
    const [data, setdata] = useState([])
    useEffect(() => {
        //effect
        const initData = [
            { time: '01/22', icon: Images.home.ic_home_2, title: '美食', msg: '腊八特惠！暖心汤粥4折起！腊八粥香', count: '1' },
            { time: '01/01', icon: Images.home.ic_home_1, title: '美团团好货', msg: '【红包到账提醒】团好货', count: '4' },
            { time: '2020/12/30', icon: Images.home.ic_home_3, title: '火车票/机票', msg: '订春运机票低至99元 点击订票>>', count: '8' },
            { time: '2020/12/22', icon: Images.home.ic_home_4, title: '美团优选', msg: '恭喜您被美团优选评为幸运用户', count: '6' },
        ]
        setdata(initData.concat(initData))
        return () => {
            //cleanup
        }
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback key={index}>
                <View>
                    <View style={styles.item}>
                        <View>
                            <Image source={item.icon} style={{ width: 40, height: 40 }} />
                        </View>

                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text numberOfLines={2} style={[styles.text, { paddingTop: 10 }]}>{item.msg}</Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={styles.text_666}>{item.time}</Text>
                            <View style={[styles.cicle, { marginTop: 10 }]}>
                                <Text style={{ color: "#fff", fontSize: 10 }}>{item.count}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#fff" }}>
                        <View style={{ height: 1, backgroundColor: colors.bgColorfa, marginLeft: 60, marginRight: 20 }}></View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index + ''}
            renderItem={renderItem}
        />
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: colors.bgColorfa
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15
    },
    title: {
        fontSize: 14,
        color: colors.textColor,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        color: colors.textColor
    },
    text_666: {
        fontSize: 12,
        color: colors.textColor666
    },
    cicle: {
        backgroundColor: "red",
        width: 15,
        height: 15,
        borderRadius: 7.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})