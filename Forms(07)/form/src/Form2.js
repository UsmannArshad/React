//Making form with Formik and yup validation
import {useFormik} from 'formik'
import * as yup from 'yup'
import React from 'react'
import { string } from 'yup/lib/locale'
const Form2=()=>{
const formik=useFormik({
    initialValues:{
    firstname:'',
    lastname:'',
    email:'',
    country:'',
    state:'',
    zip:''
    },
    validationSchema:yup.object({
        firstname:yup.string()
        .required('This field is required')
        .max(10,'cannot exceeds 10 characters'),
        lastname:yup.string()
        .required('This field is required')
        .max(10,'cannot exceeds 10 characters'),
        email:yup.string()
        .required('It is required')
        .email('not a valid email'),
        zip:yup.number()
        .max(9999,'9999 is limit')
        .required('This field is required')

    }),
    onSubmit:(values)=>{console.log(values)}
})
return (
    <div className="container">
    <h1>FORM 2</h1>
    <div className="col-md-12 mt-5">
    <form onSubmit={formik.handleSubmit}>
    <h4 className="mb-3">Personal information</h4>

    <div className="row">
        <div className="col-md-6 mb-3">
        <label htmlFor="firstname">First name</label>
        <input type="text" value={formik.values.firstname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="firstname" name="firstname"/>
        {formik.errors.firstname&&formik.touched.firstname ? <div style={{background:'red'}}>{formik.errors.firstname}</div>:null}
        </div>
        <div className="col-md-6 mb-3">
        <label htmlFor="lastname">Last name</label>
        <input type="text" value={formik.values.lastname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="lastname" name="lastname"/>
        {formik.errors.lastname&&formik.touched.lastname ? <div style={{background:'red'}}>{formik.errors.lastname}</div>:null}
        </div>
    </div>

    <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  className="form-control" id="email" name="email" placeholder="you@example.com"/>
        {formik.errors.email&&formik.touched.email ? <div style={{background:'red'}}>{formik.errors.email}</div>:null}
    </div>


    <div className="row">
        <div className="col-md-5 mb-3">
    <label htmlFor="country">Country</label>
    <select className="custom-select d-block w-100" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} id="country" name="country">
            <option value="">Choose...</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="NL">Netherlands</option>
    </select>
        
        </div>
        <div className="col-md-4 mb-3">
    <label htmlFor="state">State</label>
        <select className="custom-select d-block w-100" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.state} id="state" name="state">
            <option value="">Choose...</option>
            <option value="california">California</option>
            <option value="toronto">Toronto</option>
            <option value="utrech">Utrech</option>
        </select>
        
        </div>
        <div className="col-md-3 mb-3">
        <label htmlFor="zip">Zip</label>
        <input type="number" value={formik.values.zip} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="zip" name="zip"/>
        {formik.errors.zip&&formik.touched.zip ? <div style={{background:'red'}}>{formik.errors.zip}</div>:null}
        </div>
    </div>

    <hr className="mb-4"/>
    <button className="btn btn-primary btn-lg btn-block" type="submit">
        Submit
    </button>
    </form>
    </div>
</div>
);
}

export default Form2;
