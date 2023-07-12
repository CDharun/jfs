import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './login.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword,setrePassword] = useState('');
  const [error ,setError] =useState('');
  const [error1 ,setError1] = useState('');
  const [error2 ,setError2] = useState('');
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if(password.length<8)
    {
      setError1('Invalid password');
    }
    else
    {
      setError1(null);
    }
  };

  const handlerePasswordChange = (e) => {
    setrePassword(e.target.value);
    if(repassword.length<8)
    {
      setError2('Invalid password');
    }
    else
    {
      setError2(null);
    }
  };

  const handleSubmit = (e) => {
    if(email.length==0 && password.length==0 && repassword.length==0)
    {
    setError('Please enter a valid username');
    setError1('Please enter a valid password');
    setError2('Please enter a valid password');
    }
    if(email.length==0)
    {
    setError('Please enter a valid email');
    }
    if(password.length==0)
    {
    setError1('Please enter a valid password');
    }
    if(repassword.length==0)
    {
    setError2('Please enter a valid password');
    }
    e.preventDefault();  
  };

  return (
    <div className='whole'>
        <div className='cen'>
          <div><h2>SGN UP</h2></div>
          <div>
            <form onSubmit={handleSubmit}>
            <label>
            <h3>Email:</h3>
            <input type="email" value={email} onChange={handleEmailChange} />
            <p style={{color: 'red'}}>{error}</p>
             </label>
            <label>
            <h3>Password:</h3>
            <input type="password" value={password} onChange={handlePasswordChange}  />
            <p style={{color: 'red'}}>{error1}</p>
            </label>
           <label>
            <h3>Confirm Password:</h3>
            <input type="password" value={repassword} onChange={handlerePasswordChange}  />
            <p style={{color: 'red'}}>{error2}</p>
            </label>
           <h4>Already have an account?   <Link to='/'>Login</Link> </h4>  
           <Button variant='contained' type="submit"><Link to="/nav">Sign Up</Link></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;