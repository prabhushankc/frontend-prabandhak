import { FETCH_PAYMENT_FOOD } from "../constants/actionTypes";
export default (state = { isLoading: true, PaymentData: [] }, action) => {
    switch (action.type) {
        case FETCH_PAYMENT_FOOD:
            return {
                ...state,
                PaymentData: action.payload.payment
            };
        default:
            return state;
    }
}