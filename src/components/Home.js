import React from "react"
import { Link } from "react-router-dom";
import "./Home.scss"

export const Home = (props) => {
    return (
        <div className="home">
            <h1>Welcome to Eden!</h1>
            <div className="home-intro"><p> An application containing all strains of cannabis for both medical and recreational use.</p></div>
            <Link to="/race">
            <div className="get-started">  
                <h3>Get Started!</h3>   
            </div>
            </Link>
        </div>
    )
}