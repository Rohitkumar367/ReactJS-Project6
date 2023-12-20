import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useState } from 'react';

const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const[formData, setFormdata] = useState({
    email: "",
    password: "",
  })

  const[showPassword, setShowPassword] = useState(false);

  function changeHandler(event){
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input 
            required
            type="email" 
            name='email'
            onChange={changeHandler}
            placeholder='Enter email id'
            value={formData.email}
          />
        </label>

        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input 
            required
            type={showPassword ? ("text") : ("password")} 
            name='password'
            onChange={changeHandler}
            placeholder='Enter password'
            value={formData.password}
          />

          <span onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? ("Hide Password") : ("Show Password")}
          </span>

          <Link to="#">
            <p>
              Forget Password
            </p>
          </Link>

        </label>

        <button>
          Sign In
        </button>

      </form>
      
    </div>
  )
}

export default LoginForm
