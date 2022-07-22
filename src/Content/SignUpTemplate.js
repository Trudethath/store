import React, { useState, useContext } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/AuthProvider"

function LoginTemplate() {
  // Input states
  const [emailText, setEmailText] = useState("")
  const [loginText, setLoginText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [isPasswordVisible, setPasswordVisibility] = useState(false)
  const [enablePolicyCheckbox, setEnablePolicyCheckbox] = useState(false)

  // Validation states
  const [isEmailValid, setEmailValid] = useState(true)
  const [isUsernameValid, setUsernameValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const [policyAccepted, setPolicyAccepted] = useState(true)

  const location = useLocation()
  const { post_signup } = useContext(AuthContext)
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/signIn"

  const checkIfEmailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleCheckbox = (e) => {
    setEnablePolicyCheckbox(!enablePolicyCheckbox)
  }

  const validateForm = () => {
    console.log("validate form")
    if (checkIfEmailIsValid(emailText)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
      console.log("email invalid")
    }

    if (loginText !== "" && loginText.length >= 3) {
      setUsernameValid(true)
    } else {
      setUsernameValid(false)
      console.log("login invalid")
    }

    if (passwordText !== "" && passwordText.length >= 6) {
      setPasswordValid(true)
    } else {
      setPasswordValid(false)
      console.log("pass invalid")
    }

    if (enablePolicyCheckbox !== false) {
      setPolicyAccepted(true)
    } else {
      setPolicyAccepted(false)
      console.log("policy invalid")
    }
  }

  // Updates state with input texts
  const handleInputs = (e) => {
    e.preventDefault()
    switch (e.target.id) {
      case "email":
        setEmailText(e.target.value)
        break
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
        console.log("submit")
        validateForm()
        if (
          isEmailValid &&
          isUsernameValid &&
          isPasswordValid &&
          policyAccepted
        ) {
          const user = {
            username: loginText,
            email: emailText,
            password: passwordText,
          }
          post_signup(user, () => navigate(from, { replace: true }))
        }
        break
      default:
        break
    }
  }

  return (
    <>
      <div className='login-wrapper'>
        <div className='switchers'>
          <Link to='/signIn'>
            <span className='login-switcher'>LOG IN</span>
          </Link>

          <span className='login-switcher active'>SIGN UP</span>
          <form className='login-form'>
            <label htmlFor='email'>
              <h2>E-mail address</h2>
            </label>
            <input
              id='email'
              type='email'
              placeholder='e-mail address'
              value={emailText}
              onChange={handleInputs}
            />
            {!isEmailValid ? (
              <span className='errorMessage'>e-mail is incorrect !</span>
            ) : null}
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
            {!isUsernameValid ? (
              <span className='errorMessage'>
                Username is incorrect ! <p>(min 3 characters)</p>
              </span>
            ) : null}

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
            {!isPasswordValid ? (
              <span className='errorMessage'>
                Password is incorrect ! <p>(min 6 characters)</p>
              </span>
            ) : null}
            <button
              className='change-password-visibility'
              onClick={handleInputs}
            >
              {isPasswordVisible ? (
                <span id='passwordVisible'>Hide</span>
              ) : (
                <span id='passwordVisible'>Show</span>
              )}
            </button>

            <button
              className='change-password-visibility'
              onClick={handleInputs}
            ></button>
            <label className='label-checkbox'>
              <input type='checkbox' />
              <span>Newsletter</span>
            </label>

            <label id='policyCheckbox' className='label-checkbox terms'>
              <input
                type='checkbox'
                defaultChecked={enablePolicyCheckbox}
                onClick={handleCheckbox}
              />
              {!policyAccepted ? (
                <span className='errorMessage'>
                  {" "}
                  You must accept our Terms & Conditions
                </span>
              ) : null}
              <span>
                I accept the <u>Terms & Conditions</u> and{" "}
                <u>Privacy Policy.</u>
              </span>
            </label>

            <button id='submit' onClick={handleInputs}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginTemplate
