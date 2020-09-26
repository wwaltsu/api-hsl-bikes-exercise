import React, { useEffect, useState } from 'react';
import { Map, TileLayer,Marker,Popup  } from 'react-leaflet';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar'


const WeatherInfo = () => {
   const [weather, setWeather] = useState(null)
   useEffect( () => {
     fetch("https://api.openweathermap.org/data/2.5/weather?lat=60.179&lon=24.82&appid=403d14786816fcfd2059b70bf7f870be")
     .then(res => res.json())
     .then(res => setWeather(res))
   }, [])
   console.log(weather)
     if(!weather || !weather.main) return null
    console.log(weather.main);
     return( 
             <div className="temp">
              Tempareture at the moment: {Math.round(weather.main.temp - 273.15)}°C
              <div>Wind: {weather.wind.speed} m/s</div>
              <div>Cloudiness: {weather.weather[0].main}</div>
              <div>Humidy {weather.main.humidity}%</div>
              </div>
     )
     
}
     export default WeatherInfo