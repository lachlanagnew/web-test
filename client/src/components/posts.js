import React, { Component } from 'react'
import Slider from 'react-slick'
import Post from './post'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

class Posts extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={{width: '100%'}}>
        <Slider style={{height: '100%'}} {...settings}>
          <Post />
          <Post />
          <Post />
          <Post />
        </Slider>
      </div>
    )
  }
}

export default Posts
