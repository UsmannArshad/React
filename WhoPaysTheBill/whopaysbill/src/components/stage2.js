import React, {useContext } from 'react'
import {Button} from 'react-bootstrap'
import { MyContext } from '../context'
const Stage2=()=>{
    const context=useContext(MyContext)
    return (
        <>
        <h3>The Looser is</h3>
        <h4> {context.state.result}</h4>
        <Button className='loserbtn' onClick={context.GetTheLoser}>GET NEW LOOSER</Button>
        <Button className='startbtn' onClick={context.RestartGame}>START OVER</Button>
        </>
    );
}

export default Stage2;