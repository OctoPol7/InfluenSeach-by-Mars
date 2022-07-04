import React from "react";

const EmailInput = (props) => {
  return (
    <label>
      {props.label}
      <input type="email" name={props.name} />
    </label>
  );
};

export default EmailInput;
