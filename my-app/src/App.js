import React from 'react'
import SignUp from './SignUp/SignUp.js'
import LogIn from './LogIn/LogIn.js'
import SearchResult from './SearchResult/SearchResult.js'

const App = props => {
  return (
    <div className="App">
      {/* <SignUp />
      <LogIn /> */}

      <SearchResult />
    </div>
  );
}

export default App;
