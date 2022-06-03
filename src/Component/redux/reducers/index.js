import { combineReducers } from "redux";
import Auth from "./Auth";
import homePage from "./homePage";
import { roomList, roomCreate, roomDelete } from "./room";
import foodPage from "./foodPageReducer";

export const reducers = combineReducers({
  Auth,
  homePage,
  roomCreate,
  roomList,
  roomDelete,
  foodPage,
});
