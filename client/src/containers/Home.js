import React, { Component } from 'react'
import header from '../assets/header.jpg'
import PackageCard from '../components/packageCard'
import {Grid, Row, Col} from 'react-bootstrap'

const style = {
  header: {
    width: '100%',
    height: '500px',
    backgroundImage: 'url(' + header + ')',
    backgroundSize: '100% auto',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat'
  },
  packages: {
    width: '100%',
    padding: '30px 60px 30px 60px'
  },
  posts: {
    width: '100%',
    height: '350px'
  },
  contact: {
    width: '100%',
    height: '400px'
  },
  footer: {
    width: '100%',
    height: '50px',
    backgroundColor: '#eee'
  },
  fill: {
    width: '100%',
    height: '100%'
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

class Home extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div>
        <div style={style.header}>
          Header
        </div>
        <div style={style.packages}>
          <div style={[style.fill, style.center]}>
            <Row className='show-grid'>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                <PackageCard />
              </Col>
            </Row>
          </div>
        </div>
        <div style={style.posts}>
          Posts
        </div>
        <div style={style.contact}>
          Contact
        </div>
        <div style={style.footer}>
          Footer
        </div>
      </div>
    )
  }
}

export default Home
