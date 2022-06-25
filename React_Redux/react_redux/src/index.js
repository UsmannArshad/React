import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './Store/Reducer';
import promiseMiddleware from 'redux-promise'
const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const createStorewithMiddleware=composeEnhancer(applyMiddleware(promiseMiddleware))(legacy_createStore)
root.render(
    <Provider store={createStorewithMiddleware(rootReducer)}>
    <App/>
    </Provider>
);