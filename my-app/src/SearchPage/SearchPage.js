import React from "react"
import Header from '../header.js'
import SearchContainer from './SearchContainer.js'
import InfluContainer from './InfluContainer.js'

const SearchPage = props => {
    return(
      <div className="searchpage">
        <Header/>
        <SearchContainer/>
        <InfluContainer/> 
      </div> 
    )      
}

export default SearchPage;
