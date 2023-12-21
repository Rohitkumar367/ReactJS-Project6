import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const[formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event){
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password Do Not Match");
      return;
    }

    setIsLoggedIn(true);

    toast.success("Account Created");

    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }
    
    console.log("printing final account data");
    console.log(finalData);

    navigate("/dashboard");

  }

  return (
    <div>

      <div>
        <button onClick={() => setAccountType("student")} >
          Student
        </button>
        <button onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input 
              required
              type="text" 
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
            />
          </label>

          <label>
            <p>Last Name <sup>*</sup></p>
            <input 
              required
              type="text"
              name='lastName' 
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p>Email Address <sup>*</sup></p>
          <input 
            required
            type="email" 
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p>Create Password <sup>*</sup></p>
            <input 
              required
              type={showPassword ? ("text") : ("password")} 
              name='password'
              onChange={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
            />
            <span onClick={()=> setShowPassword((prev) => !prev)}>
              {showPassword ? ("hide password") : ("show password")}
            </span>
          </label>

          <label>
            <p>Confirm Password <sup>*</sup></p>
            <input 
              required
              type={showConfirmPassword ? ("text") : ("password")} 
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm password'
              value={formData.confirmPassword}
            />
            <span onClick={()=> setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? ("hide password") : ("show password")}
            </span>
          </label>
        </div>

        <button>
          Create Account
        </button>

      </form>


    </div>
  )
}

export default SignupForm
