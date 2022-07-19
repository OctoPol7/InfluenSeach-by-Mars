import React from 'react'
import Header from '../header.js'
import DeleteButton from './DeleteButton.js'
import SearchInput from '../SearchResult/SearchInput.js'
import SortByDropdown from '../SearchResult/SortByDropdown.js'
// import InfluCard from '../SearchPage/InfluCard.js'

const SingleCampaign = props => {
    return (
      <div className="single-campaign">
        <Header userData={props.userData} />
        <div className='single-campaign-background'>
        <div className='max-width-div'>
        <div className='flex-setup'>
          <h1>Campaign Name #1</h1>
          <div>
            <button type="submit">Edit</button>
            <DeleteButton />
          </div>
        </div>
        <p>
          This is the short description about the campaign. The user can edit
          this text at the time of creation of the campaign.
        </p>
        <p>Created on: 12 May,2022</p>
        <div className='search-center'>
          <SearchInput name="creator-search" placeholder="Search for a creator" />
        </div>
        <div>
          <h2>23 Creators</h2>
          <SortByDropdown />
        </div>
        <div className='influencers-container'>
          {/* <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/> */}
        </div>
      </div>
      </div>
      </div>
    );
}

export default SingleCampaign;