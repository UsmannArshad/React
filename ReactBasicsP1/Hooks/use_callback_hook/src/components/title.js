import React,{memo} from 'react'
const Title=()=>{
    console.log("1-Title")
    return(
        <>
        <h1>My App</h1>
        <hr></hr>
        </>
    )
}
export default memo(Title)   //now it will only re-render if props changed