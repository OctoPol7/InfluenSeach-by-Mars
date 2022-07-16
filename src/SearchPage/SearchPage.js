
import React from "react"
// import { Route } from "react-router-dom";

import Header from '../header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'
// import SearchResult from "../SearchResult/SearchResult";


const SearchPage = props => {

  const grabKeyword = (key) => {
    console.log(key);
    props.setKeywordArray([...props.keywordArray, key]);
    console.log(props.keywordArray);
  }

  const removeKeyword = (key) => {
    const newArray = props.keywordArray;
    newArray.splice(props.keywordArray.indexOf(key), 1);
    props.setKeywordArray(newArray);
    console.log(props.keywordArray);
  };

  const grabLocation = (key) => {
    props.setLocation(key);
    console.log(props.location);
  };

  const resetButton = () => {
    props.setKeywordArray([]);
    props.setLocation(null);
  };

    return (
      <div className="searchpage">
        <Header userData={props.userData} />
        <SearchContainer
          keywordArray={props.keywordArray}
          location={props.location}
          setLocation={props.setLocation}
          grabKeyword={grabKeyword}
          grabLocation={grabLocation}
          removeKeyword={removeKeyword}
          resetButton={resetButton}
        />
        <div className="background">
          <div className=" max-width-div">
            <InfluContainer />
          </div>
        </div>
      </div>
    );      
}

export default SearchPage;
