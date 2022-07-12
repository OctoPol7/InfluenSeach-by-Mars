import React, { useState } from "react"


const SearchInput = props => {
  const [keyword, setKeyword] = useState("");

  const keywordHandler = (event) => {
    setKeyword(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    props.grabLocation(keyword);

    setKeyword("");
  };

    return (
      <>
        <div className="search_inp_div">
          {/* <form onSubmit={addHandler}>
            <input
              className="search_input"
              type="text"
              placeholder={props.placeholder}
              value={keyword}
              onChange={keywordHandler}
            />
            <button type="submit">Add</button>
          </form>
          */}

          <NextBtn onClick={updateStep} name="Next" />
        </div>
      </>
    );
}



export default SearchInput;