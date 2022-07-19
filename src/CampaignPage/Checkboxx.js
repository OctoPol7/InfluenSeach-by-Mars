import React, { useState } from "react";

const Checkbox = (props) => {

  return (
    <>
      <label htmlFor={props.name}>
        {props.name}
        <input
          type="checkbox"
          id={props.name}
          value={props.name}
          onClick={props.checkboxHandler}
        />
      </label>
    </>
  );
};

export default Checkbox;