import React, {useState, useEffect} from "react"
import "./singlestrain.scss"



export const SingleStrain = (props) => {
    const name = props.match.params.name
    const url = `https://strainapi.evanbusse.com/nsB8jbD/strains/search/name/${name}`
    const [strain, setStrain] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            
            .then(data => {
                setStrain(data[0])
            })
    }, [name]) 
    return strain ? (
    <div className="single-strain">
        <h1>{strain.name}</h1>
        <h2>{strain.race}</h2>
        <p>{strain.desc}</p>
    </div>
    ) : <h1> Loading...</h1>

}