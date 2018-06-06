import React, { Component } from 'react'
import Slider from 'react-slick'
import Post from './post'

class Posts extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={{padding: 50}} >
        <div style={{width: '100%', height: '200px', boxShadow: '6px 10px 31px 0 rgba(61, 70, 80, .3)'}}>
          <div style={{display: 'inline-block', width: '30%', height: '100%', backgroundImage: 'url(' + this.props.post.image + ')', backgroundRepeat: 'no-repeat'}} />
          <div style={{display: 'inline-block', width: '60%', height: '100%'}}>
            <h2>
              {this.props.post.title}
            </h2>
            <div>
              {this.props.post.preview}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
