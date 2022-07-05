import React, {useState} from 'react';
import FilterTag from "./FilterTag.js";

const StepOne = props => {
  const [keyword, setKeyword] = useState("");

  const keywordHandler = (event) => {
    setKeyword(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    props.grabKeyword(keyword);

    setKeyword("");
  };

    return (
      <>
        <p>Step 1/2</p>
        <h2>Which industry do you want to explore creators in?</h2>

        {/* <SearchInput
          grabKeyword={props.grabKeyword}
          resetButton={props.resetButton}
        /> */}
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
              placeholder="Gaming, Lifestyle"
              value={keyword}
              onChange={keywordHandler}
            />
            <button type="submit" style={{ display: "none" }}>
              Add
            </button>
          </form>

          {props.keywordArray.map((key) => (
            <FilterTag
              name={key}
              keywordArray={props.keywordArray}
              removeKeyword={props.removeKeyword}
            />
          ))}
          {props.location ? (
            <FilterTag
              name={JSON.parse(props.location).country}
              location={props.location}
            />
          ) : (
            <></>
          )}

           {/* <label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="reset_circle" onClick={props.resetButton}>
              Reset
            </div>
          </label>  */}
          
        </div>
      </>
    );
}



export default StepOne;