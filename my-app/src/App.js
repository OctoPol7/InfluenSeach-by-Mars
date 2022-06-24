import React from "react";
import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";
import SingleCampaign from './SingleCampaign/SingleCampaign.js'

const App = (props) => {
  return (
    <div className="App">
      {/* <SearchPage /> */}
      {/* <SignUp />
      <LogIn />*/}

      {/* <SearchResult />  */}
      {/* <GetSearch /> */}
      <SingleCampaign />
    </div>
  );
};

export default App;
