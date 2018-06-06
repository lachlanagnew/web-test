import React, { Component } from 'react'
import header from '../assets/header.jpg'
import PackageCard from '../components/packageCard'
import Posts from '../components/posts'
import Footer from '../components/footer'
import ContactCard from '../components/contact-card'
import {Grid, Row, Col} from 'react-bootstrap'

import phoneIcon from '../assets/icons/svg/smartphone-1.svg'
import webIcon from '../assets/icons/svg/television-1.svg'
import hostingIcon from '../assets/icons/svg/folder-16.svg'
import designIcon from '../assets/icons/svg/windows-2.svg'
import databaseIcon from '../assets/icons/svg/database-1.svg'
import cloudIcon from '../assets/icons/svg/cloud-computing-1.svg'

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
    backgroundColor: '#545f80'
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
  },
  contactCard: {
    width: '40%',
    marginLeft: '5%',
    marginTop: '20px',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  contactContainer: {
    padding: 20
  }
}

const packages = [{
  title: 'Mobile Development',
  desc: 'Using the newest technologies such as react-native to create the best mobile application for you.',
  image: phoneIcon
}, {
  title: 'Web Development',
  desc: 'From a simple static display page up to a progressive web application, we can meet your needs.',
  image: webIcon
}, {
  title: 'Website Hosting',
  desc: 'Whatever the size, however big your userbase is, we can help you get it hosted.',
  image: hostingIcon
}, {
  title: 'Design',
  desc: 'For all of your design needs our team of talented, in-house designers will meet your needs.',
  image: designIcon
}, {
  title: 'Database Managment',
  desc: 'We can look after your database needs no matter the size.',
  image: databaseIcon
}, {
  title: 'Cloud Computing',
  desc: 'Harnessing serverless technology you can deploy all of your solutions in the cloud.',
  image: cloudIcon
}]

class Home extends Component {
  componentDidMount () {
  }
  render () {
    const packs = packages.map((pac) =>
      <Col xs={12} sm={6} md={4} lg={4} xl={4}>
        <PackageCard pac={pac} />
      </Col>
    )
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
              {packs}
            </Row>
          </div>
        </div>
        <div style={style.posts}>
          <div style={[style.fill, style.center]}>
            <Posts />
          </div>
        </div>
        <div style={style.contact}>
          <div style={style.contactContainer}>
            <div style={style.contactCard}>
              <ContactCard />
            </div>
          </div>
        </div>
        <div style={style.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
