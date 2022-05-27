import { combineReducers } from "redux";
import Auth from "./Auth";
import homePage from "./homePage";
import { roomList, roomCreate } from "./room";

export const reducers = combineReducers({
  Auth,
  homePage,
  roomCreate,
  roomList,
});
