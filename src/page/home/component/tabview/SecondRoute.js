import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { colors } from '../../../../common/theme/color';
import { GridList } from './GridList'
export function SecondRoute(props) {
    console.log(props.route);

    return (
        <View style={styles.contain}>
            <GridList {...props} />
        </View>
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
    }
})