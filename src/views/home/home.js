import {useEffect, useState} from 'react';
import {logout} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import {Table} from './Table';
import MockData from '../../assets/Assignment2_MOCK_DATA.json';

const Home = () => {

  // initialise useDispatch hook as dispatch
  const dispatch = useDispatch();  

  // handles user logout event
  const handleClick=(e) => {
    // // preventing default behaviour
    // e.preventDefault();
    dispatch(logout());    
  }

  // table functionality
  const [mockData, setMockData] = useState(MockData);



  // returns JSX for home page
  return (
    <div data-testid="home" className="mid-container">
      <div className="">
        <div className="form-wrapper">
          <h3> You are now logged-in </h3>
          
          {/* TABLE GOES HERE */}
          <div>
            <Table
              
            />
          </div>

          <div className="form">
            <button onClick={handleClick} className="btn btn-primary" type="submit">Log-out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;