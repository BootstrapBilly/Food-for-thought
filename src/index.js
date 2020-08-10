import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"

import request_reducer from "./Store/Reducers/0_send_request_reducer"
import filters_reducer from "./Store/Reducers/1_handle_filters_reducer"
import search_reducer from "./Store/Reducers/2_handle_search_reducer"
import colour_change_reducer from "./Store/Reducers/3_handle_colour_change_reducer"
import font_scale_reducer from "./Store/Reducers/4_handle_font_scale_reducer"
import toggle_portion_reducer from "./Store/Reducers/5_handle_toggle_portion_reducer"
import collapse_reducer from "./Store/Reducers/6_handle_collapse_food_items_reducer"

const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  request: request_reducer,
  filters: filters_reducer,
  search: search_reducer,
  colour: colour_change_reducer,
  font: font_scale_reducer,
  portion: toggle_portion_reducer,
  collapse: collapse_reducer

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

