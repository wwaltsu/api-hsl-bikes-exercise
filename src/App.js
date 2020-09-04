import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setData(res.network.stations) )
  }, []) 
  
  const listBikes = () => data.map(e => 
    <tr key={e.name}>
      <td>{e.name}</td>
      <td>{e.free_bikes}</td>
      <td>{e.empty_slots}</td>
    </tr>
    )
  

  return (
    <div className="App">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Aseman nimi</th>
              <th>Pyöriä saatavilla</th>
              <th>Paikkoja vapaana</th>
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
