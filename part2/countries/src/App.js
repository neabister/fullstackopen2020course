import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  const [country, setCountry] = useState(null)


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fullfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', countries.length, 'countries')

  const handleCountryFilter = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value)
    setCountry(null)
  }

  const countryNameFilter = country => country.name.toLowerCase().includes(countryFilter.toLowerCase());

  return(
    
    <div>
      Find countries
      <Search countryFilter={countryFilter} handleCountryFilter={handleCountryFilter} />
      {country ?
        <FullCountryDetails country={country} /> :
        <CountryList countries={countries.filter(countryNameFilter)} setCountry={setCountry} />
      }
    </div>

  )

}

const Search = ({ countryFilter, handleCountryFilter }) => {
	return (
		<input
			value={countryFilter}
			onChange={handleCountryFilter}
		/>
	)
}

const CountryNameList = ({ countries, setCountry }) => {
  return (
    <div>
      {countries.map(country => 
        <div key={country.name}>
          <p>{country.name}</p>
          <button onClick={() => setCountry(country)}>
            show
          </button>
        </div>
      )}

    </div>
  )
}

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => {
        console.log('promise fullfilled')
        setWeather(response.data)
        console.log(response.data)
      })
  }
  useEffect(hook, [])
  if (!weather) {
    return (
      'Loading weather...'
    )
  }

  return (
    <div>
    <p><b>Temperature:</b> {weather.current.temperature} Celcius</p>
    <p><img src={weather.current.weather_icons[0]} alt="" width="100" /></p>
    <p><b>Wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
  )
}

const FullCountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>

      <p>Capital: {country.capital}</p>
 
      <p>Population: {country.population}</p>

      <h3>Languages</h3>
      <ul>
        {country.languages.map(l => 
          <li key={l.name}>{l.name}</li>  
        )}
      </ul>
      <img src={country.flag} alt="" width="200" />
      
      <h3>Weather in {country.capital}</h3>
      <Weather capital={country.capital} />

  </div>
  )
}

const CountryList = ({ countries, setCountry }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
  else if (countries.length === 1) {
    return (
     <FullCountryDetails country={countries[0]} />
    ) 
  }

  else {
    return (
      <CountryNameList countries={countries} setCountry={setCountry} />
    )
  } 
}

export default App;



