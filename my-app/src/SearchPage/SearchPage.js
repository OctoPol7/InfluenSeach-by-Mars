import React from "react"
import Header from '../header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'
import TopHeader from '../SearchPage/TopHeader.js';

const SearchPage = props => {
    return(
      <div className="searchpage">
        <TopHeader/>
        <SearchContainer/>
        <InfluContainer/> 
        </div>
    
    )      
}

export default SearchPage;
