import http from './http';

// returns function to handle login requests from the user
// takes user-credentials and login end-point
const login = (userCredentials) => {
  return http.post("v1/tenant/login", userCredentials);
}

const func1 = () => {
  return null
}

const auth = {
  login,
  func1
}

export default auth;