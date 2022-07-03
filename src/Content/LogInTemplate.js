import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import InfoPopup from "../Popups/InfoPopup"
import axios from "axios"

function LoginTemplate() {
  const [loginText, setLoginText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const [isInfoPopupActive, setInfoPopupActive] = useState(false)
  const [InfoPopupText, setInfoPopupText] = useState({
    header: "",
    text: "",
    redirectionInfo: "",
  })
  let navigate = useNavigate()

  const sign_in_url = "http://localhost:3000/api/auth/login"

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
        login(user)
        console.log("send data")
        break
      default:
        break
    }
  }

  function login(user) {
    axios
      .post(sign_in_url, user)
      .then(function (response) {
        console.log(response)
        setInfoPopupText({
          header: "Success ",
          text: "You have successfully logged in.",
          redirectionInfo: "You will be redirected to main page soon.",
        })
        setInfoPopupActive(true)
        setTimeout(() => {
          setInfoPopupActive(false)
          setInfoPopupText({
            header: "",
            text: "",
            redirectionInfo: "",
          })
          navigate("/")
        }, 4000)

        return response
      })
      .catch(function (error) {
        console.log(error)
        return error
      })
  }

  return (
    <>
      <InfoPopup trigger={isInfoPopupActive} infoPopupText={InfoPopupText} />
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
    </>
  )
}

export default LoginTemplate
