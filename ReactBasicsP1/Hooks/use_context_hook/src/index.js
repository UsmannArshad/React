import React,{ useState, createContext, useContext } from 'react'
import {createRoot} from 'react-dom/client'
import App from './parent';
const container = document.getElementById('root');
const root = createRoot(container);
const UserContext = createContext();       //component example from W3 school

function Component1() {
const [user, setUser] = useState("Jesse Hall");

return (
    <UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    <Component2/>
    </UserContext.Provider>
);
}

function Component2() {
return (
    <>
    <h1>Component 2</h1>
<Component3 />
    </>
);
}

function Component3() {
return (
    <>
<h1>Component 3</h1>
<Component4 />
    </>
);
}

function Component4() {
return (
    <>
<h1>Component 4</h1>
<Component5 />
    </>
);
}

function Component5() {
const user = useContext(UserContext);

return (
    <>
<h1>Component 5</h1>
<h2>{`Hello ${user} again!`}</h2>
    </>
);
}
root.render(<><Component1/><App/></>);