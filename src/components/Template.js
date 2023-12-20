import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='toploginpage'>

      <div className='loginform'>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <br/>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? 
        (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>) }

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign in with Goggle</p>
        </button>

      </div>

        <div>
          <img src={image} alt="Patterns" />
          <br/>
          <img src={image} alt="Students" />
        </div>
      
    </div>
  )
}

export default Template
