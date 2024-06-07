import React, { useState } from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
    console.log("login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'Application/formData',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");

    }
    else{
      alert(responseData.errors);
    }
  }
  
  
  const signup = async () =>{
    console.log("signup function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'Application/formData',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");

    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Enter your name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Enter your email id'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Enter password'/>

        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"
        ?<p className='loginsignup-login'>Already have a account? <span onClick={()=>{setState("Login")}}>Login</span></p>
        :<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>}
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>I agree to the terms and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup