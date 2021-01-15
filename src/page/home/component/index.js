import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBarCommon } from '../../../common/component/statusbar'
import { colors } from '../../../common/theme/color';
import { Button, Image, Header, SearchBar, Tooltip } from 'react-native-elements';
import { Images } from '../../../image';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomeHeader = class extends Component {
    render() {
        return (
            <Header
                statusBarProps={{ barStyle: 'dark-content', backgroundColor: colors.theme }}
                containerStyle={{
                    backgroundColor: colors.theme,
                    borderBottomColor: colors.theme
                }}
                leftComponent={<LeftComponent />}
                centerComponent={<CenterComponent />}
                rightComponent={<RightComponent />} />
        )
    }
}
const LeftComponent = class extends Component {
    render() {
        return (
            <View style={[styles.flexStyle, { marginLeft: 5 }]}>
                <Text>广州</Text>
                <Image source={Images.home.ic_arrow_down}
                    style={{ width: 14, height: 8, marginLeft: 5 }} />
            </View>
        )
    }
}
const CenterComponent = class extends Component {

    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="多喝汤"
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    padding: 0,
                }}
                inputContainerStyle={{
                    backgroundColor: '#fff',
                    height: 30,
                    width: '100%',
                }}
                inputStyle={{
                    fontSize: 12,
                    padding: 0,
                    margin: 0
                }}
                onChangeText={this.updateSearch}
                value={search}
            />
        )
    }
}
const RightComponent = class extends Component {
    render() {
        const arr = [
            {
                name: "扫一扫",
                icon: Images.home.ic_scan_white,
                isline: true
            },
            {
                name: "付款码",
                icon: Images.home.ic_fk_white,
                isline: false
            }
        ]
        return (
            <View style={styles.flexStyle}>
                <Image source={Images.home.ic_yuyin}
                    style={{ width: 25, height: 25, marginHorizontal: 10 }} />
                <Tooltip
                    backgroundColor={colors.gray}
                    containerStyle={{ borderRadius: 5, height: 100 }}
                    overlayColor={'transparent'}
                    toggleOnPress={true}
                    popover={
                        <View style={{ backgroundColor: colors.gray, flex: 1, width: 120, height: 100 }}>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'column' }} key={index}>
                                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', width: 120 }}>
                                                <Image source={item.icon} style={{ width: 20, height: 20 }} />
                                                <Text style={[styles.text_white, { marginLeft: 10 }]}>{item.name}</Text>
                                            </View>
                                            {item.isline ? (<View style={styles.line_white}></View>) : null}
                                        </View>
                                    )
                                })
                            }
                        </View>
                    }>
                    <Image source={Images.home.ic_add}
                        style={{ width: 24, height: 24 }} />
                </Tooltip>

            </View>
        )
    }
}
export {
    HomeHeader
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text_white: {
        color: '#fff',
        fontSize: 14
    },
    line_white: {
        backgroundColor: "#e0e0e0",
        height: 0.5,
        marginHorizontal: 20
    }
})