import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Homepage from '../Homepage/Homepage'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
      </div>
      <div>
        <Switch>
          <Route to="/"/>
          <Route to="/"/>
          <Route to="/"/>
        </Switch>
      </div>
    )
  }
}

export default App
