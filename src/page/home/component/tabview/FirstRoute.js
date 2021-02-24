import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';
import { colors } from '../../../../common/theme/color';
import { GridList } from './GridList'
import { ModalScreen } from '../../../others/modal/ModalScreen'

export function FirstRoute(props) {
    // console.log(props.route);
    return (
        <View style={styles.contain}>
            {/* <ModalScreen /> */}
            <GridList {...props} />
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        // width: SCREEN_WIDTH,
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bgColorfa,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10
    }
})