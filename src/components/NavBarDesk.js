import React from "react"
import Race from "./Race"
import {Link} from "react-router-dom";

export const NavBarDesk = (props) =>{
    return (
            <div className="navbardesk">
                <Link to="/">Home </Link>
                <Link to="/race">Get Started </Link>
                <a>Sativa </a>
                <a>Indica </a>
                <a>Hybrid </a> 
            </div>
    )
}