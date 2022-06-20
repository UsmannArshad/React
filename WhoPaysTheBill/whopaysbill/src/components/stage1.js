import React, { createRef, useContext, useState } from 'react'
import {Button,Form,Alert} from'react-bootstrap'
import { MyContext } from '../context'
const Stage1=()=>{
    const text=createRef()
    const context=useContext(MyContext)
    console.log(context.state.players)
    const [error,SetError]=useState([false,''])
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const check=ValidInput(text.current.value)
        if(check===true)
        {
            context.AddPlayer(text.current.value)
            text.current.value=''
        }
    }
    const ValidInput=(val)=>{
        if(val===''){
            SetError([true,'Sorry You need to add something'])
            return false
        }
        if(val.length<=2)
        {
            SetError([true,'Name should be atleast of length 3'])
            return false
        }
        SetError([false,'Name should be atleast of length 3'])
        return true
    }
    return (
        <>
        { error[0] ? <Alert variant='danger'>
        {error[1]}
        </Alert>: null } 
        <Form onSubmit={SubmitHandler} className='mt-2'>
            <Form.Group>
                <Form.Control type="text" placeholder='Add Player Name' name='player' ref={text} className='input_text mt-2'/>
            </Form.Group>
            <Button variant='primary' type='submit' className='addbtn mt-3'>Add</Button>
        </Form>
        {
            context.state.players.length>0 ?
            <>
            <hr/>
            <div>
                <ul className='list-group'>
                {context.state.players.map((item,i)=>(
            <li key={i} className="list-group-item d-flex justify-content-between align-aitem-center list-group-item-action">{item} <span className="badge bg-danger" onClick={context.RemovePlayer}>x</span></li>))}
                </ul>
            </div>
            <Button className='nextbtn mt-3' onClick={context.NextBtnHandler}>NEXT</Button>
            </>
            :null
        }
        </>
    );
}

export default Stage1;