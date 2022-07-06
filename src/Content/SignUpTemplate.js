import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import InfoPopup from "../Popups/InfoPopup"
import PopupMessages from "../utils/PopupMessages"
import URLS from "../utils/URLS"
import authService from "../services/auth.service"

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

  const [isInfoPopupActive, setInfoPopupActive] = useState(false)
  const [InfoPopupText, setInfoPopupText] = useState({
    header: "",
    text: "",
    redirectionInfo: "",
  })
  let navigate = useNavigate()

  const checkIfEmailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const resetSignUpForm = () => {
    setEmailText("")
    setLoginText("")
    setPasswordText("")
    setPasswordVisibility(false)
  }

  const errorHandler = () => {
    if (!checkIfEmailIsValid(emailText)) {
      console.log("not email")
      setEmailValid(false)
    } else setEmailValid(true)
    if (loginText.length < 3) {
      console.log("invalid username")
      setUsernameValid(false)
    } else setUsernameValid(true)
    if (passwordText.length < 6) {
      console.log("invalid password")
      setPasswordValid(false)
    } else setPasswordValid(true)
  }

  const handleCheckbox = (e) => {
    enablePolicyCheckbox(setEnablePolicyCheckbox)
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
        const user = {
          username: loginText,
          email: emailText,
          password: passwordText,
        }
        register(user)
        break
      default:
        break
    }
  }

  const popup = (text = "", time = 5000, navTo = null) => {
    setInfoPopupText(text)
    setInfoPopupActive(true)
    setTimeout(() => {
      setInfoPopupActive(false)
      setInfoPopupText("") // reset text
      if (navTo != null) navigate(navTo)
    }, time)
  }

  function register(user) {
    errorHandler()
    authService
      .register(user)
      .then((response) => {
        popup(PopupMessages.userAccountCreated, 4000, "/signIn")
        resetSignUpForm()
        return response
      })
      .catch(function (error) {
        const { status } = error.response

        let text = ""
        switch (status) {
          case 409:
            text = {
              header: "Error!",
              text: error.response.data.message,
            }
            break
          case 400:
            const { message } = error.response.data
            const formattedMessage = message.map((msg, index) => {
              return <li key={index}>{msg}</li>
            })
            text = {
              header: "Error!",
              text: <ul>{formattedMessage}</ul>,
            }
            break
          default:
            break
        }

        popup(text, 4000)
        return error
      })
  }

  return (
    <>
      <InfoPopup trigger={isInfoPopupActive} infoPopupText={InfoPopupText} />
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
              className={`${!isEmailValid ? "invalid" : ""}`}
            />
            <label htmlFor='username'>
              <h2>Username</h2>
            </label>
            <input
              id='username'
              type='text'
              placeholder='username'
              value={loginText}
              onChange={handleInputs}
              className={`${!isUsernameValid ? "invalid" : ""}`}
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
              className={`${!isPasswordValid ? "invalid" : ""}`}
            />
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
