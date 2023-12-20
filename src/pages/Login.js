import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image="image"
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      >
      </Template>
    </div>
  )
}

export default Login
