import React, {useState} from 'react'
import Header from '../header.js'
import DeleteButton from './DeleteButton.js'
// import SearchInput from '../SearchResult/SearchInput.js'
// import SortByDropdown from '../SearchResult/SortByDropdown.js'
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
        {console.log(props.campData)}
        {console.log("results:  ", results)}
        <div className='single-campaign-background'>
        <div className='max-width-div'>
        <div className='flex-setup'>
        <h1>{props.campData.campaignName}</h1>
          <div>
            {/* <SubmitButton label="Edit" /> */}
          <DeleteButton
            userData={props.userData}
            campaignName={props.campData.campaignName}
          />
          </div>
        </div>
        <p>{props.campData.description}</p>
        <p>Created on {props.campData.dateCreated}</p>
        <div>
          <h2>
            {props.campData.creators == null ? 0 : props.campData.creators.length}
            Creators
          </h2>
          {/* <SortByDropdown /> */}
        </div>
        <div className='influencers-container'>
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
        </div>
      </div>
      </div>
      </div>
    );
}

export default SingleCampaign;