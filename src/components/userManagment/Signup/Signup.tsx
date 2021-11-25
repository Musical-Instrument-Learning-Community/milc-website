import Offcanvas from 'react-bootstrap/Offcanvas'
import {SignupValidation} from './SignupValidation'

export interface FormProps {
    switchToSign: () => void;
}
export interface SignupFormProps {
    switchToSign: () => void;
    switchConfirmationView: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ switchToSign, switchConfirmationView }) => {

    const handleContentChange = () => {
        switchToSign();
    }

    return (
        <div>
                    <Offcanvas.Header closeButton>
          <Offcanvas.Title>Join in MILC now!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form>
            <div className="loginLabel">Username *</div>
            <input className='username'></input>
            <div className="loginLabel">Email *</div>
            <input className='username'></input>
            <div className="loginLabel"> Password *</div>
            <input className='password' type="password"></input>
            <div className="option" onClick={handleContentChange}>
                Aleady have an account?
                Log in now
            </div>
            <button type="submit" className='loginBtn' onClick={switchConfirmationView}>Sign up</button>
        </form>
        </Offcanvas.Body>
        </div>
    )
}

export const SignupComfirmation: React.FC<FormProps> = ({ switchToSign }) => {
    const handleContentChange = () => {
        switchToSign();
    }
    return (
        <div>
                    <Offcanvas.Header closeButton>
          <Offcanvas.Title>You've create a MILC account!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="option" onClick={handleContentChange}>
                Go back to login now!
            </div>
            <button  className='loginBtn' onClick={handleContentChange}>Back</button>
        </Offcanvas.Body>
        </div>
    )
}

