import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Home} from "./Home"
import NavBar from "./NavBar"
import {NavBarDesk} from './NavBarDesk';
import {Race} from "./Race"

function App() {
  //make API call for all cannabis data

  // let CannabisDataArray = []
  fetch("https://strainapi.evanbusse.com/nsB8jbD/strains/search/all")
  .then(response => response.json())
  
  //pass data to race component
  
  .then(data => {
    console.log("Cannabis Data",data)
    CannabisDataArray = data
  })
  // console.log(CannabisDataArray)
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
