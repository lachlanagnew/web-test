import React, { Component } from 'react'
import Home from './containers/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor () {
    super()
}

  componentDidMount () {
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => <Home/> } />
          <Route path='/settings' render={(props) => <h1> Settings </h1> } />
        </div>
      </Router>
    )
  }
}

export default App
