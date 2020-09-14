import React, { useEffect, useState } from 'react'


const App = () => {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setData(res.network.stations) )
  }, []) 
  
  const listBikes = () => data.map(station => 
    <tr key={station.name}>
      <td>{station.name}</td>
      <td>{station.free_bikes}</td>
      <td>{station.empty_slots}</td>
    </tr>
    )
  

  return (
    <div className="App">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Aseman nimi {""} {""}</th>
              <th>Pyöriä vapaana</th>
              <th>Telakoita vapaana</th>
            </tr>
          </thead>
          <tbody>
            {listBikes()}
          </tbody>
        </table>
      </div>
  )
}

export default App;
