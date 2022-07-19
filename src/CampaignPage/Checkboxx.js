import React, { useState } from "react";

const Checkbox = (props) => {

  return (
    <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id={props.name}
          value={props.name}
          onClick={props.checkboxHandler}
        />
        <label htmlFor={props.name}>
        {props.name}
        </label>
    </div>
  );
};

export default Checkbox;