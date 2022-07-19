import React, {useState} from 'react'
import Header from '../header.js'
import DeleteButton from './DeleteButton.js'
import SearchInput from '../SearchResult/SearchInput.js'
import SortByDropdown from '../SearchResult/SortByDropdown.js'
import InfluCard from '../SearchPage/InfluCard.js'
import GetCampaignCreators from '../GetCampaignCreators'
import GetCreatorInfo from '../GetCreatorInfo.js'

const SingleCampaign = props => {

  const [results, setResults] = useState()

  const grabResults = (resData) => {
    console.log("FROM Single Campaign ");
    console.log(resData.data);
    setResults(resData.data);
  };
  
    return (
      <div className="single-campaign">
        <Header userData={props.userData} />
<<<<<<< HEAD
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
=======
        {console.log(props.campData)}
        {console.log("results:  ", results)}
        <div>
          <h1>{props.campData.campaignName}</h1>
          {/* <SubmitButton label="Edit" /> */}
          <DeleteButton
            userData={props.userData}
            campaignName={props.campData.campaignName}
          />
        </div>
        <p>{props.campData.description}</p>
        <p>Created on {props.campData.dateCreated}</p>
        {/* Add search icon in search input of SearchResult */}
        {/* <SearchInput name="creator-search" placeholder="Search for a creator" /> */}
>>>>>>> 44f20f75eb10a253b66e897ad2cb56d947f1cc78
        <div>
          <h2>
            {props.campData.creators == null ? 0 : props.campData.creators.length}
            Creators
          </h2>
          {/* <SortByDropdown /> */}
        </div>
<<<<<<< HEAD
        <div className='influencers-container'>
          {/* <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
                <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/> */}
=======
        <div>
          {props.campData.creators == null ? (
            <p>This campaign does not contain any influencers</p>
          ) : (
            <GetCampaignCreators
              userData={props.userData}
              campaignName={props.campData.campaignName}
              grabResults={grabResults}
            />
          )}
          {results == null || results == undefined || results == "" ? (
            <p>No influencers in this campaign</p>
          ) : (
            results.map((creator) => (
              <>
                <InfluCard
                  sub_count={creator.statistics.subscriberCount}
                  video_count={creator.statistics.videoCount}
                  view_count={creator.statistics.viewCount}
                  influ_name={creator.brandingSettings.channel.title}
                  influ_img={creator.snippet.thumbnails.default.url}
                  topic_ids={creator.topicDetails.topicIds}
                  country={creator.brandingSettings.channel.country}
                  channel_id={creator.id}
                  grabChannelInfo={props.grabChannelInfo}
                />
              </>
            ))
          )}
>>>>>>> 44f20f75eb10a253b66e897ad2cb56d947f1cc78
        </div>
      </div>
      </div>
      </div>
    );
}

export default SingleCampaign;