import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false)
    const flag = country?.flags?.flags?.png

    const handleVisited = () => {
        // Basic System
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // Second System
        // setVisited(visited ? false : true)

        // Third system
        setVisited(!visited)
        handleVisitedCountries(country)
        // handleVisitedFlag(country)
    }



    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <div>
                <img src={country?.flags?.flags?.png} alt={country.flags?.flags?.alt} />
            </div>
            <h3>{country.name?.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area?.area} {country.area?.area > 300000 ? "Big Country" : "Small Country"}</p>
            <div>
                <button onClick={handleVisited} >
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
                <button onClick={() => {handleVisitedFlag(flag)}}>
                    Add Visited Flag
                </button>
            </div>
        </div>
    );
};

export default Country;