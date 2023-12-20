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

  function changeHandler(event){
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password Do Not Match");
      return;
    }

    setIsLoggedIn(true);

    toast.success("Account Created");
    const accountData = {
      ...formData
    };
    
    console.log("printing account data");
    console.log(accountData);

    navigate("/dashboard");

  }

  return (
    <div>
      
    </div>
  )
}

export default SignupForm
