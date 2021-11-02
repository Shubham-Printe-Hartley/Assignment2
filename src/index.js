import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './redux/store'

// renders the App on div element with id="root"
ReactDOM.render(
  <React.StrictMode>

    {/* wrapping the whole application inside of the redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

