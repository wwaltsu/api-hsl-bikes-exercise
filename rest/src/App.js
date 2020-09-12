import React, { useEffect, useState } from 'react';
import { Map, TileLayer,Marker,Popup  } from 'react-leaflet';
import './index.css';
const DEFAULT_LONGITUDE = 24.826430
const DEFAULT_LATITUDE = 60.179690
const position = [DEFAULT_LATITUDE, DEFAULT_LONGITUDE]


const App = () => {
  const [bikes, setBikes] = useState([])
  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setBikes(res.network.stations) )
  }, [])

  const listBikes = () => bikes.map(e => 
    <div key={e.name}>
      <p>{e.name}</p>
    </div>
    )

  const bikes_stations = () => bikes.map(station => 
    <Marker position = {[station.latitude, station.longitude]}>
       <Popup>
         <h3>{station.name}</h3>
        <p>Pyöriä vapaana asemalla tällä hetkellä {""}  
          {station.free_bikes} / 
          {station.empty_slots + station.free_bikes} </p>
      </Popup>
    </Marker>
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