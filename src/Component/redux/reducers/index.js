import { combineReducers } from "redux";
import Auth from "./Auth";
import homePage from "./homePage";
import {
  roomList,
  roomCreate,
  roomUpdate,
  roomDetails,
  roomDelete,
  roomReviewCreate,
} from "./room";
import {
  roomBook,
  roomBookList,
  roomMyBookList,
  roomBookDelete,
} from "./roomBook";
import { contactUs, contactUsList } from "./contactUs";
import foodPage from "./foodPageReducer";
import payment from "./PaymentReducer";

export const reducers = combineReducers({
  Auth,
  homePage,
  foodPage,
  payment,
  roomCreate,
  roomList,
  roomUpdate,
  roomDetails,
  roomReviewCreate,
  roomDelete,
  roomBook,
  roomBookList,
  roomMyBookList,
  roomBookDelete,
  contactUs,
  contactUsList,
});
