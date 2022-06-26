import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware,legacy_createStore} from 'redux'
// import thunk from 'redux-thunk'
import reducers from './State/reducer';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=legacy_createStore(reducers,{},applyMiddleware(promiseMiddleware))
root.render(
  <Provider store={store}>
    <App />
    </Provider>
)