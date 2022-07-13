import React, {useState} from "react";
import { Route } from "react-router-dom";

import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";
import SingleCampaign from './SingleCampaign/SingleCampaign.js'
import CampaignPage from './CampaignPage/Campaign.js';
import CreatorPage from "./CreatorPage/CreatorPage.js";
// import './sass/style.scss'

const App = (props) => {
  const [location, setLocation] = useState();
  const [keywordArray, setKeywordArray] = useState([]);
  
  return (
    <div className="App">
      <Route path="/search">
        <SearchPage
          keywordArray={keywordArray}
          location={location}
          setKeywordArray={setKeywordArray}
          setLocation={setLocation}
        />
      </Route>

      <Route path="/searchresult">
        <SearchResult
          keywordArray={keywordArray}
          location={location}
          setKeywordArray={setKeywordArray}
          setLocation={setLocation}
        />
      </Route>

       <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/login">
        <LogIn />
      </Route>

      <Route path="/getsearch">
        <GetSearch />
      </Route>

      <Route path="/singlecampaign">
        <SingleCampaign />
      </Route>  
      <Route path="/campaign">
       <CampaignPage/>
       </Route>
       <Route path="/creator">
       <CreatorPage/>
       </Route>
    </div>
  );
};

export default App;
