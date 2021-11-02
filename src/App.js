import { useEffect } from 'react';
import Container from './views/container';
import Home from './views/home/home';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  // fetching userLogin to check if some user data is present inside the store
  const userLogin = useSelector((state) => state.userLogin);

  // watching userLogin to re-render App 
  // re-renders whenever userLogin state inside the redux store changes
  useEffect(() => [userLogin]);

  // checks for user access-token inside of the redux store and the localstorage
  // grants access to the home-page only if the access-token is present
  if(!userLogin?.data?.access_token && !localStorage.getItem('userLogin')?.data?.access_token){

    // returns login-page if access-token is not present
    return (
      <div className="login-page-wrapper">
        <Container />
      </div>
    )
  }

  // returns home-page if access-token is present
  return (
    <div className="login-page-wrapper">
      <Home />
    </div>
  );
}

export default App;
