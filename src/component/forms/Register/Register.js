import React, { useState } from 'react';
import {link,useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile}from "firebase/auth";
import {auth} from '../../../firebase';
import styles from './register.css';


function Register() {
  const navigate=useNavigate();
  const [values,setValues]= useState({
    name:"",
    username:"",
    email:"",
    password:"",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtohnDisabled]=useState(false);
  const handlesubmission=()=>{
    if(!values.name||!values.username||!values.email||!values.password){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtohnDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.password)
    .then(async(res) => {
      setSubmitButtohnDisabled(false);
      // console.log(res);
         const user=res.user;
         await updateProfile(user,{displayName:values.name,});
       navigate("/");
    })
    .catch((err)=>{
      setSubmitButtohnDisabled(false);
       setErrorMsg(err.message);
      // console.log("error-",err.message);
    });
  };
  return (
    <form action="">
    
    <h3 className="heading3">Create Account</h3>
    <h1 className="heading1">Let's get to know you better !</h1>

    <div>
      <label className="lbl" htmlFor='name' id="name">name</label>
      <input className="inp" type="text" name="name" id="name" autoComplete="offf" placeholder="Enter Your name" onChange={event=>setValues(prev=>({...prev,name:event.target.value}))}
    />     
    </div>
    
    <div>
      <label  className="lbl" htmlFor='username' id="username">Username</label>
      <input className="inp" type="text" name="username" id="username" autoComplete="offf" placeholder="Enter Your username" onChange={event=>setValues(prev=>({...prev,username:event.target.value}))}
    />     
    </div>
    
    <div>
      <label  className="lbl" htmlFor='email' id="email">Email</label>
      <input className="inp" type="text" name="email" id="email" autoComplete="offf" placeholder="Enter Your email" onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}
    />     
    </div>
    <div>
      <label  className="lbl" htmlFor='password' id="password">Password</label>
      <input className="inp" type="password" name="password" id="password" autoComplete="offf" placeholder="Enter Your password" onChange={event=>setValues(prev=>({...prev,password:event.target.value}))} />
    </div>
   
     <div className={styles.error}>{errorMsg}</div>
    <button  onClick={handlesubmission} disabled={submitButtonDisabled} >Register</button>
    </form>
  )
}

export default Register
