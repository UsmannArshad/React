import React, { useState } from 'react'
import Title from './components/title'
import Count from './components/count'
import Age from './components/age'
import CountBtn from './components/countBtn'
import AgeBtn from './components/ageBtn'
const App=()=>{
    const[count,setCount]=useState(0)
    const[age,setAge]=useState(10)
const IncrementCount=()=>{
    setCount(u=>u+1)
}
const IncrementAge=()=>{
    setAge(u=>u+1)
}
    return(
        <>
        <Title/>
        <Count count={count}/>
        <CountBtn handlecount={IncrementCount}/>
        <Age age={age}/>
        <AgeBtn handlecount={IncrementAge}/>
        </>
    )
}
export default App