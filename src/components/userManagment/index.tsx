import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Login.scss'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {SignupForm, SignupComfirmation} from './Signup/Signup'
import {LoginValidation} from './Login/LoginValidation'
import {LoginForm} from './Login/Login'


export const LoginView = ()=>{
  const [isLoginView, setIsLogin] = useState(true);
  const [isSignupComfirmation, setIsSignupComfirmation] = useState(false);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const switchView = () => {
    setIsLogin(!isLoginView);
  }
  const switchConfirmationView = () => {
    setIsSignupComfirmation(!isSignupComfirmation);
  }      
  // Which page to show, Login or Signup 
  const LoginView = isLoginView && <LoginForm switchToSign={switchView} />
  const SignupView = (isSignupComfirmation && <SignupComfirmation switchToSign={switchView}/>) ||  <SignupForm switchToSign={switchView} switchConfirmationView= {switchConfirmationView}/>
  const viewContent =  LoginView|| SignupView 

  const userName = ""
  return (
    <>
    <div className="userName"onClick={handleShow} >{userName}</div>
    <FontAwesomeIcon icon={faUserCircle} onClick={handleShow} />
		<FontAwesomeIcon icon={['far', 'user-circle']}/> 
    
    <Offcanvas show={show} onHide={handleClose} placement='end'>

      {viewContent}
    </Offcanvas>
    </>
  );
}
