import React from "react"
import { Link } from "react-router-dom";
import "./home.scss"

export const Home = (props) => {
    return (
        <div className="home">
            <h1>Welcome to EDEN!</h1>
            <div className="home-intro"><p> An application containing all strains of cannabis for both medical and recreational use.</p></div>
            <div className="get-started">
                <Link to="/race">
                <h3>Let's Get Started</h3>
                </Link>
            </div>
            
        </div>
    )
}