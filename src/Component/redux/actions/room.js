import {
  ROOM_CREATE_REQUEST,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAIL,
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
} from "../constants/actionTypes";

import * as api from "../api";

export const listRooms = () => async dispatch => {
  try {
    dispatch({ type: ROOM_LIST_REQUEST });
    const { data } = await api.getRoomPage();
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ROOM_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createRoom = formData => async dispatch => {
  try {
    // console.log(formData, "hello i am called");
    dispatch({ type: ROOM_CREATE_REQUEST });
    const { data } = await api.createRoom(formData);
    dispatch({ type: ROOM_CREATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ROOM_CREATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
