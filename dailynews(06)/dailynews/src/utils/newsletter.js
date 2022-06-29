import React,{useEffect, useRef} from "react"
import { Button, Form} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import {adduser,clearuser} from '../Store/actions'
const Newsletter = () => {
    const dispatch=useDispatch()
    const InputText=useRef()
    const Users=useSelector(state=>state.User)
    const submithandler=(e)=>{
        e.preventDefault();
        const value=InputText.current.value
        dispatch(adduser(value))
    }
    useEffect(()=>{
        InputText.current.value=""
        console.log(Users)
        if(Users.newsletter)
        {
        if(Users.newsletter==='added')
        {
            toast.success('🦄 Email Added', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored"
                })
        }
        else
        {
            toast.error('🦄 Email Already Added!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored"
                })
        }
    }
    },[Users])
    useEffect(()=>{
        dispatch(clearuser())
    },[dispatch])
return (
    <>
    <div className="newsletter_container">
        <h1>News Letter</h1>
        <div className="form">
        <Form onSubmit={submithandler}> 
            <Form.Group>
                <Form.Control
                type="text"
                placeholder="example name@email.com"
                ref={InputText}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Add me to the list
            </Button>
        </Form>
        </div>
    </div>
    <ToastContainer/>
    </>
)
}

export default Newsletter