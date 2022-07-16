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
// import "./sass/style.scss";

const App = (props) => {
  const [location, setLocation] = useState();
  const [keywordArray, setKeywordArray] = useState([]);

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
        />
      </Route>
      <Route path="/searchresult" exact={true}>
        <SearchResult
          keywordArray={keywordArray}
          location={location}
          setKeywordArray={setKeywordArray}
          setLocation={setLocation}
        />
      </Route>
      <Route path="/signup" exact={true}>
        <SignUp />
      </Route>
      <Route path="/login" exact={true}>
        <LogIn />
      </Route>
      <Route path="/getsearch" exact={true}>
        <GetSearch />
      </Route>
      <Route path="/singlecampaign" exact={true}>
        <SingleCampaign />
      </Route>
      <Route path="/campaign" exact={true}>
        <Campaign />
      </Route>
    </div>
  );
};

export default App;
