import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Home} from "./Home"
import NavBar from "./NavBar"
import {NavBarDesk} from './NavBarDesk';
import {Race} from "./Race"

function App() {
  const [cannabis, setCannabis] = useState();

  useEffect(() => {
    fetch("https://strainapi.evanbusse.com/nsB8jbD/strains/search/all")
      .then(response => response.json())
      //pass data to race component
      .then(data => {
        setCannabis(data)
      })
  }, []) 
  console.log(cannabis)

  return (
    <div>
      <NavBar />
      <NavBarDesk />
      
      <Switch>
        <Route path="/race/:race" render={
          (renderprops) => <StrainByRace {...renderprops} />
        } />
          
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
