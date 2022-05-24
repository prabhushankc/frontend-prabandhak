// this file help to get data from mongoodb
import { AUTH, FETCH_SINGLEUSER, UPDATE_SINGLE_USER } from "../constants/actionTypes";
import * as api from '../api'
import { NotifyError, NotifySuccess } from "./notify";

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/home');
        NotifySuccess(data.message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        NotifySuccess(data.message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const singleUser = (id) => async (dispatch) => {
    try {
        console.log(id, "from id fronend");
        const { data: { singleUser, message } } = await api.singleUser(id);
        dispatch({ type: FETCH_SINGLEUSER, payload: { singleUser: singleUser } })
        NotifySuccess(message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const updateSingleUser = (id, formData) => async (dispatch) => {
    try {
        const { data: { result, message } } = await api.updateSingleUser(id, formData);
        dispatch({ type: UPDATE_SINGLE_USER, payload: { updateSingleUser: result } })
        NotifySuccess(message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const deleteUser = (id) => async (dispatch, navigate) => {
    try {
        const { data: { message } } = await api.deleteUser(id);
        NotifySuccess(message);
        navigate('/');
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}
