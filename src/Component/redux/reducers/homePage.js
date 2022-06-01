import { FETCH_HOMEPAGE, CREATE_HOMEPAGE, START_HOMEPAGE, END_HOMEPAGE, DELETE_HOMEPAGE } from "../constants/actionTypes";
export default (state = { isLoading: true, homePageData: [] }, action) => {
  switch (action.type) {
    case START_HOMEPAGE:
      return {
        ...state,
        isLoading: true
      };
    case END_HOMEPAGE:
      return {
        ...state,
        isLoading: false
      };
    case FETCH_HOMEPAGE:
      return {
        ...state,
        homePageData: action.payload.homePage
      };
    case CREATE_HOMEPAGE:
      return {
        ...state,
        homePageData: [...state.homePageData, action.payload.savedHomePage]
      };
    case DELETE_HOMEPAGE:
      return { ...state, homePageData: state.homePageData?.filter((homePage) => homePage._id !== action.payload) }
    default:
      return state;
  }
}