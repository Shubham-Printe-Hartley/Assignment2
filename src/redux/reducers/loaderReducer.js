import { loaderConstants } from "../constants";

// initial state of the reducer
const initialState = false;

export const loaderReducer = (state=initialState, action) => {
  switch(action.type) {
    case loaderConstants.LOADING:
      return action.payload
    
    default:
      return state;
  }
}