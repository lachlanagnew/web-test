import React, { Component } from 'react'
import {
  HomeContainer,
  ContactContainer,
  AboutContainer,
  PackageContainer,
  PostContainer
} from './containers'
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
          <Route exact path='/' render={(props) => <HomeContainer />} />
          <Route exact path='/contact-us' render={(props) => <ContactContainer />} />
          <Route exact path='/about' render={(props) => <AboutContainer />} />
          <Route exact path='/package/*' render={(props) => <PackageContainer />} />
          <Route exact path='/post/*' render={(props) => <PostContainer />} />
        </div>
      </Router>
    )
  }
}

export default App
