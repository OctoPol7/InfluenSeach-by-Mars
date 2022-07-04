import React from "react";
import TextInput from "./TextInput.js";
import EmailInput from "./EmailInput.js";
import PasswordInput from "./PasswordInput.js";
import SubmitButton from "./SubmitButton.js";
import UserTypeDropdown from "./UserTypeDropdown.js";

const SignUp = (props) => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form action="/users" method="POST">
        <UserTypeDropdown label="User Type" name="userType" />
        <TextInput label="User Name" name="userName" />
        <EmailInput label="Email" name="email" />
        <PasswordInput label="Password" name="password" />
        <PasswordInput label="Re-Confirm Password" name="reconfirmPassword" />
        <SubmitButton label="Sign Up" name="signupButton" />
        <p>
          Already a user? <a href="login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
