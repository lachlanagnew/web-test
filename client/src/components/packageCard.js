import React, { Component } from 'react'

const style = {
  card: {
    width: '100%',
    height: '200px',
    boxShadow: '6px 10px 31px 0 rgba(61, 70, 80, .3)',
    marginBottom: 10,
    backgroundColor: '#eee'
  }
}

class PackageCard extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={style.card}>
      </div>
    )
  }
}

export default PackageCard
