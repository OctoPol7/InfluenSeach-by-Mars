import React from 'react'
import Header from '../Header.js'
import SubmitButton from '../SignUp/SubmitButton.js'
import DeleteButton from './DeleteButton.js'
import SearchInput from '../SearchResult/SearchInput.js'
import SortByDropdown from '../SearchResult/SortByDropdown.js'
import InfluCard from '../SearchPage/InfluCard.js'

const SingleCampaign = props => {
    return(
        <div className="single-campaign">
            <Header />
            <div>
                <h1>Campaign Name #1</h1>
                <SubmitButton label="Edit" />
                <DeleteButton />
            </div>
            <p>This is the short description about the campain. The user can edit this text at the time of creation of the campaign.</p>
            <p>Created on: 12 May,2022</p>
            {/* Add search icon in search input of SearchResult */}
            <SearchInput name="creator-search" placeholder="Search for a creator"/>
            <div>
                <h2>23 Creators</h2>
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
    )
}

export default SingleCampaign;