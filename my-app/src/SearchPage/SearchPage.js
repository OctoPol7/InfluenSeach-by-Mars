import React, { useState } from "react"
import { Route } from "react-router-dom";

import Header from '../header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'
import SearchResult from "../SearchResult/SearchResult";


const SearchPage = props => {

  const grabKeyword = (key) => {
    props.keywordArray.push(key);
    console.log(props.keywordArray);
  }

  const grabLocation = (key) => {
    props.locationArray.push(key);
    console.log(props.locationArray);
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
          locationArray={props.locationArray}
          grabKeyword={grabKeyword}
          grabLocation={grabLocation}
          resetButton={resetButton}
        />
        <InfluContainer />

        
      </div>
    );      
}

export default SearchPage;
