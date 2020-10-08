import React from "react"
import Race from "./Race"
import {Link} from "react-router-dom";

export const NavBarDesk = (props) =>{
    return (
            <div className="navbardesk">
                <Link to="/">Home </Link>
                <Link to="/race">Get Started </Link>
                <Link to="/race/sativa">Sativa </Link>
                <Link to="/race/indica">Indica </Link>
                <Link to="/race/hybrid">Hybrid </Link> 
            </div>
    )
}