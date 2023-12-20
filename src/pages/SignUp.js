import React from 'react'
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Join the millions learning"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image="image"
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      >
      </Template>
      
    </div>
  )
}

export default SignUp
