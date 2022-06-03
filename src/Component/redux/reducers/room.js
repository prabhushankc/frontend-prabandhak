import {
  ROOM_CREATE_REQUEST,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAIL,
  ROOM_CREATE_RESET,
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DELETE_REQUEST,
  ROOM_DELETE_SUCCESS,
  ROOM_DELETE_FAIL,
} from "../constants/actionTypes";

const initialState = {
  loading: true,
  room: null,
  rooms: [],
  success: false,
  error: {},
};

function roomList(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case ROOM_LIST_SUCCESS: {
      return { ...state, loading: false, success: true, rooms: payload };
    }
    case ROOM_LIST_FAIL: {
      return { ...state, loading: false, error: payload };
    }
    default:
      return state;
  }
}

function roomCreate(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_CREATE_REQUEST: {
      return { ...state, loading: true };
    }
    case ROOM_CREATE_SUCCESS: {
      return { ...state, loading: false, success: true, room: payload };
    }
    case ROOM_CREATE_FAIL: {
      return { ...state, loading: false, error: payload };
    }
    case ROOM_CREATE_RESET: {
      return {};
    }
    default:
      return state;
  }
}

function roomDelete(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ROOM_DELETE_REQUEST: {
      return { ...state, loading: true };
    }
    case ROOM_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        rooms: state.rooms?.filter((room) => room._id !== payload),
      };
    }
    case ROOM_DELETE_FAIL: {
      return { ...state, loading: false, error: payload };
    }
    default:
      return state;
  }
}

export { roomList, roomCreate, roomDelete };
