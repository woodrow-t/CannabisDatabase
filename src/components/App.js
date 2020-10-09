import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Home} from "./Home"
import NavBar from "./NavBar"
import {NavBarDesk} from './NavBarDesk';
import {Race} from "./Race"
import {SingleStrain} from './SingleStrain';
import {StrainByRace} from "./StrainByRace"
import "./App.scss"

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
    <div className="body">
      <NavBar />
      <NavBarDesk />
      
      <Switch>
        <Route path="/race/:race" render={
          (renderprops) => <StrainByRace {...renderprops} />
        } />

        <Route path="/name/:name" render={
          (renderprops) => <SingleStrain {...renderprops} />
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
