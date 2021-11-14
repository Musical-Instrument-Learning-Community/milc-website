import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {LoginValidation} from './LoginValidation'

interface FormProps {
  switchToSign: () => void;
}

export const LoginForm: React.FC<FormProps> = ({switchToSign}) => {
  const handleContentChange = () => {
    switchToSign();
  }

  return(
    <>
     <Offcanvas.Header closeButton>
          <Offcanvas.Title>Log in to your MILC account!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    <div className="loginLabel">Username or email *</div>
    <input className='username'></input><div className="loginLabel"> Password *</div>
    <input className='password' type="password"></input>
    <div className="option" onClick={handleContentChange}>
      Don't have an account?  
        Join in MILC now
    </div>
    <button  className='loginBtn' onClick= { LoginValidation }>Log in</button>
        </Offcanvas.Body>
</>
  )
}

