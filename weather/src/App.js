import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import './index.css';
import Map from './Map'
import Pyorat from './Pyorat'
import Weather from './Weather'



const App = () => {
    
    return (
        <div className="container">
            <Router>
                <div>
                    <Link className="spaces" to="/">Koti</Link>
                    <Link className="spaces" to="/Weather">Weather</Link>
                    <Link className="spaces" to="/Map">Map</Link>
                   
                </div>
                <Switch>
                <Route path="/Weather">
                        <Weather />
                    </Route>
                    <Route path="/Map">
                        <Map />
                    </Route>
                    <Route path="/">
                        <Pyorat />
                    </Route>
                    
                </Switch>

            </Router>
        </div>
    )
}

export default App
