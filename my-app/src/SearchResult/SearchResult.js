import React, { useState } from 'react'
import Header from '../Header.js'
import SearchInput from './SearchInput.js'
import ResetInput from './ResetInput.js'
import Tag from './Tag.js'
import CountryDropdown from './CountryDropdown.js'
import Checkbox from './Checkbox.js'
import SortByDropdown from './SortByDropdown.js'
import InfluCard from '../SearchPage/InfluCard.js'
import GetSearch from '../GetSearch.js'

const SearchResult = props => {
  const [searchPhrase, setSearchPhrase] = useState(props.keywordArray.join(' '));
  const [results, setResults] = useState([]);

  const grabResults = (resData) => {
    console.log("FROM ResultPage " + props.location.country);
    console.log(resData.data);
    setResults(resData.data);
  }

    return (
      <div className="search-result">
        <Header />
        <div className="filters">
          <SearchInput name="filter-search" placeholder="New Search" />
          <h2>Filters</h2>
          <div className="apply-filters-div">
            <p>Search Results For</p>
            <ResetInput
              keywordArray={props.keywordArray}
              location={props.location}
              setKeywordArray={props.setKeywordArray}
              setLocation={props.setLocation}
            />
            <ul>
              {/* This is all dynamic content. It contains names of filters applied */}
              {/* <Tag tagname="Gaming "/>
                    <Tag tagname="Streaming "/>
                    <Tag tagname="Vancouver "/>
                    <Tag tagname="Fortnite "/> */}

              {props.keywordArray.map((key) => (
                <Tag tagname={key} />
              ))}

              <Tag tagname={JSON.parse(props.location).country} />
            </ul>
          </div>
          <h2>Geographic Areas</h2>
          <CountryDropdown
            location={props.location}
            setLocation={props.setLocation}
            searchPhrase={searchPhrase}
            grabResults={grabResults}
          />
          <h2>Gender</h2>
          <Checkbox name="Male" />
          <Checkbox name="Female" />
          <Checkbox name="Transgender" />
          <Checkbox name="Non-Binary" />
          <h2>Topics</h2>
          <Checkbox name="Lifestyle" />
          <Checkbox name="Music" />
          <Checkbox name="Family" />
          <Checkbox name="Technology" />
          <Checkbox name="Design" />
          <Checkbox name="Travel" />
        </div>

        <div>
          <GetSearch
            searchPhrase={searchPhrase}
            location={props.location}
            grabResults={grabResults}
          />
          <div className="sort-by-grid">
            <h2>{results.length} creators found</h2>
            <SortByDropdown />
          </div>

          <div className="results">
            {results.map((result) => (
              <InfluCard
                sub_count={result.statistics.subscriberCount}
                video_count={result.statistics.videoCount}
                influ_name={result.brandingSettings.channel.title}
                // influ_img={result.brandingSettings.image.bannerExternalUrl}
                // tags={result.topicDetails.topicIds}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SearchResult;