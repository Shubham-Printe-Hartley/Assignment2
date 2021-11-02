import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {saveState} from './localStorage';

import reducer from './reducers'

const initialState = {}
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
store.subscribe(() => {
  saveState(store.getState());
});

export default store;


