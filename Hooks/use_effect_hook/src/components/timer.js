import React, { useEffect, useState } from 'react'
const Timer=()=>{
    let [count,setCount]=useState(0)
    // useEffect(()=>{
    //     console.log("in useEffect")
    //     setTimeout(()=>{
    //         setCount(count+1)      =>this useEffect will update count infinitely 
    //     },1000)          //hat means that when the count changes, a render happens, which then triggers another effect.
    // })
    useEffect(()=>{
        console.log("Mounting")   //as an empty array is passed so it will be called only once at initial render
    },[])
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>ADD</button>
        </>
    )
}
export default Timer