import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware,legacy_createStore,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './State/reducer/index';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(reducers,{},composeEnhancers(applyMiddleware(promiseMiddleware,thunk)))
root.render(
  <Provider store={store}>
  <App/>
  </Provider>
)