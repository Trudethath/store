import React, { useState } from "react"

function LoginTemplate(props) {
  const [emailText, setEmailText] = useState("")
  const [loginText, setLoginText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [passwordTextRepeat, setPasswordTextRepeat] = useState("")
  const [isPasswordVisible, setPasswordVisibility] = useState(false)
  const [isPasswordRepeatVisible, setPasswordRepeatVisibility] = useState(false)

  const { handleSwitchers } = props

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
      case "passwordRepeat":
        setPasswordTextRepeat(e.target.value)
        break
      case "passwordVisible":
        setPasswordVisibility(!isPasswordVisible)
        break
      case "passwordRepeatVisible":
        setPasswordRepeatVisibility(!isPasswordRepeatVisible)
        break
      case "submit":
        //sendData()  in development
        console.log("send data")
        break
      default:
        break
    }
  }

  const signUp = (
    <div className='switchers'>
      <span className='login-switcher' onClick={() => handleSwitchers(true)}>
        LOG IN
      </span>
      <span
        className='login-switcher active'
        onClick={() => handleSwitchers(false)}
      >
        SIGN UP
      </span>
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

        <label htmlFor='passwordRepeat'>
          <h2>Repeat password</h2>
        </label>
        <input
          id='passwordRepeat'
          type={isPasswordRepeatVisible ? "text" : "password"}
          placeholder='repeat password'
          value={passwordTextRepeat}
          onChange={handleInputs}
        />
        <button className='change-password-visibility' onClick={handleInputs}>
          {isPasswordRepeatVisible ? (
            <span id='passwordRepeatVisible'>Hide</span>
          ) : (
            <span id='passwordRepeatVisible'>Show</span>
          )}
        </button>
        <label className='label-checkbox'>
          <input type='checkbox' />
          <span>Newsletter</span>
        </label>

        <button id='submit' onClick={handleInputs}>
          Sign up
        </button>
        <label className='label-checkbox terms'>
          <input type='checkbox' />
          <span>
            I accept the <u>Terms & Conditions</u> and <u>Privacy Policy.</u>
          </span>
        </label>
      </form>
    </div>
  )

  return signUp
}

export default LoginTemplate
