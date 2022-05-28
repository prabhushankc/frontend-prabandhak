import * as api from '../api';
import { FETCH_FOODPAGE, CREATE_FOODPAGE, START_FOODPAGE, END_FOODPAGE } from '../constants/actionTypes';
import { NotifyError, NotifySuccess } from './notify';

export const fetchFoodPage = () => async (dispatch) => {
    try {
        dispatch({ type: START_FOODPAGE });
        const { data } = await api.getFoodPage();
        dispatch({ type: FETCH_FOODPAGE, payload: { foodPage: data.foodPageData } });
        dispatch({ type: END_FOODPAGE });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const createFoodPage = (formData) => async (dispatch) => {
    try {
        dispatch({ type: START_FOODPAGE });
        const { data: { savedFoodPage, message } } = await api.createFoodPage(formData);
        dispatch({ type: CREATE_FOODPAGE, payload: { savedFoodPage } });
        NotifySuccess(message);
        dispatch({ type: END_FOODPAGE });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}