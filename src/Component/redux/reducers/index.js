import { combineReducers } from 'redux';
import Auth from './Auth';
import homePage from './homePage';
export const reducers = combineReducers({ Auth, homePage });