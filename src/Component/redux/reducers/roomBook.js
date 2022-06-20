import {
  ROOM_BOOK_REQUEST,
  ROOM_BOOK_SUCCESS,
  ROOM_BOOK_FAIL,
  ROOM_BOOKED_LIST_REQUEST,
  ROOM_BOOKED_LIST_SUCCESS,
  ROOM_BOOKED_LIST_FAIL,
  ROOM_MY_BOOKED_LIST_REQUEST,
  ROOM_MY_BOOKED_LIST_SUCCESS,
  ROOM_MY_BOOKED_LIST_FAIL,
} from "../constants/actionTypes";

const initialState = {
  loading: true,
  roomBookingData: {},
  roomBookingItems: [],
  success: false,
  error: null,
};

function roomBook(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_BOOK_REQUEST:
      return { ...state, loading: true, success: false };
    case ROOM_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        roomBookingData: payload,
        success: true,
      };
    case ROOM_BOOK_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

function roomBookList(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_BOOKED_LIST_REQUEST:
      return { ...state, loading: true, success: false };
    case ROOM_BOOKED_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        roomBookingItems: payload,
        success: true,
      };
    case ROOM_BOOKED_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

function roomMyBookList(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_MY_BOOKED_LIST_REQUEST:
      return { ...state, loading: true, success: false };
    case ROOM_MY_BOOKED_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        roomBookingItems: payload,
        success: true,
      };
    case ROOM_MY_BOOKED_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export { roomBook, roomBookList, roomMyBookList };
