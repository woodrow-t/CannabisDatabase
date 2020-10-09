import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./race.scss"
// Recieve props parse and display races

export const Race = (props) => {
    
    
    return (
          
    <div className="race"> 
        <h1>I'm the Races</h1>

        <h1>Sativa</h1>
        <div className="icon">
            <img src="" alt="sativa ico"></img>
        </div>
        
        <p>Sativa strains often contain lower doses of CBD and higher doses of THC. This often produces a "head high" which is commonly for those looking for an energizing or anxiety-reducing effect. This stimulating effect makes sativas a popular choice for daytime use.</p>   
        <button className="sativa"><Link to={"/race/sativa"}>Search Sativa Strains</Link></button>

        <h1>Indica</h1>
        <div className="icon">
                <img src="https://i.imgur.com/ptGO0MC.png" alt="indica ico"></img>
        </div>
        
        <p>Indica strains generally contain higher amounts of CBD and lower amounts of THC. This generally results in a more relaxing effect, making this race of strains very popular for those seeking nausea and pain relief or an increase of appetite. Commonly recommended for use during down time or at night.</p> 
        <button className="indica"><Link to={"/race/indica"}>Search Indica Strains</Link></button>

        <h1>Hybrid</h1>
        <div className="icon">
            <img src="" alt="hybrid ico"></img>
        </div>

        <p>description of hybrid and it's uses here</p> 
        <button className="hybrid"><Link to={"/race/hybrid"}>Search Hybrid Strains</Link></button>
    </div>
    )
}