import React, {useRef} from 'react'
import Axios from 'axios'

// import TextInput from './TextInput.js'
// import EmailInput from './EmailInput.js'
// import PasswordInput from './PasswordInput.js'
import SubmitButton from './SubmitButton.js'
import UserTypeDropdown from './UserTypeDropdown.js'

const SignUp = props => {

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
          userName: userNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        };

        Axios.post(`http://localhost:4000/user/signup`, user)
        .then(()=>{
            alert("Congratulations! " + user.userName +" successfully registered ")
        }
    );
    }

    return (
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={submitHandler}>
          <UserTypeDropdown label="User Type" name="userType" />
          <label>
            Username
            <input type="text" name="userName" ref={userNameRef} />
          </label>
          <label>
            Email
            <input type="email" name="email" ref={emailRef} />
          </label>
          <label>
            Password
            <input type="password" name='password' ref={passwordRef} />
          </label>
          {/* <TextInput label="User Name" name="userName" ref={userNameRef} /> */}
          {/* <EmailInput label="Email" name="email" ref={emailRef} />
          <PasswordInput label="Password" name="password" ref={passwordRef} />
          <PasswordInput label="Re-Confirm Password" name="reconfirmPassword" /> */}
          <div className="submit-button-div">
            <SubmitButton label="Sign Up" name="signupButton" />
          </div>
        </form>
        <p>
          Already a user? <a href="login">Log in</a>
        </p>
      </div>
    );
}

export default SignUp;