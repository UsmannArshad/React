import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware,legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './state/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=legacy_createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
