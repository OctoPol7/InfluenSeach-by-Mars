import React, {useRef, useState} from 'react'
import Axios from 'axios'
import { Route, Redirect, NavLink } from 'react-router-dom'
// import EmailInput from './../SignUp/EmailInput.js'
// import PasswordInput from './../SignUp/PasswordInput.js'
import SubmitButton from './../SignUp/SubmitButton.js'
import Logo from "../Logo.svg"


const LogIn = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loginStatus, setLoginStatus] = useState('');


    const submitHandler = (event) => {
      event.preventDefault();

      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };


      Axios.post(`http://localhost:4000/user/login`, user)
        .then((res) => {
          props.grabUserData(res.data);

          setLoginStatus(res.data.message);

        },[])
        .catch((error) => setLoginStatus("Wrong combination"));

        console.log('asdf');
    };
    



    return (
      <div className='login-background'>
        <div className='max-width'>
        <div className="hidden">
          <img src={Logo} alt="InfluenSearch Logo"></img>
          <h2>Welcome</h2>
        </div>
      <div className="login">
        <h1>Log In</h1>
        <form onSubmit={submitHandler}>
          <label>
            Email
            <input type="email" name="email" ref={emailRef} />
          </label>
          <label>
            Password
            <input type="password" name="password" ref={passwordRef} />
          </label>
          {/* <EmailInput label="Email" name="email" />
          <PasswordInput label="Password" name="password" /> */}
          <div className="submit-button-div">
            <SubmitButton label="Log In" name="loginButton" />
          </div>
          <p>
            Not a user yet? 
            <NavLink to="/signup">
            <button type="submit">
              Sign Up
            </button>
            </NavLink>
          </p>
        </form>

        {loginStatus === "Authentication successful" ? (
          <Route path="/login">
            <Redirect to="/search"/>
          </Route>
        ) : (
          <p>{loginStatus}</p>
        )}
      </div>
      </div>
      </div>
    );
}

export default LogIn;