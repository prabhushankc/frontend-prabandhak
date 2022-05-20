// this file help to get data from mongoodb
import { AUTH, ERROR_AUTH_SIGNIN, ERROR_AUTH_SIGNUP } from "../constants/actionTypes";
import * as api from '../api'

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data);
        dispatch({ type: AUTH, data });
        navigate('/');
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

