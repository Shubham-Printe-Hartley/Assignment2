import {Modal, Button} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/actions';

const Error = (props) => {

  // initialise useDispatch hook as dispatch
  const dispatch = useDispatch();

// gets error description, message and image from parent component
  const {errorType, desc, message, img} = props;
  
  // adjusts whether the error component is showing or not
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);

    // if the error type is "loginError" we clean-up the state after error has been shown
    if(errorType==="loginError"){
      // we can separate out this functionality and name it something else for better understanding
      dispatch(logout());
    }
  };
  

// returns JSX for error component
  const modalComponent = () => {
    return(
      <>
        <Modal className="form-wrapper" show={show} onHide={handleClose}>
          <Modal.Body className="text-center mt-3">
            <img className="img-fluid w-25 mb-3" src={img} alt="error-img" />
            <p className="text-danger">{message}</p>
            <p className="text-danger">{desc}</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    )
  }
  // calling the modalComponent function;
  return modalComponent();

}

export default Error;