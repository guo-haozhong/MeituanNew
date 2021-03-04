import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
// import { getDetail, getUserInfo, uploadImage } from '../../../service/fetch/index'
import { getDetail, getUserInfo } from '../../../service/axios/index'
class DetailScreen extends Component {
    componentWillUnmount() {
        //上传图片请求示例
        // const fileArr = [{
        //     uri: 'uri',
        //     name: 'image.jpg',
        //     type: 'multipart/form-data'
        // }]
        // uploadImage(fileArr, (res) => {

        // })
    }
    componentDidMount() {
        // getUserInfo({
        //     id: 123456,
        //     token: 'Hozan'
        // }, (res) => {
        //     alert(JSON.stringify(res))
        // })

        getUserInfo({
            id: 123456,
            token: 'Hozan'
        }).then((res) => {
            alert(JSON.stringify(res))
        }).catch((error) => {
            alert(JSON.stringify(error))
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                <Text>1234</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})

const mapStateToProps = (state) => ({
    login: state.login,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
