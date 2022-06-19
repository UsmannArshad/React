import React,{useContext} from "react";
import { myContext } from "./context/context";
const GrandChild=()=>{
    const context=useContext(myContext)        
    console.log({context})
    return(
        <>
        <h2>Grand Child</h2>
        </>
    )
}
export default GrandChild