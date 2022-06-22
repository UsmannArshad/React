import React,{memo} from 'react'
const CountBtn=({handlecount})=>{
    console.log("3-Count Button")
    return(
        <>
        <button onClick={handlecount}>Add</button>
        </>
    )
}
export default memo(CountBtn)