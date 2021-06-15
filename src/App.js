import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Food from './components/Food/Food'
import Entertainment from './components/Entertainment/Entertainment'
import Beach from './components/Beach/Beach'
import Kids from './components/Kids/Kids'

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
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/kids">
            <Kids />
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
