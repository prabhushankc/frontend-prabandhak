import { FETCH_FOODPAGE, CREATE_FOODPAGE, START_FOODPAGE, END_FOODPAGE } from "../constants/actionTypes";
export default (state = { isLoading: true, foodPageData: [] }, action) => {
    switch (action.type) {
        case START_FOODPAGE:
            return {
                ...state,
                isLoading: true
            };
        case END_FOODPAGE:
            return {
                ...state,
                isLoading: false
            };
        case FETCH_FOODPAGE:
            return {
                ...state,
                foodPageData: action.payload.foodPage
            };
        case CREATE_FOODPAGE:
            return {
                ...state,
                foodPageData: [...state.foodPageData, action.payload.savedFoodPage]
            };
        default:
            return state;
    }
}