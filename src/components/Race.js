import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./race.scss"
// Recieve props parse and display races

export const Race = (props) => {
    
    
    return (
          
    <div className="race"> 
        <h1 className="race-title">Race Select</h1>

        <div className="race-window">
            <h1>Sativa</h1>
            <div className="icon">
                    <img src="https://i.imgur.com/bzH7jSm.png" alt="sativa ico"></img>
            </div>
            
            <p>Sativa strains often contain lower doses of CBD and higher doses of THC. This often produces a "head high" which is commonly for those looking for an energizing or anxiety-reducing effect. The stimulating effect of sativas make it a popular choice for daytime use.</p>
        </div>   
        <button className="sativa"><Link to={"/race/sativa"}>Search Sativa Strains</Link>
        </button>

        <div className="race-window">
            <h1>Indica</h1>
            <div className="icon">
                    <img src="https://i.imgur.com/BPa6zS9.png" alt="indica ico"></img>
            </div>
            
            <p>Indica strains generally contain higher amounts of CBD and lower amounts of THC. This generally results in a more relaxing effect, making this race of strains very popular for those seeking nausea and pain relief or an increase of appetite. Commonly recommended for use during down time or at night.</p> 
        </div>
            <button className="indica"><Link to={"/race/indica"}>Search Indica Strains</Link>
            </button>
        

        <div className="race-window">
            <h1>Hybrid</h1>
            <div className="icon">
                    <img src="https://i.imgur.com/RhtOaRL.png" alt="hybrid ico"></img>
            </div>
    
            <p>Hybrid strains exist as crosses of Sativa and Indica and can contain the effects of both strains. The balance of THC and CBD are dependent on the strain lineage. Hybrids are classified between Sativa-dominant and Indica-dominant.</p>
        </div>
        <button className="hybrid"><Link to={"/race/hybrid"}>Search Hybrid Strains</Link>
        </button>
    </div>
    )
}