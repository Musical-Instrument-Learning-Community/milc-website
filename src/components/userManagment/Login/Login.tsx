import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { LoginValidation } from './LoginValidation'

interface FormProps {
  switchToSign: () => void;
}

export const LoginForm: React.FC<FormProps> = ({ switchToSign }) => {
  const handleContentChange = () => {
    
    switchToSign();
  }
  const handleSubmit = () => {
    console.log("handleSubmit is called");
    console.log(username,password);
  }

  const [username,setUserName] = React.useState( "" )
  const [password,setPassword] = React.useState( "" )
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Log in to your MILC account!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form action="" onSubmit={handleSubmit}>
          <div className="loginLabel">Username or email *</div>
          <input className='username' value={username} onChange={e => setUserName(e.target.value) } />
          <div className="loginLabel"> Password *</div>
          <input className='password' type="password" value={password} onChange={e => setPassword(e.target.value) }/>
          <div className="option" onClick={handleContentChange}>
            Don't have an account?
            Join in MILC now
          </div>
          <button className='loginBtn' type="submit" onClick={LoginValidation}>Log in</button>
        </form>
      </Offcanvas.Body>
    </>
  )
}

