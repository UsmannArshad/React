import React from 'react'
import {useFormik} from 'formik'
import {Form} from 'react-bootstrap'
import * as Yup from 'yup'
import { addcontact } from '../../Store/actions'
import {useDispatch} from 'react-redux'
const Contact = () => {
  const Dispatch=useDispatch()
  const Formik=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:Yup.object({
      email:Yup.string().
      required('This is required')
      .email('Not a valid email'),
      password:Yup.string().
      required('This is required').length(4,'Give 4 character passsword')
    }),
    onSubmit:values=>Dispatch(addcontact(values))
  });
  return(
    <>
    <Form onSubmit={Formik.handleSubmit}>
    <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input  {...Formik.getFieldProps('email')}type="email" value={Formik.values.email} name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    {Formik.errors.email&&Formik.touched.email ? <p>{Formik.errors.email}</p>:null}
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
    <label htmlFor="password">Password</label>
    <input {...Formik.getFieldProps('password')} type="password" value={Formik.values.password} name='password' className="form-control" id="password" placeholder="Password"/>
    {Formik.errors.password&&Formik.touched.password ? <p>{Formik.errors.password}</p>:null}
  </div>
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
  </Form>
    </>
  )
}

export default Contact