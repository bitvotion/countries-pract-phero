import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const handleVisitedCountries = (country) => {

        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h1>In the countries</h1>
            <h3>Total visited country: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='flag-container'>
                {
                    visitedFlag.map((flag, i) => <img key={i} src={flag}></img>)
                }
            </div>
            <div className='country-container'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3?.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;