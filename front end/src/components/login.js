import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../asset/login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Login = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const user = { email };
    const dispatch = useDispatch();
  // const [cons,setCons]=useState(0);
  // const authenticateUser=async()=>
  // {
  //   try{
  //   await axios.post("https://localhost:8080/api/v1/auth/authenticate",
  //   {
  //     "email":email,
  //     "password":password
  //   }).then((response)=>
  //   {
  //     navigate("/home");
  //   })
  // }catch(error){
  //   console.log(error);
  // }
  // }

  const validate = async(e)=>
  {
    e.preventDefault();
    let cons=0;
    if(email.length<7)
    {
      window.alert("Enter valid email address");
      
    }
    if(email.length!=0)
    {
      cons=cons+1;
    }
    if(password.length<6)
    {
      window.alert("Password length must me greater than 7 characters");
    }
    if(password.length!=0)
    {
      cons=cons+1;
    }

    if(cons===2)
    {
      
      const url="http://localhost:8080/api/v1/auth/authenticate";
      const data={
       email: email,
       password:password
     }
      try{
        dispatch({ type: "LOGIN", payload: user });
     const result=await axios.post(url,data);
     const jwtoken=result.data.token;
     localStorage.setItem('jwtToken',jwtoken);
     console.log(result.data);
    //  props.setUsername(email);
     navigate("/home");
      }
      catch(error)
      {
        window.alert("Invalid Credentials")
       console.error('ermessage',error.message);
      }
    
    
  }}





  return (
    <div className='whole'>
      <br />
      <br />
      <div className='cen'>
        <h2>LOGIN</h2>
        <br />
        <form onSubmit={validate}>
          <label>
            <h3>Email:</h3>
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            <h3>Password:</h3>
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} required />
          </label>
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <h4>
            Don't have an account? <Link to='/sign'>SignUp</Link>
          </h4>
          <br />
          <Button variant='contained' type="submit">
            Login
            </Button>
          <br />
        </form>
      </div>
    </div>
  )
  

}

export default Login;
