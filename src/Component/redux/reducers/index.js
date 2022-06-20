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
