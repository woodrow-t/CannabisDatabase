import React, {useState, useEffect} from "react"
import { Link, Route, Switch } from "react-router-dom";
import "./Strainbyrace.scss"

export const StrainByRace = (props) => {
    const race = props.match.params.race
    const url = `https://strainapi.evanbusse.com/nsB8jbD/strains/search/race/${race}`
    const [strains, setStrains] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            //pass data to race component
            .then(data => {
                setStrains(data)
            })
    }, [race]) 

    return strains ? (
        <div className="race">
            <h1 className="race-list-title">{race} Strains</h1>
            {strains.map((strain) => {
                return <Link to={`/name/${strain.name}`}><div className="strain-bubble"><h1>{strain.name}</h1></div></Link>
            })}
        </div>
    )
: <h1>Loading...</h1>
}