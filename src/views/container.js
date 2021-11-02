import Logo from './logo/logo';
import FormContainer from './form/formContainer';
import logoImg from '../assets/logo2.png';

const Container = () => {


  // returns JSX for container component
  return(
    <div className="wrapper">
      <div className="mid-container w-100">
      <div className="container">

        {/* Company Logo */}
        <Logo img={logoImg} />

        {/* Login Form */}
        <FormContainer />
        
        {/* Links  */}
        <div className="links text-center">
          <a href="/#">Privacy Policy</a>
          &nbsp; • &nbsp; 
          <a href="/#">Terms of Service</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Container