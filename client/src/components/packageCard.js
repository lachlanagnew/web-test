import React, { Component } from 'react'

const style = {
  card: {
    width: '100%',
    height: '200px',
    boxShadow: '6px 10px 31px 0 rgba(61, 70, 80, .3)',
    marginBottom: 10,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class PackageCard extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={style.card}>
        <div>
          <img />
        </div>
        <div>
          <h3> Mobile </h3>
        </div>
        <div>
          description
        </div>
      </div>
    )
  }
}

export default PackageCard
