import React from 'react'
import TextInput from './TextInput.js'
import EmailInput from './EmailInput.js'
import PasswordInput from './PasswordInput.js'
import SubmitButton from './SubmitButton.js'

const SignUp = props => {
    return(
        <div className="signup">
        <h1>Sign Up</h1>
        <form>
            <TextInput label="User Type"/>
            <TextInput label="User Name"/>
            <EmailInput label="Email"/>
            <PasswordInput label="Password"/>
            <PasswordInput label="Re-Confirm Password"/>
            <SubmitButton label="Sign Up" />
            <p>Already a user? <a href="#">Log in</a></p>
        </form>
        </div>
    )
}

export default SignUp;