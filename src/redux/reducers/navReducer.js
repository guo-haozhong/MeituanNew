import {
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
import  AppContainer  from '../../router/index'

export const navReducer = createNavigationReducer(AppContainer);
