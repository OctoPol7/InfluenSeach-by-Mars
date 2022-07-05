import React from 'react'
import EmailInput from './../SignUp/EmailInput.js'
import PasswordInput from './../SignUp/PasswordInput.js'
import SubmitButton from './../SignUp/SubmitButton.js'


const LogIn = props => {
    return(
        <div className="login">
        <h1>Log In</h1>
        <form action="/users" method="POST">
            <EmailInput label="Email" name="email"/>
            <PasswordInput label="Password" name="password"/>
            <div className='submit-button-div'>
                <SubmitButton label="Log In" name="loginButton"/>
            </div>
            <p>Not a user yet? <a href="signup">Sign Up</a></p>
        </form>
        </div>
    )
}

export default LogIn;