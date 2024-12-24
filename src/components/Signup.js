import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Signup = (props) => {
  const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const text = "Please Sign up!"; // Text to display
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
  
   const [credentials, setCrediantials] = useState({name:"", email: "", password: "", cpassword:""})
   let navigate = useNavigate();
   const handleSubmit= async(e)=>{
   e.preventDefault();
   const {name, email, password, cpassword} = credentials;
   const response = await fetch("http://localhost:2000/api/auth", {
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({name, email, password, cpassword})
    });
      const json = await response.json()
      console.log(json);
     if(json.success){
        // redirect
            if(password === cpassword){
            localStorage.setItem('token', json.authtoken)
            navigate("/Login");
            props.showAlert("Account created Sucessfully", "success")
            }
            else{
              alert('password do not match')
            }
      }
      else{
        props.showAlert("Invalid Credentials", "danger")
      }
  }
   const onChange = (e)=>{
     setCrediantials({...credentials, [e.target.name]: e.target.value})
   }
  return (
    <div>
      <h1 id="animated-text">{displayText}</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange}  name="name" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" onChange={onChange}   name="email"aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} id="password" name="password" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange}  id="cpassword" name="cpassword" minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  
    </div>
  )
}

export default Signup
