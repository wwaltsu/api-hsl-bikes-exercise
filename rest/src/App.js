import React, { useEffect, useState } from 'react';
import { Map, TileLayer,Marker,Popup  } from 'react-leaflet';
import './index.css';
const DEFAULT_LONGITUDE = 24.825037;
const DEFAULT_LATITUDE = 60.178432;
const App = () => {
  const [bikes, setBikes] = useState([])
 
  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setBikes(res.network.stations) )
  }, [])
  return (
    <Map center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} zoom={13}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; < a href=http://osm.org/copyright>
      OpenStreetMap</a> contributors"/>
    </Map>
  )
}

export default App;
