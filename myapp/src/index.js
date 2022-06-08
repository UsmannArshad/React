import React from 'react';
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
function App()
{
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
function App2()
{
    return(
        React.createElement('div',{className:'imclass'},React.createElement('h1',{},'Hello World'))
    )
}
//ReactDOM.render(<App/>,document.getElementById('root'))  //not suported inr react18
const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<App tab="home" />); by returning in form of html
root.render(<App2/>)