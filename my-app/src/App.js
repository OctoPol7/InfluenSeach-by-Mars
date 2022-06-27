import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";
import SingleCampaign from './SingleCampaign/SingleCampaign.js'

const App = (props) => {
  return (
    <div className="App">
      <Route path="/search">
        <SearchPage />
      </Route>

<<<<<<< HEAD
      <SearchResult />
      {/* <GetSearch /> */}
      <SearchPage />
=======
      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/login">
        <LogIn />
      </Route>

      <Route path="/searchresult">
        <SearchResult />
      </Route>

      <Route path="/getserach">
        <GetSearch />
      </Route>

      <Route path="/singlecampaign">
        <SingleCampaign />
      </Route>
>>>>>>> c48c98f934af7412667a0e040a1a0b070b954ce4
    </div>
  );
};

export default App;
