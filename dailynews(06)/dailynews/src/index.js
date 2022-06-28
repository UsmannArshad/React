import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes'
import ReduxStore from './Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={ReduxStore()}>
    <Routes />
    </Provider>
    </React.StrictMode>
);
