import auth from '../../services/auth';
import {loginConstants, loaderConstants} from '../constants/index';

// setting a standard dispatch object
const request = (type, data) => {
  return {
    type: type,
    payload: data
  }
}

const success = (type, data) => {
  return{
    type: type,
    payload: data
  }
}

const failure = (type, error) => {
  return{
    type: type, 
    payload: error
  }
}

const loading = (type, data) => {
  return {
    type: type,
    payload: data
  }
}


export const login = (userCredentials) => async(dispatch) => {  

  try{
    // setting loading=true
    dispatch(loading(loaderConstants.LOADING, true));

    // making user login request -> setting loading=true
    dispatch(request(loginConstants.USER_LOGIN_REQUEST));

    // callig login API here and fetching user data based on response
    const response = await auth.login(userCredentials);

    // if successful save user data to local storage and dispatch login success action
      dispatch(success(loginConstants.USER_LOGIN_SUCCESS, response.data));
      localStorage.setItem('userLogin', JSON.stringify(response.data)) //update user data after examining response

      // setting loading=false
      dispatch(loading(loaderConstants.LOADING, false));

  } catch(err) {
    // catching errors thrown from the API -> invalid credentials, user not found, invalid data provided
    dispatch(failure(loginConstants.USER_LOGIN_FAILURE, err.response.data))

    // setting loading=false
    dispatch(loading(loaderConstants.LOADING, false));
  }
}

export const logout = () => (dispatch) => {
  // remove user data from local storage
  localStorage.removeItem('userLogin');

  // dispatch user logout action that will reset the state to its initial state
  dispatch(request(loginConstants.USER_LOGOUT));
}




