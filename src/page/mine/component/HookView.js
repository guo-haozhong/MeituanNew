import React from 'react'
import { View, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native';
//lib
import { Image } from 'react-native-elements';
import { colors } from '../../../common/theme/color';

export function Layout(props) {
    return (
        <View style={[styles.contain, { ...props.style }]}>
            {props.children}
        </View>
    )
}
export function TipView(props) {
    const { leftComponent, rightComponent } = props
    return (
        <View style={{ flexDirection: "row",marginHorizontal:10,marginTop:10 }}>
            <View style={{ flex: 1,justifyContent:"center" }}>
                {leftComponent}
            </View>
            <View style={{ flex: 1,alignItems:'flex-end' }}>
                {rightComponent}
            </View>
        </View>
    )
}
export function ColMineView(props) {
    const { data, col, width, } = props
    return (
        <View style={[styles.flexwrap, {height:100}]}>
            {data.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => {

                        }}>
                        <View style={[styles.commonItemView, { width: width / col }]}>
                            <Text style={{}}>{item.title}</Text>
                            <Text style={{marginVertical:5}}>{item.desc}</Text>
                            <Text>{item.tip}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
    },
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
})