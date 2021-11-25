import React, { useState } from 'react'


interface LoginValidation {
    username: string,
    password:string,    
}

export const SignupValidation = (props:LoginValidation)=>{
    const [isSignupComfirmationView, setIsSignupComfirmation] = useState(false);
    return isSignupComfirmationView

}