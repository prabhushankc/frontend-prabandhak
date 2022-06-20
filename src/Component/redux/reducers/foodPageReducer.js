import { FETCH_FOODPAGE, CREATE_FOODPAGE, START_FOODPAGE, END_FOODPAGE, DELETE_FOODPAGE, UPDATE_FOODPAGE, FETCH_FOOD_BY_SEARCH } from "../constants/actionTypes";
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
                foodPageData: action.payload.foodPage,
                foodCurrentPage: action.payload.currentPage,
                foodTotalPage: action.payload.totalFoodPage,
            };
        case FETCH_FOOD_BY_SEARCH:
            return {
                ...state, foodPageData: action.payload.foodPage
            };
        case CREATE_FOODPAGE:
            return {
                ...state,
                foodPageData: [...state.foodPageData, action.payload.savedFoodPage]
            };
        case UPDATE_FOODPAGE:
            return { ...state, foodPageData: state.foodPageData.map((foodData) => (foodData._id === action.payload.updateFoodPage._id ? action.payload.updateFoodPage : foodData)) };
        case DELETE_FOODPAGE:
            return { ...state, foodPageData: state.foodPageData?.filter((foodPage) => foodPage._id !== action.payload) }
        default:
            return state;
    }
}