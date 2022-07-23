import React, {useRef} from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
import SubmitButton from './SubmitButton.js'
import UserTypeDropdown from './UserTypeDropdown.js'
import Logo from "../Logo.svg"

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

        Axios.post(` http://localhost:4000/user/signup`, user)
        .then(()=>{
            alert("Congratulations! " + user.userName +" successfully registered ")
        });
    }

    return (
      <div className='signup-background'>
      <div className='max-width'>
      <div className="hidden">
        <img src={Logo} alt="InfluenSearch Logo"></img>
        <h2>Join Us</h2>
      </div>
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
          Already a user?
          <NavLink to="/login">
            <button type="submit">
              Login
            </button>
          </NavLink>
        </p>
      </div>
      </div>
      </div>
    );
}

export default SignUp;