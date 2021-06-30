import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Food from './components/Food/Food'
import Activities from './components/Activities/Activities'
import Beach from './components/Beach/Beach'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/beach">
            <Beach />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
