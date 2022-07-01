import React, { useState } from "react"
import { Link } from "react-router-dom"

function LoginTemplate() {
  const [loginText, setLoginText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const handleInputs = (e) => {
    e.preventDefault()
    switch (e.target.id) {
      case "username":
        setLoginText(e.target.value)
        break
      case "password":
        setPasswordText(e.target.value)
        break
      case "passwordVisible":
        setPasswordVisibility(!isPasswordVisible)
        break
      case "submit":
        //sendData()  in development
        console.log("send data")
        break
      default:
        break
    }
  }

  const login = (
    <div className='login-wrapper'>
      <div className='switchers'>
        <span className='login-switcher active'>LOG IN</span>
        <Link to='/signUp'>
          <span className='login-switcher'>SIGN UP</span>
        </Link>
        <form className='login-form'>
          <label htmlFor='username'>
            <h2>Username</h2>
          </label>
          <input
            id='username'
            type='text'
            placeholder='username'
            value={loginText}
            onChange={handleInputs}
          />
          <label htmlFor='password'>
            <h2>Password</h2>
          </label>
          <input
            id='password'
            type={isPasswordVisible ? "text" : "password"}
            placeholder='password'
            value={passwordText}
            onChange={handleInputs}
          />
          <button className='change-password-visibility' onClick={handleInputs}>
            {isPasswordVisible ? (
              <span id='passwordVisible'>Hide</span>
            ) : (
              <span id='passwordVisible'>Show</span>
            )}
          </button>
          <span className='forgot-password'>Forgot password?</span>
          <label className='label-checkbox'>
            <input type='checkbox' />
            <span>Remember me</span>
          </label>

          <button id='submit' onClick={handleInputs}>
            Log in
          </button>

          <Link to='/signUp'>
            <span className='create-account'>Create an account</span>
          </Link>
        </form>
      </div>
    </div>
  )

  return login
}

export default LoginTemplate
