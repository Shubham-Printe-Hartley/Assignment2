import {Modal, Button} from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';

export const PopUp = ({closeModal, statusData, updateStatus}) => {

      // setting focus to the input element once the pop-up gets rendered
      const statusRef = useRef();
      useEffect(() => {
        statusRef.current.focus();
      }, [])
      // adjusts whether the error component is showing or not
      const [show, setShow] = useState(true);
      const {rowIndex, columnId, value} = statusData;
      const handleClose =(e) => {
        closeModal();
        setShow(false);
        if(e.target.name==="change"){
          console.log("value changed");
          updateStatus(rowIndex, columnId, data)
        }else {
          console.log("value unchanged")
        }  
      }

      const [data, setData] = useState("");

    // returns JSX for error component
      const modalComponent = () => {
        return(
          <>
            <Modal className="form-wrapper" show={show} onHide={handleClose}>
              <Modal.Body className="text-center mt-3">
                <p className="text-danger">{value}</p>
                <input ref={statusRef} onChange={(e) => setData(e.target.value)} />
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                <Button name="close" variant="outline-danger" onClick={handleClose}>
                  Close
                </Button>
                <Button name="change" variant="outline-primary" onClick={handleClose}>
                  Change
                </Button>
              </Modal.Footer>
            </Modal>
            
          </>
        )
      }
      // calling the modalComponent function;
      return modalComponent();
}
