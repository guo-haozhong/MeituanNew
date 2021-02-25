import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { colors } from '../../../common/theme/color';
import SwiperView from '../../../common/component/swiper'
import { Images } from '../../../image';

export class SwiperScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    render() {
        const { index } = this.state
        return (
            <View style={[{ flex: 1 }]}>
                <SwiperView
                    initialWidth={SCREEN_WIDTH * 0.2}
                    style={{ width: SCREEN_WIDTH, height: '100%', flexDirection: "row" }}
                    index={index} onChange={(index) => { this.setState({ index }) }}
                    children={[
                        <Image source={Images.home.icon_banner1} style={{ width: SCREEN_WIDTH, height: '100%' }} />,
                        <Image source={Images.home.icon_banner2} style={{ width: SCREEN_WIDTH, height: '100%' }} />,
                        <Image source={Images.home.icon_banner3} style={{ width: SCREEN_WIDTH, height: '100%' }} />]}>
                </SwiperView>
            </View >
        );
    }
}