import React from "react"
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
        <button className="button sativa">Sativa</button>
        <h1>Indica</h1>

        <div>
            <img src="" alt="indica ico"></img>
        </div>
        
        <p>description of indica and it's uses here</p> 
        <button className="button indica">Indica</button>
        <h1>Hybrid</h1>

        <div>
            <img src="" alt="hybrid ico"></img>
        </div>

        <p>descriotion of hybrid and it's uses here</p> 
        <button className="button hybrid">Hybrid</button>
    </div>
    )
}