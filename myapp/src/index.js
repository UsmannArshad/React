import React from 'react';
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import ShowHeader from './components/header';
import './style/style.css'
function App()
{
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
const App2=()=>   //same as app
(        
    React.createElement('div',{className:'imclass'},React.createElement('h1',{},'Hello World'))
)
const App3=()=>   //same as app
(        
    <>                     //or React.Fragment in tags
        <h1>Hello World</h1>
        <h2>Hello Pakistan</h2>
    </>
)
const App4=()=>
(
    <>
    <ShowHeader/>
    </>
)
//ReactDOM.render(<App/>,document.getElementById('root'))  //not suported inr react18
const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<App tab="home" />); by returning in form of html
//root.render(<App2/>)
//root.render(<App3/>)
root.render(<App4/>)