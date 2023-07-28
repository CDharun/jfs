import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../asset/login.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const navigate=useNavigate();
  
// function SaveUser()
// {
//   axios.post("http://localhost:8080/api/v1/auth/register",{
//     "name":username,
//     "email":email,
//     "password":password
//   }).then((response)=>
//   {
//     navigate("/login");
//   })
// }

const validate= async(e) =>
{
  e.preventDefault();
  var cons=0;
  if(username.length<3)
  {
    alert("Please enter a valid name")
  }
  if(username.length<4)
  {
    cons=cons+1;
  }
  if(email.length<7)
  {
    alert("Please enter a valid email");
  }
  if(email.length<7)
  {
    cons=cons+1;
  }
  if(password.length<8)
  {
    alert("Your password length must be greater than 8 characters")
  }
  if(password.length<8)
  {
    cons=cons+1;
  }
  if(cons===0)
  {
      const url="http://localhost:8080/api/v1/auth/register";
      const data={
       name:"ak",
       email: email,
       password:password
     }
      try{
     const result=await axios.post(url,data);
     const jwtoken=result.data.token;
     localStorage.setItem('jwtToken',jwtoken);
     console.log(result.data);
    //  props.setUsername(email);
     navigate("/");
      }
      catch(error)
      {
       console.error('ermessage',error.message);
      }
    }
}





  return (
    <div className='whole'>
      <br />
      <br />
      <div className='cen'>
        <div>
          <h2>SIGN UP</h2>
        </div>
        <div>
          <form onSubmit={validate}>
            <label>
              <h3>Username:</h3>
              <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </label>
            <label>
              <h3>Email:</h3>
              <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </label>
            <label>
              <h3>Password:</h3>
              <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
              {error1 && <p style={{ color: 'red' }}>{error1}</p>}
            </label>
            {/* <label>
              <h3>Phone Number:</h3>
              <input type="tel" value={phoneNumber} />
            </label> */}
            <h4>
              Already have an account? <Link to='/'>Login</Link>
            </h4>
            <Button variant='contained' type="submit">
              Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  )

  
}
export default SignUp;
