import React from 'react'
import {useFormik} from 'formik';
import{Link} from 'react-router-dom';
import * as Yup from 'yup';


const Login= () => {
    const formik=useFormik({
                initialValues:{
                    email:"",
                    password:"",
                },
                    onSubmit:(values)=>{
                        console.log('From submit',values)
                    },
                    validationSchema:Yup.object ({ 
                    email:Yup.string()
                    .min(13,"* please enter valid email address * ")
                    .max(40,"* please enter valid email address *")
                    .required("* E-mail required here *"),

                    password:Yup.string()
                    .min(8,"* please enter correct password * ")
                    .max(15,"* please enter correct password *")
                    .required("* Password required here *"),
                    }),
                })
                const shoot = () => {
                    alert("You are login ! ");
                  }

                  console.log(formik.touched);                   
                    return (
            <div className="App">
                <center>
                    <h1>Abacus Academy</h1>
               <form autoComplete='off' onSubmit={formik.handleSubmit}>
               <h4>Login Page</h4>
                     <input placeholder="Enter email" 
                     type="email" 
                     name="email" 
                     id="email" 
                     values={formik.values.email} 
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}/>
     {formik.touched.email && formik.errors.email ?<p>{formik.errors.email}</p>:null}<br></br>

                    <input placeholder="Password" 
                    type="password" 
                    name="password" 
                    id="password"
                    values={formik.values.password} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}/>
     {formik.touched.password && formik.errors.password?<p>{formik.errors.password}</p>:null}<br></br>

                    {/* <button type="login">LOGIN</button> */}
                      <Link to='/user' type="login"> <button>SUBMIT</button></Link>
                    <center> <Link to='/Admin' className="Link"> New User/Admin ?  <button >SIGNUP</button></Link></center> 
   
               </form>
               </center>
               
               
      </div> 
                    );
                };
                export default Login;
