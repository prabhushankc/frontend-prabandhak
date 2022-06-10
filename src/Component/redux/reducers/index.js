import { combineReducers } from 'redux';
import Auth from './Auth';
import homePage from './homePage';
import foodPage from './foodPageReducer';
import payment from './PaymentReducer';
export const reducers = combineReducers({ Auth, homePage, foodPage, payment });