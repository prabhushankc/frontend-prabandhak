import {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
  CONTACT_US_LIST_REQUEST,
  CONTACT_US_LIST_SUCCESS,
  CONTACT_US_LIST_FAIL,
} from "../constants/actionTypes";

const initialState = {
  loading: true,
  contactUsData: {},
  contactUsList: [],
  success: false,
  error: null,
};

export function contactUs(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_US_REQUEST:
      return { ...state, loading: true };
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        contactUsData: payload,
        success: true,
      };
    case CONTACT_US_FAIL:
      return { ...state, loading: false, error: payload };
    case CONTACT_US_RESET:
      return {};
    default:
      return state;
  }
}

export function contactUsList(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_US_LIST_REQUEST:
      return { ...state, loading: true };
    case CONTACT_US_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contactUsList: payload,
        success: true,
      };
    case CONTACT_US_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}