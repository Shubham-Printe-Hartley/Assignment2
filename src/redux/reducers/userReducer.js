import {loginConstants} from '../constants/index';

// initial state of the reducer 
const initialState = {
  data:null
}

// switch for setting different states of the reducer based on dispatched action
export const userLoginReducer = (state=initialState, action) => {
  switch(action.type){
    // when login-request was made
    case loginConstants.USER_LOGIN_REQUEST:
      return{
        ...state,
        error: null,
        data: null
      }

    // when login was successful
    case loginConstants.USER_LOGIN_SUCCESS:
      return{
        ...state,
        data: action.payload,
      }
    
    // when login has failed
    case loginConstants.USER_LOGIN_FAILURE:
      return{
        ...state,
        data: null,
        error: action.payload,
        errorMessage: action.payload.message
      }

    // when logout was requested
    case loginConstants.USER_LOGOUT:
      return {
        ...state,
        data: "Logged-out",
      }

    default: 
      return state;
  }
}