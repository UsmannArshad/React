import React,{useRef} from "react"
import { Button, Form} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import {adduser} from '../Store/actions'
const Newsletter = () => {
    const dispatch=useDispatch()
    const Users=useSelector(state=>state.User)
    const InputText=useRef()
    const submithandler=(e)=>{
        e.preventDefault();
        const value=InputText.current.value
        dispatch(adduser(value))
    }
const notify=()=>{
    console.log(Users.newsletter)
    return(Users.newsletter==='added' ? toast.success('🦄 Email Added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
        })
        :toast.error('🦄 Email Already Added!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
        })
)
}
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
            <Button variant="primary" type="submit" className="mt-2" onClick={notify}>
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