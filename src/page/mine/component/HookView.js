import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
//lib
import { Image } from 'react-native-elements';

export  function Layout(props) {
    return (
        <View style={[styles.contain,{...props.style}]}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    contain:{
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
    }
})