import React from "react";
import SignUp from "./SignUp/SignUp.js";
import SearchPage from "./SearchPage/SearchPage.js";
import LogIn from "./LogIn/LogIn.js";
import SearchResult from "./SearchResult/SearchResult.js";
import GetSearch from "./GetSearch.js";

const App = (props) => {
  return (
    <div className="App">
      <SignUp />
      <LogIn />

      <SearchResult />
      {/* <GetSearch /> */}
    </div>
  );
};

export default App;
