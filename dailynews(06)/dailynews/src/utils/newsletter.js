import React,{useRef} from "react"
import { Button, Form} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import {adduser} from '../Store/actions'
const Newsletter = () => {
    const dispatch=useDispatch()
    const Users=useSelector(state=>state.User)
    const InputText=useRef()
    const submithandler=(e)=>{
        e.preventDefault();
        const value=InputText.current.value
        dispatch(adduser(Users.users,value))
    }
return (
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
            <Button variant="outline-primary" type="submit">
                Add me to the list
            </Button>
        </Form>
        </div>
    </div>
)
}

export default Newsletter