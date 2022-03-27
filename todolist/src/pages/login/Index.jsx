import React from 'react'
import {Link} from "react-router-dom";
import Input from '../../components/Input';
import "./login.css";

const Login = () => {
  return (
    <div>
        <div className="container-login">
            <h1>Login</h1>
            <Link to="register"><p>Sign up?</p></Link>
            <form >
              <Input type="email" placeholder="your email"/>
              <Input type="password" placeholder="your password"/>
              <Link to="main"><button>LOGIN</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Login