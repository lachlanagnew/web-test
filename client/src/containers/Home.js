import React, { Component } from 'react'
import header from '../assets/header.jpg'
import PackageCard from '../components/packageCard'
import Posts from '../components/posts'
import Footer from '../components/footer'
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
    padding: '0px 60px 40px 60px'
  },
  contact: {
    width: '100%',
    height: '400px',
    backgroundColor: '#adccff'
  },
  footer: {
    width: '100%',
    backgroundColor: '#eee'
  },
  fill: {
    width: '100%',
    height: '100%'
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logo: {
    position: 'absolute',
    top: 30,
    left: 50,
    fontSize: 40
  }
}

class Home extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div>
        <div style={style.header}>
          <div style={style.logo}>
            Logo Here
          </div>
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
          <div style={[style.fill, style.center]}>
            <Posts />
          </div>
        </div>
        <div style={style.contact}>
          Contact
        </div>
        <div style={style.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
