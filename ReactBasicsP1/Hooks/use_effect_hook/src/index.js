import React from 'react'
import Timer from './components/timer';
import {createRoot} from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Timer/>)