import React from 'react'
import Header from '../header.js'
import SearchInput from './SearchInput.js'
import ResetInput from './ResetInput.js'
import Tag from './Tag.js'
import CountryDropdown from './CountryDropdown.js'
import Checkbox from './Checkbox.js'
import SortByDropdown from './SortByDropdown.js'
import InfluCard from '../SearchPage/InfluCard.js'

const SearchResult = props => {
    return(
        <div className="search-result">
           <Header />
           <div className="filters">
                <SearchInput name="filter-search" placeholder="New Search"/>
                <h2>Filters</h2>
                <div>
                    <p>Search Results For</p>
                   <ResetInput />
                   <ul>
                    {/* This is all dynamic content. It contains names of filters applied */}
                    <Tag tagname="Gaming "/>
                    <Tag tagname="Streaming "/>
                    <Tag tagname="Vancouver "/>
                    <Tag tagname="Fortnite "/>
                   </ul>  
                </div>
                <h2>Geographic Areas</h2>
                <CountryDropdown />
                <h2>Gender</h2>
                <Checkbox name="Male"/>
                <Checkbox name="Female"/>
                <Checkbox name="Transgender"/>
                <Checkbox name="Non-Binary"/>
                <h2>Topics</h2>
                <Checkbox name="Lifestyle"/>
                <Checkbox name="Music"/>
                <Checkbox name="Family"/>
                <Checkbox name="Technology"/>
                <Checkbox name="Design"/>
                <Checkbox name="Travel"/>
            </div>
            <div>
                <div>
                    <h2>250+ creators found</h2>
                    <SortByDropdown />
                </div>
                <div>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                </div>   
            </div>
        </div>
    )
}

export default SearchResult;