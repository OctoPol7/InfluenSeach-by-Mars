import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function EmailState() {
  let [Email, setEmail] = useState(false);

  const onEmailChange = (checked) => {
    setEmail(checked);
    
  };

  return (
   
      <div>
        <ToggleSwitch
          id="Email"
          checked={Email}
          onChange={onEmailChange}
        />
        <label htmlFor="Email"></label>
      </div>
    
        
  
  );
}
