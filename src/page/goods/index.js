import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {StatusBarCommon} from '../../common/component/statusbar'
import { colors } from '../../common/theme/color';
export class GoodsScreen extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: navigation.getParam('title', '省钱好货'),
    //         headerStyle: {
    //             backgroundColor: colors.theme,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },
    //     };
    // };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <StatusBarCommon barStyle={"light-content"} backgroundColor={colors.theme}/> */}
                <Text>Goods Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}