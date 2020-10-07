import React from "react"
import {Race} from "./Race"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const Home = (props) => {
    return (
        <div>
            <h1>I'm the Home</h1>
            
            <Link to="/race">
            <h3>Let's Get Started</h3>
            </Link>
            
            <div>
            <Switch>
                <Route path="/race">
                    <Race />
                </Route>    
            </Switch>    
            </div>
        </div>
    )
}