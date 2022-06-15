import React from 'react'
import {createRoot} from 'react-dom/client'
import Child from './child';
const container = document.getElementById('root');
const root = createRoot(container);
const User=[
    {id:1,name:'Usman'},
    {id:2,name:'Ali'},
    {id:3,name:'Abeer'},
]
root.render(<><Child user={User}/></>) 