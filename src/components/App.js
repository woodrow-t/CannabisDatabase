import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Home} from "./Home"
import NavBar from "./NavBar"
import {NavBarDesk} from './NavBarDesk';
import {Race} from "./Race"

function App() {

  fetch("https://strainapi.evanbusse.com/nsB8jbD/strains/search/all")
    .then(response => response.json())
  //pass data to race component
    .then(data => {
      console.log("Cannabis Data",data)
    })

  // const [cannabis, setCannabis] = useState([]);
  // //make API call for all cannabis data
  // const getCannabis = strains =>{
  //   fetch("https://strainapi.evanbusse.com/nsB8jbD/strains/search/all")
  //   .then(response => response.json())
  // //pass data to race component
  //   .then(data => {
  //     console.log("Cannabis Data",data)
  //   })
  // }00000

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
