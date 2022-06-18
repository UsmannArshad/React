import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './app';
import App1 from './components/app1'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<><App/><App1/></>)