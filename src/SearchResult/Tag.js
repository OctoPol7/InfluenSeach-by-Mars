import React from 'react'
import CloseIcon from '../CloseIcon.png'

const Tag = (props) => {
  async function removeTag() {
    let newArray = [];

    await props.keywordArray.forEach((keyword) => {
      if (keyword !== props.name) {
        console.log(keyword);
        newArray.push(keyword);
      }
    });
    await props.setKeywordArray(newArray);
    console.log(props.keywordArray);
  }
  return (
    <>
      <div className="filtertag">
        {props.name}
        <button type="button" onClick={removeTag}>
          <img src={CloseIcon} alt="Close"></img>
        </button>
      </div>
    </>
  );
};

export default Tag;