import React,{memo} from 'react'
const AgeBtn=({handlecount})=>{
    console.log("5-Age button")
    return(
        <>
        <button onClick={handlecount}>Add</button>
        </>
    )
}
export default memo(AgeBtn)