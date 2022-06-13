import React from 'react'
import Creatorpage from './CreatorPage/Creatorpage.js';
import SignUp from './SignUp/SignUp.js'

const App = props => {
  return (
    <div className="App">
      <SignUp />
      <Creatorpage />

    </div>
  );
}

export default App;
