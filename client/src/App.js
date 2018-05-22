import React, { Component } from 'react'

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
          <Route exact path='/' render={(props) =>
            <h1> Home </h1> } />

          <Route path='/settings' render={(props) =>
            <h1> Settings </h1> } />
        </div>
      </Router>
    )
  }
}

export default App
