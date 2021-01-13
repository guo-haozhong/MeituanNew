import { Dimensions, Platform, NativeModules, PixelRatio } from 'react-native'

// 缩放比例(默认尺寸:750)
const scale = Dimensions.get('window').width / 750

const screenUtils = {
    // iOS系统
    iOS: Platform.OS === 'ios',
    // Android系统
    Android: Platform.OS === 'android',
    // 屏幕宽度
    SCREEN_WIDTH: Dimensions.get('window').width,
    // 屏幕高度
    SCREEN_HEIGHT: Dimensions.get('window').height,
    // iPhone X/XR/XS/XSM
    isIphoneX: (Platform.OS === 'ios' && ((Number(((Dimensions.get('window').height / Dimensions.get('window').width) + '').substr(0, 4)) * 100) === 216)),
    // iPhone 12,mini,pro,pro max
    isIphone12: (Platform.OS === 'ios' && (Dimensions.get('window').height == '780' || Dimensions.get('window').height == '844' ||Dimensions.get('window').height == '926')),
    // 屏幕尺寸缩放适配
    pxToDp: size => Math.round(size * scale) <= 1 ? 1 : Math.round(size * scale)
}

export default screenUtils



/*
    刘海屏  序列机型的屏幕高宽及比例
    X      SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000    2.1653333333
    XR     SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000    2.1642512077
    XS     SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000    2.1653333333
    XSM    SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000    2.1642512077
    12mini          780*360
    12              844*390
    12pro           844*390
    12proMax        926*428
    目前iPhone X序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型，再乘以100，等于216
*/


/*
    设备的像素密度，例如：
    PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
    PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
    PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
    PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
    PixelRatio.get() === 3.5        Nexus 6
*/
