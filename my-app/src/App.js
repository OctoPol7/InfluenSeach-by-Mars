import React, {useState} from "react";
import { Route } from "react-router-dom";

import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";
import SingleCampaign from './SingleCampaign/SingleCampaign.js'

const App = (props) => {
  const [locationArray, setLocationArray] = useState([]);
  const [keywordArray, setKeywordArray] = useState([]);
  
  return (
    <div className="App">
      <Route path="/search">
        <SearchPage
          keywordArray={keywordArray}
          locationArray={locationArray}
          setKeywordArray={setKeywordArray}
          setLocationArray={setLocationArray}
        />
      </Route>

      <Route path="/searchresult">
        <SearchResult
          keywordArray={keywordArray}
          locationArray={locationArray}
          setKeywordArray={setKeywordArray}
          setLocationArray={setLocationArray}
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
    </div>
  );
};

export default App;
