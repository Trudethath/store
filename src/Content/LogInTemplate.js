import React, { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthProvider"

function LoginTemplate() {
  const [loginText, setLoginText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const location = useLocation()
  const { post_signin } = useContext(AuthContext)
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

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
        const user = {
          email: loginText,
          password: passwordText,
        }
        post_signin(user, () => navigate(from, { replace: true }))
        break
      default:
        break
    }
  }

  return (
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
}

export default LoginTemplate
