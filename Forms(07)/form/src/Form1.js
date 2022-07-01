import {useFormik} from 'formik'
import React from 'react'
const validate=values=>{
  const errors={}
  if(!values.firstname)
  {
    errors.firstname='Required'
  }else if(values.firstname.length<=4)
  {
    errors.firstname='Must be 15 character long'
  }
  if(!values.lastname)
  {
    errors.lastname='Required'
  }else if(values.lastname.length<=4)
  {
    errors.lastname='Must be 15 character long'
  }
  if(!values.email)
  {
    errors.email='required'
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  {
    errors.email='not a valid email'
  }
  return errors
}
const Form1=()=>{
  const formik=useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email:'',
      country:'',
      state:'',
      zip:''
    },
    validate,
    onSubmit:(values)=>{console.log(values)}
  })
  return (
    <div className="container">
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
          <input type="text" value={formik.values.zip} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="zip" name="zip"/>
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

export default Form1;
