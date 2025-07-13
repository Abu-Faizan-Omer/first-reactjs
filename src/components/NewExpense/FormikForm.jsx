import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Hint: Define the validation schema using Yup to validate email and password
  // Hint: Email should be a valid email format and required
  // Hint: Password should be at least 6 characters and required

  
  const initialValues = {
    // Hint: Set initial values for email and password fields (empty strings to start with)
    name:"",
    email: "",
    password:""
  };

  const validationSchema = Yup.object({
    name:Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password:Yup.string().min(6,"Password must be in 6 characters").required("Password is required")
  });


  // Hint: Create an onSubmit function that logs form values to the console when submitted
  let handleSubmit = (values,{resetform}) => {
    console.log("Form values ", values)
    alert("Form Submitted")
    resetform()
  }
 

  return (
    <div>
      <h1>Simple Login Form</h1>
      <Formik
        // Hint: Pass the initialValues, validationSchema, and onSubmit function here
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>

             {/* Email Field */}
            <div>
              <label htmlFor="name">Name</label>
              <Field type="name" id="name" name="name" />
              <ErrorMessage name="name"  />
             
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email"  />
             
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>

           
            <button type="submit">Submit</button> 
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
