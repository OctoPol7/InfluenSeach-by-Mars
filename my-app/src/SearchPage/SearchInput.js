import React, { useState } from "react";


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
        <div
          className="search_inp_div"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <form onSubmit={addHandler}>
            <input
              className="search_input"
              type="text"
              placeholder={props.placeholder}
              value={keyword}
              onChange={keywordHandler}
            />
            <button type="submit">Add</button>
          </form>

          <label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="reset_circle" onClick={props.resetButton}>
              Reset
            </div>
          </label>
        </div>
      </>
    );
}



export default SearchInput;