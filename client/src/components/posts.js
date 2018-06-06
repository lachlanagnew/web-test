import React, { Component } from 'react'
import Slider from 'react-slick'
import Post from './post'

import cloudIcon from '../assets/icons/svg/cloud-computing-1.svg'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const blogs = [{
  title: 'MyStudyBuddy',
  preview: 'case study for myStudyBuddy',
  image: cloudIcon,
  body: '',
  author: '',
  time: ''
}, {
  title: 'Technical Post',
  preview: '',
  image: cloudIcon,
  body: '',
  author: '',
  time: ''
}, {
  title: 'Why you need a website.',
  preview: 'why does your company need a website upgrade?',
  image: cloudIcon,
  body: '',
  author: '',
  time: ''
}]

class Posts extends Component {
  componentDidMount () {
  }

  render () {
    const blogPosts = blogs.map((post) =>
      <Post post={post} />
    )
    return (
      <div style={{width: '100%'}}>
        <Slider style={{height: '100%'}} {...settings}>
          {blogPosts}
        </Slider>
      </div>
    )
  }
}

export default Posts
