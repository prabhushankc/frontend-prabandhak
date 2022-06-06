import {
  ROOM_CREATE_REQUEST,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAIL,
  ROOM_UPDATE_REQUEST,
  ROOM_UPDATE_SUCCESS,
  ROOM_UPDATE_FAIL,
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_SUCCESS,
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

export const detailRoom = id => async dispatch => {
  try {
    dispatch({ type: ROOM_DETAILS_REQUEST });
    const { data } = await api.singleRoomDetails(id);
    dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data });
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

export const updateRoom = (id, formData) => async dispatch => {
  try {
    dispatch({ type: ROOM_UPDATE_REQUEST });

    const { data } = await api.updateSingleRoom(id, formData);
    dispatch({ type: ROOM_UPDATE_SUCCESS, payload: id });
    dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ROOM_UPDATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
