import React from 'react'
import GrandChild from './grandchild'
const Child=(props)=>{
return(
    <>
    <GrandChild {...props}/>
    </>
)
} 
export default Child