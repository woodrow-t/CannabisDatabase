import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// Recieve props parse and display races

export const Race = (props) => {
    
    
    return (
          
    <div className="race"> 
        <h1>I'm the Races</h1>

        <h1>Sativa</h1>
        <div>
            <img src="" alt="sativa ico"></img>
        </div>
        
        <p>description of sativa and it's uses here</p>   
        <button className="button sativa"><Link to={"/race/sativa"}>Sativa</Link></button>

        <h1>Indica</h1>
        <div>
            <img src="" alt="indica ico"></img>
        </div>
        
        <p>description of indica and it's uses here</p> 
        <button className="button indica"><Link to={"/race/indica"}>Indica</Link></button>

        <h1>Hybrid</h1>
        <div>
            <img src="" alt="hybrid ico"></img>
        </div>

        <p>description of hybrid and it's uses here</p> 
        <button className="button hybrid"><Link to={"/race/hybrid"}>Hybrid</Link></button>
    </div>
    )
}