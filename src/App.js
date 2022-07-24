import React, { useState } from "react";
import { Route } from "react-router-dom";

import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";
import SingleCampaign from "./SingleCampaign/SingleCampaign.js";
import Campaign from "./CampaignPage/Campaign.js";
import Landing from "./Landing/Landing";
import CreatorPage from "./CreatorPage/CreatorPage.js";
import ProfileSetting from "./ProfileSetting/ProfileSetting.js";
import AddCampaign from "./AddCampaign.js";
import "./sass/style.scss";

const App = (props) => {
  const [location, setLocation] = useState();
  const [keywordArray, setKeywordArray] = useState([]);
  const [userData, setUserData] = useState();
  const [channelId, setChannelId] = useState();

  const grabUserData = (data) => {
    setUserData(data);
    //console.log(JSON.stringify(data));
    console.log(data);
  }

  console.log("This is UserData: ... ",userData);
  
  const grabChannelId = (id) => {
    setChannelId(id);
    console.log(id);
  }

  return (
    <div className="App">
      <Route path="/" exact={true}>
        <Landing />
      </Route>
      <Route path="/search" exact={true}>
        <SearchPage
          keywordArray={keywordArray}
          location={location}
          setKeywordArray={setKeywordArray}
          setLocation={setLocation}
          userData={userData}
          grabChannelId={grabChannelId}
        />
      </Route>
      <Route path="/searchresult" exact={true}>
        <SearchResult
          keywordArray={keywordArray}
          location={location}
          setKeywordArray={setKeywordArray}
          setLocation={setLocation}
          userData={userData}
          grabChannelId={grabChannelId}
        />
      </Route>
      <Route path="/signup" exact={true}>
        <SignUp />
      </Route>
      <Route path="/login" exact={true}>
        <LogIn grabUserData={grabUserData} />
      </Route>
      <Route path="/getsearch" exact={true}>
        <GetSearch userData={userData} />
      </Route>
      <Route path="/singlecampaign" exact={true}>
        <SingleCampaign userData={userData} />
      </Route>
      <Route path="/campaign" exact={true}>
        <Campaign userData={userData} />
      </Route>
      <Route path="/newcampaign" exact={true}>
        <AddCampaign userData={userData} />
      </Route>
      <Route path="/creator" exact={true}>
        <CreatorPage userData={userData} channelId={channelId} />
      </Route>
      {/* <Route path="/profile" exact={true}>
        <ProfileSetting />
      </Route> */}
      <Route path="/profile">
        <ProfileSetting />
      </Route>
    </div>
  );
};

export default App;