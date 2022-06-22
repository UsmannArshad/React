import React, { useState } from "react";
const PureCompF=()=>{
const [name,setName]=useState('usman')
console.log('render')
return (
        <>
        <h3>{name}</h3>
        <button onClick={()=>setName('ali')}>Ali</button>
        <button onClick={()=>setName('usman')}>Usman</button>
        </>
);
}
export default PureCompF;
