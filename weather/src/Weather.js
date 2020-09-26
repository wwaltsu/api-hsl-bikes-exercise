import React, { useEffect, useState } from 'react';
import Time from './Time'
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const [weather, setWeather] = useState(null)
  useEffect( () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=60.17&lon=24.82&appid=403d14786816fcfd2059b70bf7f870be")
    .then(res => res.json())
    .then(res => setWeather(res))
  }, [])
    if(!weather) return null
 
  return (
    <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Weather in {weather.name} {weather.sys.country}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Temperature</td>
        <td>{Math.round(weather.main.temp - 273.15)}°C</td>
      </tr>
      <tr>   
        <td>Wind</td>
        <td>{weather.wind.speed} m/s</td>
      </tr>
      <tr>
      <td>Cloudiness</td>
      <td>{weather.weather[0].main}</td>
      </tr>
      <tr>
        <td>Humidy</td>
        <td>{weather.main.humidity}%</td>
      </tr>
      <tr>
        <td>Geo coord</td>
      <td> [{weather.coord.lon} {weather.coord.lat}]</td>
      </tr>
    </tbody>
  </table>

     
      


  )
  }
export default Weather;