import React, { useState } from "react"
import { Route } from "react-router-dom";

import Header from '../Header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'
import SearchResult from "../SearchResult/SearchResult";



const SearchPage = props => {

  const grabKeyword = (key) => {
    props.keywordArray.push(key);
    console.log(props.keywordArray);
  }

  const removeKeyword = (key) => {
    props.keywordArray.splice(props.keywordArray.indexOf(key), 1);
    props.setKeywordArray(props.keywordArray);
    
  };

  const grabLocation = (key) => {
    props.setLocation(key);
    console.log(props.location);
  };

  const resetButton = () => {
    props.setKeywordArray([]);
    props.setLocationArray([]);
  };

    return (
      <div className="searchpage">
        <Header />
        <SearchContainer
          keywordArray={props.keywordArray}
          location={props.location}
          setLocation={props.setLocation}
          grabKeyword={grabKeyword}
          grabLocation={grabLocation}
          removeKeyword={removeKeyword}
          resetButton={resetButton}
        />
        <InfluContainer />
      </div>
    );      
}

export default SearchPage;
