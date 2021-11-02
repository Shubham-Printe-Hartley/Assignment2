import LoginForm from './form';
import { useSelector } from 'react-redux';
import Error from '../../components/error/errorComponent'
import Loader from '../../components/loader/loader'
import errorImg from '../../assets/errorIcon.png'

const FormContainer = () => {

  // fetching error-message and loading  from the redux store
  const errorMessage = useSelector((state) => state?.userLogin?.error?.message);  
  const loading = useSelector(state => state.loading);

  return (
    <div className="form-wrapper">
      <h1>Log In</h1>
      <h3>DirectCreditLink</h3>

      {/* shows error component if error-message is present */}
      {errorMessage && 
      <Error 
      errorType="loginError"
      img={errorImg} 
      message={errorMessage} 
      />
      }

      {/* shows loader component is loading is set to true */}
      <Loader loading={loading} color={"primary"}/>
      <LoginForm />
    </div>
  )
}

export default FormContainer;