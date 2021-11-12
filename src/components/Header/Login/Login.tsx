import React, { useState } from 'react'
import Modal, { ModalProps } from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Login.scss'
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'

function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Join in MILC now!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignupForm/>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}

const SignupForm = ()=>{
  return(
    <><div className="loginLabel">Username or email *</div>
    <input className='username'></input><div className="loginLabel"> Password *</div>
    <input className='password' type="password">
      </input><div className="signupOption">
    </div></>
  )
}

interface LoginFormProps{
  closeLoginCanvas: ()=>void;
}

const LoginForm: React.FC<LoginFormProps> = ({closeLoginCanvas}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalOpen = () => {
    setModalShow(true);
    closeLoginCanvas();
  }

  return(
    <><div className="loginLabel">Username or email *</div>
    <input className='username'></input><div className="loginLabel"> Password *</div>
    <input className='password' type="password"></input>
    <div className="signupOption">
            Don't have an account?  
            <div onClick={handleModalOpen}> 
              Join in MILC now
            </div>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
          </div>
</>
  )
}


export const LoginView = ()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon icon={faUserCircle} onClick={handleShow} />
		<FontAwesomeIcon icon={['far', 'user-circle']}/>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Log in to your MILC account!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LoginForm closeLoginCanvas={handleClose} />          
          <button  className='loginBtn'>Log in</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

