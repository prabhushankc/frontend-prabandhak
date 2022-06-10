import * as api from '../api';
import { NotifyError, NotifySuccess } from './notify';
import { FETCH_PAYMENT_FOOD } from '../constants/actionTypes';

// payment
export const fetchPayment = () => async (dispatch) => {
    try {
        const { data } = await api.getPayment();
        dispatch({ type: FETCH_PAYMENT_FOOD, payload: { payment: data.payments } });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}
export const createPayment = (cart, paymentID, address) => async () => {
    try {
        const { data } = await api.createPayment({ cart, paymentID, address });
        NotifySuccess(data.message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}