import * as api from '../api';
import { FETCH_FOODPAGE, CREATE_FOODPAGE, START_FOODPAGE, END_FOODPAGE, DELETE_FOODPAGE, UPDATE_FOODPAGE, FETCH_FOOD_BY_SEARCH } from '../constants/actionTypes';
import { NotifyError, NotifySuccess } from './notify';

export const fetchFoodPage = (foodquery) => async (dispatch) => {
    try {
        dispatch({ type: START_FOODPAGE });
        const { data: { foodPageData, currentPage, totalFoodPage } } = await api.getFoodPage(foodquery);
        dispatch({ type: FETCH_FOODPAGE, payload: { foodPage: foodPageData, currentPage, totalFoodPage } });
        dispatch({ type: END_FOODPAGE });
    } catch (error) {
        console.log(error, 'error');
        if (error.response.status >= 400 && error.response.status <= 500) {
            console.log(error.response.data.message);
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}
export const getFoodBySearch = ({ search, tags }) => async (dispatch) => {
    try {
        console.log(search, 'searchFoods');
        dispatch({ type: START_FOODPAGE });
        const { data: { foodSearchData, message } } = await api.getFoodBySearch({ search, tags });
        NotifySuccess(message);
        dispatch({ type: FETCH_FOOD_BY_SEARCH, payload: { foodPage: foodSearchData } });
        dispatch({ type: END_FOODPAGE });

    } catch (error) {
        console.log(error);
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
export const updateFoodPage = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: START_FOODPAGE });
        const { data: { updateFoodPage, message } } = await api.updateFoodPage(id, formData);
        dispatch({ type: UPDATE_FOODPAGE, payload: { updateFoodPage } })
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

export const deleteFood = (id) => async (dispatch) => {
    try {
        const { data: { message } } = await api.deleteFood(id);
        dispatch({ type: DELETE_FOODPAGE, payload: id })
        NotifySuccess(message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

