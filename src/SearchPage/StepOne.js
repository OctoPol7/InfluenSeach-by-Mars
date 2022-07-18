import React, {useState} from 'react';
import FilterTag from "./FilterTag.js";
import FilterLocationTag from './FilterLocationTag.js';

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
        <p className='step-number'>Step 1/2</p>
        <h2 className='step-details'>Which industry do you want to explore creators in?</h2>

        {/* <SearchInput
          grabKeyword={props.grabKeyword}
          resetButton={props.resetButton}
        /> */}
        <div className="search_inp_div">
          <div>
          <form onSubmit={addHandler}>
            <input
              className="search_input"
              type="text" 
              placeholder="Gaming, Lifestyle"
              value={keyword}
              onChange={keywordHandler}
            />
          </form></div>
        </div>

        <div className="search-filters">
          {props.keywordArray.map((key) => (
            <FilterTag
              name={key}
              setKeywordArray={props.setKeywordArray}
              keywordArray={props.keywordArray}
            />
          ))}

          {props.location ? (
            <FilterLocationTag
              name={JSON.parse(props.location).country}
              location={props.location}
              setLocation={props.setLocation}
            />
          ) : (
            <></>
          )}
        </div>
        <label>
            <div className="reset_circle" onClick={props.resetButton}>
              Reset
            </div>
          </label>
      </>
    );
}



export default StepOne;