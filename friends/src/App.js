import React from 'react';
import { Route } from 'react-router';
import { Reset } from 'styled-reset';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import "../src/App.css"


function App() {
  return (
    <div className="App">
  
      <Reset />
      <Route exact path ="/" component={Login} />
      <PrivateRoute path="/friendsList" component={FriendsList} />
    </div>
  );
}

export default App;