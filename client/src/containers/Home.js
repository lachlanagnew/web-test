import React, { Component } from 'react'
import header from '../assets/header.jpg'
import {Grid, Row, Col} from 'react-bootstrap'

const style = {
  header: {
    width: '100%',
    height: '600px',
    // backgroundImage: 'url(' + header + ')',
    backgroundSize: '100% auto'
  },
  packages: {
    width: '100%',
    height: '500px',
    // padding: '30px 60px 30px 60px'
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
    height: '50px'
  },
  fill: {
    width: '100%',
    height: '100%'
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
          <div style={style.fill}>
            <Row className='show-grid'>
              <Col lrg={4}>
                q
              </Col>
              <Col lrg={4}>
                w
              </Col>
              <Col lrg={4}>
                e
              </Col>
              <Col lrg={4}>
                a
              </Col>
              <Col lrg={4}>
                s
              </Col>
              <Col lrg={4}>
                d
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
