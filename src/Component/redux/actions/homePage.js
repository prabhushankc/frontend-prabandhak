import * as api from "../api";
import {
  FETCH_HOMEPAGE,
  CREATE_HOMEPAGE,
  START_HOMEPAGE,
  END_HOMEPAGE,
} from "../constants/actionTypes";
import { NotifyError, NotifySuccess } from "./notify";

export const fetchHomePage = () => async dispatch => {
  try {
    dispatch({ type: START_HOMEPAGE });
    const { data } = await api.getHomePage();
    dispatch({ type: FETCH_HOMEPAGE, payload: { homePage: data.homePage } });
    dispatch({ type: END_HOMEPAGE });
  } catch (error) {
    if (error.response.status >= 400 && error.response.status <= 500) {
      NotifyError(error.response.data.message);
    } else {
      NotifyError(error.message);
    }
  }
};

export const createHomePage = formData => async dispatch => {
  try {
    dispatch({ type: START_HOMEPAGE });
    const {
      data: { savedHomePage, message },
    } = await api.createHomePage(formData);
    dispatch({ type: CREATE_HOMEPAGE, payload: { savedHomePage } });
    NotifySuccess(message);
    dispatch({ type: END_HOMEPAGE });
  } catch (error) {
    if (error.response.status >= 400 && error.response.status <= 500) {
      NotifyError(error.response.data.message);
    } else {
      NotifyError(error.message);
    }
  }
};
