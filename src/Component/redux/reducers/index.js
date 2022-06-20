<<<<<<< HEAD
import { combineReducers } from "redux";
import Auth from "./Auth";
import homePage from "./homePage";
import { roomList, roomCreate, roomUpdate, roomDetails } from "./room";
import { roomBook, roomBookList, roomMyBookList } from "./roomBook";
import { contactUs, contactUsList } from "./contactUs";

export const reducers = combineReducers({
  Auth,
  homePage,
  roomCreate,
  roomList,
  roomUpdate,
  roomDetails,
  roomBook,
  roomBookList,
  roomMyBookList,
  contactUs,
  contactUsList,
});
=======
import { combineReducers } from 'redux';
import Auth from './Auth';
import homePage from './homePage';
import foodPage from './foodPageReducer';
import payment from './PaymentReducer';
export const reducers = combineReducers({ Auth, homePage, foodPage, payment });
>>>>>>> 08e8eb8b5309c0e4c25a58672088a12d39ff45b1
