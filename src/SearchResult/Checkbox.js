import React, { useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  async function unCheckbox(e) {
    let newArray = [];

    await props.keywordArray.map((keyword) => {
      if (keyword !== e.target.value) {
        console.log(keyword);
        newArray.push(keyword);
      }
    });
    await props.setKeywordArray(newArray);
    console.log(props.keywordArray);
    props.setSearchPhrase(props.keywordArray);
  }

  const grabValue = (e) => {
    setIsChecked((prevState) => !prevState);
    console.log(isChecked);
    console.log(e.target.value + " " + isChecked);
    if (isChecked === true) {
      // props.setKeywordArray((prevState=>[e.target.value, ...prevState]))
      // props.keywordHandler(e.target.value);
      props.checkboxHandler(e);
      console.log(e.target.value + " isChecked true");
    } else if (isChecked === false) {
      unCheckbox(e);
    }
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          id={props.name}
          value={props.name}
          onClick={(e) => grabValue(e)}
        />
        <label htmlFor={props.name}>{props.name}</label>
      </div>
    </>
  );
};

export default Checkbox;