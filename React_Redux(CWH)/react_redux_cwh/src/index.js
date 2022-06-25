import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware,legacy_createStore} from 'redux'
import thunk from 'react-redux'
import reducers from './state/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=legacy_createStore(reducers,{},applyMiddleware(thunk))
root.render(
  <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
