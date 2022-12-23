import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword}from "firebase/auth";
import {auth} from '../../../firebase';
import styles from './login.css';

const Login = () => {
  const navigate=useNavigate();
  const [values,setValues]= useState({
  //  username:"",
    email:"",
    password:"",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtohnDisabled]=useState(false);
  const handlesubmission=()=>{

    if(!values.email||!values.password){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtohnDisabled(true);
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then(async(res) => {
      setSubmitButtohnDisabled(false);
        // const user=res.user;
        //  await updateProfile(user,{displayName:values.name,});
        navigate("/home");
    })
    .catch((err)=>{
      setSubmitButtohnDisabled(false);
      setErrorMsg(err.message);
       console.log("error-",err.message);
    });
//     if(submitButtonDisabled==true){
//       <Link className="home" to="/home">Home</Link>
// }
  };
  return (
    <form action="">
    
    <h3 className="heading3">Login</h3>
    <h1 className='heading1'>Please Enter Your Details </h1>
    
    <div>
      <label className="lbl" htmlFor='email' id="eml">Email</label>
      <input className="inp" type="text" name="email" id="eml" autoComplete="offf" placeholder="Enter Your Email" onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}
    />
     
    </div>
    <div>
      <label className="lbl" htmlFor='password' id="pwd">Password</label>
      <input className="inp" type="password" name="password" id="pwd" autoComplete="offf" placeholder="Enter Your password"  onChange={event=>setValues(prev=>({...prev,password:event.target.value}))} />
    </div>
    <div className='error'>{errorMsg}</div>
    <button className="btn"
     onClick={handlesubmission}
      disabled={submitButtonDisabled}>
       
          Login
         
          </button>

                
         
    </form>
  )
}

export default Login
