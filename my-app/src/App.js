import React from 'react'
import SignUp from './SignUp/SignUp.js'
import LogIn from './LogIn/LogIn.js'

const App = props => {
  return (
    <div className="App">
      <h1>InfluenSearch</h1>
      <SignUp />
      <LogIn />
    </div>
  );
}

export default App;
