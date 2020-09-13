import React, { useEffect, useState } from 'react';
import { Map, TileLayer,Marker,Popup  } from 'react-leaflet';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
const DEFAULT_LONGITUDE = 24.826430
const DEFAULT_LATITUDE = 60.179690
const position = [DEFAULT_LATITUDE, DEFAULT_LONGITUDE]
//{station.free_bikes/(station.free_bikes + station.empty_slots)*100}
/*
<p>Pyöriä vapaana asemalla tällä hetkellä {""}  
          {station.free_bikes} / 
          {station.empty_slots + station.free_bikes} </p>
          <ProgressBar animated now ={station.free_bikes /(station.empty_slots + station.free_bikes)} />
*/
const App = () => {
  const [bikes, setBikes] = useState([])
  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setBikes(res.network.stations) )
  }, [])

  const bikes_stations = () => bikes.map(station => {
    const percent = station.free_bikes/(station.free_bikes + station.empty_slots)*100
      return (
        <Marker position = {[station.latitude, station.longitude]}>
          <Popup>
            <h4>{station.name}</h4>
              Pyöriä vapaana asemalla tällä hetkellä {""}
              {station.free_bikes} / {""}
              {station.empty_slots + station.free_bikes}
              <ProgressBar variant={ percent < 30 ? "danger":  percent < 50 ? "warning": "success" } 
              animated now = {percent} />
              Tyhjiä paikkoja jäljellä {station.empty_slots}
          </Popup>
        </Marker>
      )
    }
  )
  return (
    <div>
    <Map center={position} zoom={13}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; < a href=http://osm.org/copyright>
      OpenStreetMap</a> contributors"/>
      {bikes_stations()}
    </Map>
    </div>
  )
}

export default App;