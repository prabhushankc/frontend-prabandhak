// this file help to get data from mongoodb
import { AUTH, FETCH_SINGLEUSER, ERROR_AUTH_SIGNIN, ERROR_AUTH_SIGNUP, UPDATE_SINGLE_USER } from "../constants/actionTypes";
import * as api from '../api'

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/userDetail');
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: ERROR_AUTH_SIGNIN, payload: { errorAuthSignIn: error.response.data.message } })
        } else {
            console.log(error.message);
        }
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data })
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: ERROR_AUTH_SIGNUP, payload: { errorAuthSignUp: error.response.data.message } })
        } else {
            console.log(error.message);
        }
    }
}

export const singleUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.singleUser(id);
        dispatch({ type: FETCH_SINGLEUSER, payload: { singleUser: data } })
    } catch (error) {
        console.log(error);
    }
}

export const updateSingleUser = (id, formData) => async (dispatch) => {
    try {
        const { data: { result } } = await api.updateSingleUser(id, formData);
        console.log(result, 'updateSingleUser');
        dispatch({ type: UPDATE_SINGLE_USER, payload: { updateSingleUser: result } })
    } catch (error) {
        console.log(error.message);
    }
}
