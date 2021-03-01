/**
 * @format
 */
import './src/common/global'
import {AppRegistry} from 'react-native';
import App from './src/app'
import {name as appName} from './app.json';
if (!__DEV__) {
    console = {
        log: () => { },
        error: () => { },
        info: () => { },
        warn: () => { },
    }
}
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);
