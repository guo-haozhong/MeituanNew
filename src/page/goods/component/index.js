import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBarCommon } from '../../../common/component/statusbar'
import { colors } from '../../../common/theme/color';
import { Button, Image, Header, SearchBar, Tooltip } from 'react-native-elements';
import { Images } from '../../../image';

//首页-头部
const GoodHeader = class extends Component {
    render() {
        return (
            <Header
                statusBarProps={{ barStyle: 'dark-content', backgroundColor: colors.theme }}
                containerStyle={{
                    backgroundColor: colors.theme,
                    borderBottomColor: colors.theme
                }}
                leftComponent={<LeftComponent />}
                centerComponent={<View />}
                rightComponent={<RightComponent />} />
        )
    }
}
const LeftComponent = class extends Component {
    render() {
        return (
            <View style={{
                width: 100, marginLeft: 10,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{
                    color: colors.textColor, fontSize: 24,
                    fontWeight: 'bold'
                }}>省钱好货</Text>
            </View>
        )
    }
}
const RightComponent = class extends Component {

    state = {
        search: '',
    };

    updateSearch = (search) => {
        console.log('搜索==' + search);
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <TouchableOpacity onPress={()=>{alert('input')}}>
                <SearchBar
                    editable={false}
                    placeholder="输入商品名"
                    containerStyle={{
                        backgroundColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent',
                        width: 140,
                        padding: 0,
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#f5f5f5',
                        height: 30,
                        width: '100%',
                    }}
                    inputStyle={{
                        fontSize: 12,
                        padding: 0,
                        margin: 0,
                        left: -10
                    }}
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </TouchableOpacity>
        )
    }
}

export {
    GoodHeader
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