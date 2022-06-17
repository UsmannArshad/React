import React, { useEffect, useState } from 'react'
const Timer=()=>{
    let [count,setCount]=useState(0)
    let [count_one,setCount1]=useState(0)
    let [count_two,setCount3]=useState(0)
    let [useEffectcount,setCount2]=useState(0)
    let [check,setCheck]=useState(true)
    useEffect(()=>{
        console.log("in useEffect")
        let timeinterval=setTimeout(()=>{
        check ? setCount3(u=>u+1):setCount3(u=>u)     //this useEffect will update count infinitely 
        },1000)          //hat means that when the count changes, a render happens, which then triggers another effect.
        return()=>{clearInterval(timeinterval)
        console.log("Effect Cleanup")}
    })
    useEffect(()=>{
        console.log("Mounting")   //as an empty array is passed so it will be called only once at initial render
    },[])
    useEffect(()=>{
        setCount2(u=>u+1)
    },[count])
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>ADD(its state passed as a dependency)</button>
        <h3>Count:{count_one}</h3>
        <button onClick={()=>{setCount1(count_one+1)}}>ADD(its state is'nt passed in useEffect array)</button>
        <h3>Count of useEffect is: {useEffectcount}</h3>
        <h3>Unlimited-Count:{count_two}</h3>
        <button onClick={()=>{setCheck(!check)}}>ADD(its state is'nt passed in useEffect array)</button>
        </>
    )
}
export default Timer