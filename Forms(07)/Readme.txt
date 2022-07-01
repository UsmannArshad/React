Forms:

https://formik.org/docs/tutorial

1)Use Formik library
nm install formik yup --save
yup is for validation
Wrap ur form in the formik tag provide intial values and functions like onsubmit onchange

useformik hook(latest):
import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

Validation with formik:
make a custome function that will return an object
validate each values u want to valdiate and update the object like erors.firstname='required'
include it in useFormik hook then update the HTML that if erorr is present then show erorr otherwise null

useBlur have an object touched.It keep the record of field that we touched.Now it will not give error 
on all of the fields.See code and documentation for more.