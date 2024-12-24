import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Login = (props) => {
   const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const text = "Please Login!"; // Text to display
  useEffect(() => {
    let timeout;
    if (isErasing) {
      // Erasing the text
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 100);
    } else {
      // Typing the text
      timeout = setTimeout(() => {
        setDisplayText(prev => text.slice(0, prev.length + 1));
      }, 150);
    }
    if (!isErasing && displayText === text) {
        setTimeout(() => setIsErasing(true), 1000); // Wait before erasing
      }
  
      if (isErasing && displayText === '') {
        setTimeout(() => setIsErasing(false), 500); // Wait before typing again
      }
  
      return () => clearTimeout(timeout);
    }, [displayText, isErasing]);
  
   const [credentials, setCrediantials] = useState({email: "", password: ""})
   let navigate = useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:2000/api/auth/login", {
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
      const json = await response.json()
      console.log(json);
      if(json.success){
        // redirect
        localStorage.setItem('token', json.authtoken)
        props.showAlert("logged in sucessfully", "success")
        navigate("/");

      }
      else{
        props.showAlert('invalid credentials', 'danger')
      }
  }
   const onChange = (e)=>{
     setCrediantials({...credentials, [e.target.name]: e.target.value})
   }

  return (
    <div>
      <h1 id="animated-text">{displayText}</h1>
      <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={onChange} name='password'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
