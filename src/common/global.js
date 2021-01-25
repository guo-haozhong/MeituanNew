import screenUtils from "./utils/screenUtil"

// 屏幕适配
global.pxToDp = screenUtils.pxToDp
// 屏幕宽度
global.SCREEN_WIDTH =screenUtils.SCREEN_WIDTH
// 屏幕高度
global.SCREEN_HEIGHT = screenUtils.SCREEN_HEIGHT

// iOS系统
global.iOS = screenUtils.iOS
// Android系统
global.Android = screenUtils.Android
// iPhone X/XR/XS/XSM
global.isIphoneX = screenUtils.isIphoneX
//安卓全面屏
global.isFullAndroid = screenUtils.isFullAndroid