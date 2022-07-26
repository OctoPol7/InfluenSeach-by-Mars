
import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom";

import Header from '../header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'
import LogIn from "../LogIn/LogIn.js";
// import SearchResult from "../SearchResult/SearchResult";


const SearchPage = props => {

  useEffect(() => {
    return console.log(props.keywordArray);
  }, [props.keywordArray]);

  const grabKeyword = (key) => {
    console.log(key);
    props.setKeywordArray([key, ...props.keywordArray]);
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
        {props.userData === undefined ? (
          <Route path="/search" exact={true}>
            <LogIn />
          </Route>
        ) : (
          <></>
        )}
        <Header userData={props.userData} />
        <SearchContainer
          keywordArray={props.keywordArray}
          location={props.location}
          setKeywordArray={props.setKeywordArray}
          setLocation={props.setLocation}
          grabKeyword={grabKeyword}
          grabLocation={grabLocation}
          removeKeyword={removeKeyword}
          resetButton={resetButton}
        />
        <div className="background">
          <div className=" max-width-div">
            <InfluContainer
              grabChannelInfo={props.grabChannelInfo}
              userData={props.userData}
            />
          </div>
        </div>
      </div>
    );      
}

export default SearchPage;
