import { combineReducers } from 'redux';
import {navReducer} from './navReducer'
import {login} from './loginReducer'
const appReducer = combineReducers({
    nav:navReducer,
    login:login
});
export default appReducer
