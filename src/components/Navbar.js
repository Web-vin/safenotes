import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);
  }, [location]);
  const handleLogout = ()=>{
    localStorage.removeItem('token');
      navigate('/login')
  }
  return (

      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <img src={require("./img/3.jfif")} height={50} width={50}/>
    <Link className="navbar-brand mx-3" href="#"><h4>Safenotes</h4></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'? "active": ""}`} to="/about">About</Link>
        </li>
        
        
        
      </ul>
     {!localStorage.getItem('token')? <form className="d-flex">
        <Link className="btn btn-outline-primary mx-2" to="/login" type="submit">Login</Link>
        <Link className="btn btn-outline-primary mx-2" to="/signup" type="submit">Signup</Link>
      </form>: <button onClick={handleLogout} className='btn btn-primary'>Log Out</button>}
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
