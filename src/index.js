import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"

import request_reducer from "./Store/Reducers/0_send_request_reducer"
import filters_reducer from "./Store/Reducers/1_handle_filters_reducer"

const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  request: request_reducer,
  filters: filters_reducer

})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(


  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>,
  
  document.getElementById('root')
);

