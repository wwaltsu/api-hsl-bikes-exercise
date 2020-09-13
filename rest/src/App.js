import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import './index.css';
import Map from './Map'
import Pyorat from './Pyorat'


const App = () => {
    
    const padding = {
        padding: 5
    }

    return (
        <div className="container">
            <Router>
                <div>
                <Link className="spaces" to="/">Koti</Link>
                    <Link className="spaces" to="/Map">Map</Link>
                </div>
                <Switch>
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
