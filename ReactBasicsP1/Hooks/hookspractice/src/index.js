import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './app';
import ShowPost from './components/posts';
const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<App initialcount={0}/>)
root.render(<ShowPost/>)