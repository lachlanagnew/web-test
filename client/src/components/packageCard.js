import React, { Component } from 'react'

const style = {
  card: {
    width: '100%',
    height: '220px',
    boxShadow: '6px 10px 31px 0 rgba(61, 70, 80, .3)',
    marginBottom: 10,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15
  },
  icon: {
    width: 75,
    height: 75
  },
  description: {
    textAlign: 'center'
  }
}

class PackageCard extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={style.card}>
        <div>
          <img style={style.icon} src={this.props.pac.image} />
        </div>
        <div>
          <h3> {this.props.pac.title} </h3>
        </div>
        <div style={style.description}>
          {this.props.pac.desc}
        </div>
      </div>
    )
  }
}

export default PackageCard
