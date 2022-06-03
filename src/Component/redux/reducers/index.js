import { combineReducers } from "redux";
import Auth from "./Auth";
import homePage from "./homePage";
import { roomList, roomCreate, roomUpdate, roomDetails } from "./room";

export const reducers = combineReducers({
  Auth,
  homePage,
  roomCreate,
  roomList,
  roomUpdate,
  roomDetails,
});
