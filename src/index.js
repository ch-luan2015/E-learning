import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Cấu hình redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './redux/reducers/index';
//react-bootstrap


const store = createStore(rootReducer, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

