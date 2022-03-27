import React from 'react'
import {Link} from "react-router-dom";
import Input from '../../components/Input';
import './style.css';

const Register = () => {
  return (
    <div>
       <div className="container-register">
            <h1>Sign Up</h1>
            <Link to="/"><p>Login</p></Link>
            <form>
              <div className="text">
                <div className="firstname">
                <Input type="text" placeholder='First Name' />
                </div>
                <div className="lastname">
                <Input type="text" placeholder='Last Name' />
                </div>
              </div>
                <Input type="email" placeholder='Email'/>
                <Input type="password" placeholder='Enter your password'/>
                <Input type="password" placeholder='Confirm Your Password'/>
                <button>SIGNUP</button>
            </form>
        </div>
    </div>
  )
}

export default Register