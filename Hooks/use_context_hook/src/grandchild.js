import React,{useContext} from "react";
import { myContext } from "./context/context";
const GrandChild=()=>{
    const context=useContext(myContext)        
    console.log({context})
    return(
        <>
        <h2>Grand Child</h2>
        {context.active ? context.users.map((item)=>(
            <div key={item.id}>{item.name}</div>
        )):null} 
        <hr></hr>
        <button onClick={context.togglehandler}>Toggle</button>
        </>
    )
}
export default GrandChild