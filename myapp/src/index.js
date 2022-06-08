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
//ReactDOM.render(<App/>,document.getElementById('root'))
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);