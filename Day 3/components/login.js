import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='whole'>
        <br></br>
        <br></br>
        <div className='cen'>
          <h2>LOGIN</h2>
            <br></br>
      <form onSubmit={handleSubmit}>
        <label>
        
          <h3>Email:</h3>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br /><br></br>
        <label>
          <h3>Password:</h3>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <br></br><br></br>
        <h4>Don't have an account?   <Link to='/sign'>SignUp</Link>  </h4>  
        <br></br>
        <Button variant='contained' type="submit" ><Link to="/nav">Login</Link></Button><br></br>
      </form></div>
    </div>
    
  );
};

export default Login;