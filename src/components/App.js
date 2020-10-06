import React, { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home"
import NavBar from "./NavBar"
import NavBarDesk from './NavBarDesk';
import Race from "./Race"

function App() {
  //make API call for all cannabis data
  
  //pass data to race component
  return (
    
    <div>
    
      <NavBar />
      <NavBarDesk />
      
      <Switch>
        <Route exact path="/race">
          <Race />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>

    </div>
    );   
}

export default App
