import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../styleComponents/Input';
import Button from "../styleComponents/Button"
import LoginDiv1 from '../styleComponents/LoginDiv1';
import LoginDiv2 from '../styleComponents/LoginDiv2';

const Login = (  ) => {

  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === "user" || password ==="password")
    {
        return navigate('/home')
    }
    else {
        alert ("The username or password wrong")
    }
}

  return (
    <LoginDiv1>
      <LoginDiv2 style={{width:"30vw", height:"58vh", backgroundColor:"#C3A9FF",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"10%", marginBottom:"100px"}}>
      <h1 style={{}}>Login</h1>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <br></br> 
      <Button onClick={handleLogin}>Login</Button>
      <p>Enter username as "user" and password as "password" !!</p>
      </LoginDiv2>
    </LoginDiv1>
  );
};

export default Login;