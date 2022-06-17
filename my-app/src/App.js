import React from 'react'
import SignUp from './SignUp/SignUp.js'
import SearchPage from './SearchPage/SearchPage.js'
import './sass/style.scss';

const App = props => {
  return (
    <div className="App">
      {/* <SignUp /> */}
      
      <SearchPage />

    </div>
  );
}

export default App;
