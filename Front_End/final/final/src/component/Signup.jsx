import React from 'react'
import {useFormik} from 'formik';
import{Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import * as Yup from 'yup';
import { toast,ToastContainer} from 'react-toastify';


const Signup = () => {
    const formik=useFormik({
                initialValues:{
                    name:"",
                    email:"",
                    username:"",
                    mobilenumber:"",
                    password:"",
                    confirmpassword:"",},
           
  // Validation***                  
                validationSchema:Yup.object ({
                    name:Yup.string()
                    .max(15,"* must be 15 characters or less *")
                    .required("* Name required here *"),

                    email:Yup.string()
                    .min(13,"* please enter valid email address *")
                    .max(40,"* please enter valid email address *")
                    .required("* Email required here *"),

                    username:Yup.string()
                    .min(8,"* please enter must be 8-15 characters *")
                    .max(25,"* please enter must be 8-15 characters *")
                    .required("* Username required here *"),

                    mobilenumber:Yup.string()
                    .min(10,"* please enter valid mobile number *")
                    .max(10,"* please enter valid mobile number *")
                    .required("* Mobilenumber required here *"),

                    password:Yup.string()
                    .min(8,"* password must be atleast 8 characters *")
                    .max(15,"*  password must be atleast 15 characters or less *")
                    .required("* Password required here *"),

                    confirmpassword:Yup.string()
                    // .min(8,"* please enter must be 8-15 characters *")
                    // .max(15,"* please enter must be 8-15 characters *")
                    .oneOf([Yup.ref('password'),null],'* Password is not matching')
                    .required("* ConfirmPassword required here *"),
                  
                }),
                 onSubmit:(values)=>{ 
                        Integrating.emailValidation(values.email).then((res)=>{
                           if(res.data){ toast.warn("This Email already exists"); }     
                           else{ toast.success("Creating Account...");
                        Integrating.UserEntitysaved(values).then((res)=>{
                                toast.success("Registration Successfully done!");
                                Navigate("/login");
                        });
                        };
                        });
                        console.log('Form Submit',values)
                         },
         });
               
                         
  console.log(formik.touched);                             
  return (
    <div className="App">
        <center>
        <h1>Abacus Academy</h1>
      
      <form align="center"  onSubmit={formik.handleSubmit}>
      <h4>Register Form</h4>
          {/* <Form.Select >
           <option >Enter Admin/User</option>
           <option> <option>Admin</option></option>
          <option> <option>User</option></option>
          </Form.Select>  */}
          <input className="w-100" 
          placeholder="Enter admin/user"
          type="text" name="name" id="name"
          values={formik.values.name}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} />  
{formik.touched.name && formik.errors.name ?<p>{formik.errors.name}</p>:null}<br></br>

        <input  className="w-100" 
        placeholder="Enter email" 
        type="email" name="email" 
        id="email" 
        values={formik.values.email} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}/>
{formik.touched.email && formik.errors.email ?<p>{formik.errors.email}</p>:null}<br></br>

        <input className="w-100"  
        placeholder="Enter Username" 
        type="text" name="username" 
        id="username"
        values={formik.values.username} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}/>
{formik.touched.username && formik.errors.username ?<p>{formik.errors.username}</p>:null}<br></br>

        <input className="w-100" 
        placeholder="Enter Mobilenumber" 
        type="text" name="mobilenumber" 
        id="mobilenumber"
        values={formik.values.mobilenumber} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} />
{formik.touched.mobilenumber && formik.errors.mobilenumber ?<p>{formik.errors.mobilenumber}</p>:null}<br></br>
        
        <input className="w-100" 
        placeholder="Password" 
        type="password" 
        name="password" 
        id="password"
        values={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}/>
{formik.touched.password && formik.errors.password?<p>{formik.errors.password}</p>:null}<br></br>

        <input className="w-100" 
        placeholder="Confirm Password" 
        type="text" 
        name="confirmpassword" 
        id="confirmpassword"
        values={formik.values.confirmpassword} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} /> 
 { formik.touched.confirmpassword && formik.errors.confirmpassword?<p>{formik.errors.confirmpassword}</p>:null}<br></br>
    {/* <button type="submit ">SUBMIT</button>&nbsp;&nbsp; */}
    <button type="submit">SUBMIT</button>
    {/* <button  type="reset">REST</button> */}
    {/* <Link to='/login' type="submit"> <button>SUBMIT</button></Link> */}
       <center><Link to='/Login' className="Link" type="Login"> Already User ? <button>LOGIN</button> </Link></center>
      </form>
 </center>
    </div>
   
  )
}

export default Signup;






