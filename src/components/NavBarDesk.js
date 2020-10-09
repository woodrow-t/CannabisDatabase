import React from "react"
import Race from "./Race"
import {Link} from "react-router-dom";
import "./Navbardesk.scss"

export const NavBarDesk = (props) =>{
    return (
            <div className="navbardesk">
                <Link to="/"><p>Home</p> </Link>
                <Link to="/race"><p>Get Started </p></Link>
                <Link to="/race/sativa"><p>Sativa </p></Link>
                <Link to="/race/indica"><p>Indica </p></Link>
                <Link to="/race/hybrid"><p>Hybrid </p> </Link> 
            </div>
    )
}