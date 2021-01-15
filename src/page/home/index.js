import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBarCommon } from '../../common/component/statusbar'
import { colors } from '../../common/theme/color';
import { Button, Header, SearchBar, Tooltip } from 'react-native-elements';
import { HomeHeader } from './component'
import screenUtils from '../../common/utils/screenUtil';
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
            <View style={{ flex: 1 }}>
                {/* <StatusBarCommon barStyle={"dark-content"} /> */}
                <ScrollView>
                    <View style={{
                        backgroundColor: colors.theme, height: 200,
                        width: screenUtils.SCREEN_WIDTH
                    }}>
                        <HomeHeader />
                    </View>

                </ScrollView>
            </View>
        );
    }
}