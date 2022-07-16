import React, { useState } from 'react'
import Header from '../header.js'
import ResetInput from './ResetInput.js'
import Tag from './Tag.js'
import CountryDropdown from './CountryDropdown.js'
import Checkbox from './Checkbox.js'
import SortByDropdown from './SortByDropdown.js'
import InfluCard from '../SearchPage/InfluCard.js'
import GetSearch from '../GetSearch.js'

const SearchResult = props => {
  // eslint-disable-next-line no-unused-vars
  const [searchPhrase, setSearchPhrase] = useState(props.keywordArray.join(' '));
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");

  const keywordHandler = (event) => {
    setKeyword(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    props.setKeywordArray([...props.keywordArray, keyword]);
    console.log(props.keywordArray);

    setKeyword("");
  };


  const grabResults = (resData) => {
    console.log("FROM ResultPage " + props.location.country);
    console.log(resData.data);
    setResults(resData.data);
  }

    return (
      <div className="search-result">
        <Header userData={props.userData} />

        <div className="filters">
          <form onSubmit={addHandler}>
            <input
              className="search_input"
              type="text"
              placeholder="Gaming, Lifestyle"
              value={keyword}
              onChange={keywordHandler}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>

        <div className="searched-keywords">
          <div className="max-width-div">
            <h2>Your current search:</h2>
            <div className="one-line">
              <ul>
                {props.keywordArray.map((key) => (
                  <Tag tagname={key} />
                ))}

                <Tag tagname={JSON.parse(props.location).country} />
              </ul>
              <ResetInput
                keywordArray={props.keywordArray}
                location={props.location}
                setKeywordArray={props.setKeywordArray}
                setLocation={props.setLocation}
              />
            </div>
          </div>
        </div>
        <div className="apply-filters-div max-width-div">
          <div className="filters">
            <h2>Filters</h2>
            <div className="choose-area">
              <h3>Geographic Areas</h3>
              <CountryDropdown
                location={props.location}
                setLocation={props.setLocation}
                searchPhrase={searchPhrase}
                grabResults={grabResults}
              />
            </div>
            {/* <div className='choose-gender'>
            <h3>Gender</h3>
            <Checkbox name="Male" />
            <Checkbox name="Female" />
            <Checkbox name="Transgender" />
            <Checkbox name="Non-Binary" />
          </div> */}
            <div className="choose-topic">
              <h3>Topics</h3>
              <Checkbox name="Lifestyle" />
              <Checkbox name="Music" />
              <Checkbox name="Family" />
              <Checkbox name="Technology" />
              <Checkbox name="Design" />
              <Checkbox name="Travel" />
            </div>
          </div>

          <div className="results-container">
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
                  influ_img={result.snippet.thumbnails.default.url}
                  topic_ids={result.topicDetails.topicIds}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchResult;