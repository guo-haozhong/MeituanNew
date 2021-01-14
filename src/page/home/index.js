import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StatusBarCommon } from '../../common/component/statusbar'
import { colors } from '../../common/theme/color';
export class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '首页'),
            headerStyle: {
                // backgroundColor: colors.theme,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                // fontWeight: 'bold',
            },
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBarCommon barStyle={"dark-content"} backgroundColor={colors.theme} />
                <Text>Home Screen</Text>
                <Button
                    title="Go to Goods"
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>
        );
    }
}