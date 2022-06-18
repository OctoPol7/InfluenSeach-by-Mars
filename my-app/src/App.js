import React from "react";
import Creatorpage from "./CreatorPage/Creatorpage.js";
import SignUp from "./SignUp/SignUp.js";
import LogIn from "./LogIn/LogIn.js";

const App = (props) => {
  return (
    <div className="App">
      <h1>InfluenSearch</h1>
      <SignUp />

      <LogIn />

      <Creatorpage />
    </div>
  );
};

export default App;
