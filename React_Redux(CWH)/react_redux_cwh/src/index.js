import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware,legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './state/reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=legacy_createStore(reducers,{},applyMiddleware(thunk))
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
