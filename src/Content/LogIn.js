import React, { useState } from "react"
import LoginTemplate from "./LogInTemplate"
import SignUpTemplate from "./SignUpTemplate"

function LogIn() {
  const [loginPage, setLoginPage] = useState(true)

  const handleSwitchers = (opt) => {
    setLoginPage(opt)
  }

  return (
    <div className='login-wrapper'>
      {loginPage ? (
        <LoginTemplate handleSwitchers={handleSwitchers} />
      ) : (
        <SignUpTemplate handleSwitchers={handleSwitchers} />
      )}
    </div>
  )
}

export default LogIn
